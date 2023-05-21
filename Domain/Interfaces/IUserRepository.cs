using System;
using Domain.Model;

namespace Domain.Interfaces
{
	public interface IUserRepository : IGenericRepository<AspNetUser>
    {
		List<AspNetUser> GetAllUsers();
	}
}

