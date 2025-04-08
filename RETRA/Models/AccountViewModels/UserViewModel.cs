using Microsoft.AspNetCore.Mvc;

namespace RETRA.Models.AccountViewModels
{
    public class UserViewModel : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
