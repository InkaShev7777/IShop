using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Domain;
using Domain.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Win32;

namespace MarcetUser.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class AuthenticationController : ControllerBase
	{
		private readonly RoleManager<IdentityRole> rolemanager;
		private readonly UserManager<IdentityUser> userManager;
		private readonly IConfiguration configuration;

		public AuthenticationController(RoleManager<IdentityRole> _rolemanager, UserManager<IdentityUser> _userManager, IConfiguration _configuration)
		{
			this.rolemanager = _rolemanager;
			this.userManager = _userManager;
			this.configuration = _configuration;
		}

		[HttpGet]
		[Route("get-all-admins")]
		public async Task<IResult> GetAdmins()
		{
			var users = userManager.Users.ToList();
			List<IdentityUser> admins = new List<IdentityUser>();
			foreach(var item in users)
			{
                var t = await userManager.GetRolesAsync(item);
                if (t.Count() > 0)
                {
                    var isAdmin = await userManager.IsInRoleAsync(item, t[0]);
					if(isAdmin == true)
					{
						admins.Add(item);
					}
                }
            }
			return Results.Ok(admins);
		}

        [HttpGet]
        [Route("get-all-users")]
        public async Task<IResult> GetUsers()
        {
            var users = userManager.Users.ToList();
            List<IdentityUser> admins = new List<IdentityUser>();
            foreach (var item in users)
            {
                var t = await userManager.GetRolesAsync(item);
                if (t.Count() > 0)
                {
                    var isAdmin = await userManager.IsInRoleAsync(item, t[0]);
                    if (isAdmin != true)
                    {
                        admins.Add(item);
                    }
                }
				else
				{
                    admins.Add(item);
                }
            }
            return Results.Ok(admins);
        }

        [HttpPost]
		[Route("regUser")]
		public async Task<IActionResult> RegUser([FromBody] Registr model)
		{
			var userEx = await userManager.FindByNameAsync(model.UserName);
			if (userEx != null) return StatusCode(StatusCodes.Status500InternalServerError, "User in db already");

			IdentityUser user = new()
			{
				UserName = model.UserName,
				Email = model.Email,
				SecurityStamp = Guid.NewGuid().ToString()
			};

			var res = await userManager.CreateAsync(user, model.Password);
			if (!res.Succeeded) { return StatusCode(StatusCodes.Status500InternalServerError, "Creation failed!"); }

			return Ok("User added!");
		}


		[HttpPost]
		[Route("regAdmin")]
		public async Task<IActionResult> RegAdmin([FromBody] Registr model)
		{
			var userEx = await userManager.FindByNameAsync(model.UserName);
			if (userEx != null) return StatusCode(StatusCodes.Status500InternalServerError, "Admin in db already");

			IdentityUser user = new()
			{
				UserName = model.UserName,
				Email = model.Email,
				SecurityStamp = Guid.NewGuid().ToString()
			};

			var res = await userManager.CreateAsync(user, model.Password);
			if (!res.Succeeded) { return StatusCode(StatusCodes.Status500InternalServerError, "Creation failed!"); }

			if (!await rolemanager.RoleExistsAsync(RolesInProject.Admin))
				await rolemanager.CreateAsync(new IdentityRole(RolesInProject.Admin));
			if (!await rolemanager.RoleExistsAsync(RolesInProject.User))
				await rolemanager.CreateAsync(new IdentityRole(RolesInProject.User));


			//Доступно только то, что авторизированно админу !
			if (await rolemanager.RoleExistsAsync(RolesInProject.Admin))
				await userManager.AddToRoleAsync(user, RolesInProject.Admin);
			// доступны методы и пользователей
			if (await rolemanager.RoleExistsAsync(RolesInProject.Admin))
				await userManager.AddToRoleAsync(user, RolesInProject.User);

			return Ok("Admin added!");
		}


		[HttpPost]
		[Route("Login")]
		public async Task<IActionResult> Login([FromBody] Login model)
		{
			var user = await this.userManager.FindByNameAsync(model.UserName);
			var d = this.userManager.CheckPasswordAsync(user, model.Password);
			if (user != null && await userManager.CheckPasswordAsync(user, model.Password))
			{
				var userRole = await userManager.GetRolesAsync(user);
				var authClaimse = new List<Claim>
				{
					new Claim(ClaimTypes.Name,user.UserName),
					new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString())
				};
				foreach (var item in userRole)
				{
					authClaimse.Add(new Claim(ClaimTypes.Role, item));
				}
				var token = GetToken(authClaimse);
				var t = await userManager.GetRolesAsync(user);
				var isAdmin = false;

                if (t.Count() > 0)
				{
					isAdmin = await userManager.IsInRoleAsync(user, t[0]);
				}

                return Ok(new
				{
					Token = new JwtSecurityTokenHandler().WriteToken(token),
					expiration = token.ValidTo,
					user.Id,
					isAdmin
				});
			}
			return Unauthorized();
		}
		private JwtSecurityToken GetToken(List<Claim> claimsList)
		{
			var signKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:secret"]));
			var token = new JwtSecurityToken(
				issuer: configuration["JWT:validIssuer"],
				audience: configuration["JWT:validAudience"],
				expires: DateTime.Now.AddHours(6),
				claims: claimsList,
				signingCredentials: new SigningCredentials(signKey, SecurityAlgorithms.HmacSha256)
				);
			return token;
		}
	}
}

