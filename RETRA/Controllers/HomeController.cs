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
    }
}
