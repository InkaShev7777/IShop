using System;
using Domain.Interfaces;
using Domain.Model;
using MarcetUser;

namespace DataAccessEF.Repositories
{
	public class OrderRepository : GenericRepository<Order>, IOrderRepository
    {
		public OrderRepository(DbA98a0dIlya29ilyaContext _db) : base(_db)
        {
		}
		public void AddToTable(Order order)
		{
			if(order != null)
			{
				this.Add(order);
			}
		}
	}
}

