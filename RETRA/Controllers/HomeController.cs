using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using RETRA.Models;

namespace RETRA.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult CheckAvailability()
        {
            return View();
        }

        public IActionResult bookingconfirmation()
        {
            return View();
        }

        public IActionResult TermsAndConditions()
        {
            return View();
        }

        public IActionResult Checkout()
        {
            return View();
        }

        public IActionResult Services()
        {
            return View();
        }

        public IActionResult FAQ()
        {
            return View();
        }


    }
}
