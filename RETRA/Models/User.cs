using Microsoft.AspNetCore.Mvc;

namespace RETRA.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; } // In real app, store hashed passwords
        public string Role { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public object ProfilePicture { get; internal set; }
    }
}
