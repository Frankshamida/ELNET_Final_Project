using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RETRA.Models;

namespace RETRA.Controllers
{
    [Authorize(Roles = Roles.Guest)]
    public class GuestController : Controller
    {
        public IActionResult Dashboard()
        {
            return View();
        }

        public IActionResult BookRoom()
        {
            return View();
        }

        public IActionResult MyBookings()
        {
            return View();
        }

        public IActionResult RoomService()
        {
            return View();
        }

        public IActionResult Facilities()
        {
            return View();
        }

        public IActionResult Billing()
        {
            return View();
        }

        public IActionResult Feedback()
        {
            return View();
        }
    }
}
