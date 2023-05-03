using System;
using Domain.Interfaces;
using Domain.Model;
using MarcetUser;

namespace DataAccessEF.Repositories
{
	public class CategoryRepository : GenericRepository<Category>, ICategoryRepository
	{
		public CategoryRepository(DbA98a0dIlya29ilyaContext _db) : base(_db)
		{
		}

	}
}

