using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using RETRA.Models.AccountViewModels;
using RETRA.Models;
using RETRA.Services;

namespace RETRA.Controllers
{
    public class AccountController : Controller
    {
        private readonly IUserService _userService;

        public AccountController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public IActionResult Login(string? returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model, string returnUrl = null)
        {
            if (ModelState.IsValid)
            {
                var user = _userService.Authenticate(model.Username, model.Password);
                if (user != null)
                {
                    // Create claims
                    var claims = new List<Claim>
                    {
                        new Claim(ClaimTypes.Name, user.Username),
                        new Claim(ClaimTypes.Role, user.Role),
                        new Claim("FullName", $"{user.FirstName} {user.LastName}")
                    };

                    var claimsIdentity = new ClaimsIdentity(
                        claims, CookieAuthenticationDefaults.AuthenticationScheme);

                    var authProperties = new AuthenticationProperties
                    {
                        IsPersistent = model.RememberMe
                    };

                    await HttpContext.SignInAsync(
                        CookieAuthenticationDefaults.AuthenticationScheme,
                        new ClaimsPrincipal(claimsIdentity),
                        authProperties);

                    if (!string.IsNullOrEmpty(returnUrl) && Url.IsLocalUrl(returnUrl))
                        return Redirect(returnUrl);

                    return RedirectToAction("Dashboard", user.Role);
                }

                ModelState.AddModelError(string.Empty, "Invalid login attempt.");
            }
            return View(model);
        }

        [HttpGet]
        public IActionResult Register()
        {
            var model = new RegisterViewModel
            {
                // Only allow registration for non-admin roles
                RoleOptions = new List<SelectListItem>
                {
                    new SelectListItem { Value = Roles.FrontDesk, Text = "Front Desk Staff" },
                    new SelectListItem { Value = Roles.Housekeeping, Text = "Housekeeping Staff" },
                    new SelectListItem { Value = Roles.Guest, Text = "Guest" }
                }
            };
            return View(model);
        }

        [HttpPost]
        public IActionResult Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                if (_userService.Register(model))
                {
                    return RedirectToAction("Login");
                }
                ModelState.AddModelError(string.Empty, "Registration failed. Username may already exist.");
            }

            // Repopulate role options if model is invalid
            model.RoleOptions = new List<SelectListItem>
            {
                new SelectListItem { Value = Roles.FrontDesk, Text = "Front Desk Staff" },
                new SelectListItem { Value = Roles.Housekeeping, Text = "Housekeeping Staff" },
                new SelectListItem { Value = Roles.Guest, Text = "Guest" }
            };

            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("Login", "Account");
        }

        public IActionResult AccessDenied()
        {
            return View();
        }
    }
}