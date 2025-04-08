using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RETRA.Models;

namespace RETRA.Controllers
{
    [Authorize(Roles = Roles.Housekeeping)]
    public class HousekeepingController : Controller
    {
        public IActionResult Dashboard()
        {
            return View();
        }
        public IActionResult CleaningSchedule()
        {
            return View();
        }
        public IActionResult Maintenance()
        {
            return View();
        }
        public IActionResult Inventory()
        {
            return View();
        }
        public IActionResult RoomStatus()
        {
            return View();
        }
        public IActionResult ReportIssue()
        {
            return View();
        }
    }
}
