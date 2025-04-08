using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RETRA.Models;
using RETRA.Services;

namespace RETRA.Controllers
{
    [Authorize(Roles = Roles.Admin)]
    public class AdminController : Controller
    {
        private readonly IUserService _userService;

        public AdminController(IUserService userService)
        {
            _userService = userService;
        }

        public IActionResult Dashboard()
        {
            var users = _userService.GetAllUsers();
            return View(users);
        }

        public IActionResult Staff()
        {
            var users = _userService.GetAllUsers();
            return View(users);
        }



        public IActionResult GuestManagement()
        {
            return View();
        }

        public IActionResult RoomInventory()
        {
            return View();
        }

        public IActionResult AllBookings()
        {
            return View();
        }

        public IActionResult PaymentProcessing()
        {
            return View();
        }

        public IActionResult Housekeeping()
        {
            return View();
        }

        public IActionResult Reports()
        {
            return View();
        }

        public IActionResult SystemSettings()
        {
            return View();
        }
    }
}
