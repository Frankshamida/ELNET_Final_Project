using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Rendering;
using RETRA.Models.AccountViewModels;

namespace RETRA.ViewModels
{
    public class UserManagementViewModel
    {
        public IEnumerable<UserViewModel> Users { get; set; }
        public RegisterViewModel RegisterModel { get; set; }
    }
}