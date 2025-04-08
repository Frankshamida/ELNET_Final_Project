using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RETRA.Models;

namespace RETRA.Controllers
{
    [Authorize(Roles = Roles.FrontDesk)]
    public class FrontDeskController : Controller
    {
        public IActionResult Dashboard()
        {
            return View();
        }
        public IActionResult CheckIn()
        {
            return View();
        }

        public IActionResult CheckOut()
        {
            return View();
        }

        public IActionResult GuestDirectory()
        {
            return View();
        }

        public IActionResult Bookings()
        {
            return View();
        }

        public IActionResult RoomStatus()
        {
            return View();
        }

        public IActionResult Payments()
        {
            return View();
        }

        public IActionResult ServiceRequests()
        {
            return View();
        }

    }
}
