using Microsoft.AspNetCore.Mvc;
using RETRA.Models.AccountViewModels;
using RETRA.Models;

namespace RETRA.Services
{
    public interface IUserService
    {
        User Authenticate(string username, string password);
        bool Register(RegisterViewModel model);
        List<User> GetAllUsers();
        User GetById(int id);
    }

    public class UserService : IUserService
    {
        // In-memory user list with profile pictures
        private readonly List<User> _users = new List<User>
        {
            new User
            {
                Id = 1,
                Username = "admin",
                Email = "admin@hotel.com",
                Password = "admin123", // Note: In production, store hashed passwords
                Role = Roles.Admin,
                FirstName = "Admin",
                LastName = "User",
                ProfilePicture = "/images/7.png"
            },
            new User
            {
                Id = 2,
                Username = "frontdesk1",
                Email = "frontdesk@hotel.com",
                Password = "frontdesk123",
                Role = Roles.FrontDesk,
                FirstName = "Front",
                LastName = "Desk",
                ProfilePicture = GenerateAvatarUrl("Front Desk")
            },
            new User
            {
                Id = 3,
                Username = "housekeeping1",
                Email = "housekeeping@hotel.com",
                Password = "housekeeping123",
                Role = Roles.Housekeeping,
                FirstName = "House",
                LastName = "Keeping",
                ProfilePicture = GenerateAvatarUrl("House Keeping")
            },
            new User
            {
                Id = 4,
                Username = "guest1",
                Email = "guest@example.com",
                Password = "guest123",
                Role = Roles.Guest,
                FirstName = "John",
                LastName = "Doe",
                ProfilePicture = GenerateAvatarUrl("John Doe")
            }
        };

        // Helper method to generate avatar URLs
        private static string GenerateAvatarUrl(string seed)
        {
            var encodedSeed = Uri.EscapeDataString(seed);
            return $"https://api.dicebear.com/7.x/initials/svg?seed={encodedSeed}&backgroundType=gradientLinear&fontFamily=Helvetica";
        }

        public User Authenticate(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;

            var user = _users.SingleOrDefault(x =>
                string.Equals(x.Username, username, StringComparison.OrdinalIgnoreCase) &&
                x.Password == password); // In production, use password hashing

            return user;
        }

        public bool Register(RegisterViewModel model)
        {
            if (model == null)
                throw new ArgumentNullException(nameof(model));

            // Validate required fields
            if (string.IsNullOrWhiteSpace(model.Username) ||
                string.IsNullOrWhiteSpace(model.Password) ||
                string.IsNullOrWhiteSpace(model.Email))
                return false;

            // Check if username or email already exists
            if (_users.Any(x =>
                string.Equals(x.Username, model.Username, StringComparison.OrdinalIgnoreCase) ||
                string.Equals(x.Email, model.Email, StringComparison.OrdinalIgnoreCase)))
            {
                return false;
            }

            var user = new User
            {
                Id = _users.Count + 1,
                Username = model.Username.Trim(),
                Email = model.Email.Trim(),
                Password = model.Password, // In production, hash the password
                Role = model.Role ?? Roles.Guest, // Default to Guest role if not specified
                FirstName = model.FirstName?.Trim(),
                LastName = model.LastName?.Trim(),
                ProfilePicture = GenerateAvatarUrl($"{model.FirstName} {model.LastName}")
            };

            _users.Add(user);
            return true;
        }

        public List<User> GetAllUsers()
        {
            // Return a copy to prevent modification of the original list
            return _users.Select(u => new User
            {
                Id = u.Id,
                Username = u.Username,
                Email = u.Email,
                Role = u.Role,
                FirstName = u.FirstName,
                LastName = u.LastName,
                ProfilePicture = u.ProfilePicture
                // Don't return password in the list
            }).ToList();
        }

        public User GetById(int id)
        {
            var user = _users.FirstOrDefault(x => x.Id == id);
            if (user == null) return null;

            // Return a copy without the password
            return new User
            {
                Id = user.Id,
                Username = user.Username,
                Email = user.Email,
                Role = user.Role,
                FirstName = user.FirstName,
                LastName = user.LastName,
                ProfilePicture = user.ProfilePicture
            };
        }
    }
}