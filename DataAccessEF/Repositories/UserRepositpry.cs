using System;
using Domain.Interfaces;
using Domain.Model;
using MarcetUser;

namespace DataAccessEF.Repositories
{
	public class UserRepositpry : GenericRepository<AspNetUser>, IUserRepository
    {
		public UserRepositpry(DbA98a0dIlya29ilyaContext _db) : base(_db)
        {
		}
		public List<AspNetUser> GetAllUsers()
		{
			//return this.db.AspNetUsers.ToList();
			return this.GetAllUsers();
		}
	}
}

