using System;
using DataAccessEF.Repositories;
using Domain.Interfaces;
using Domain.Interfaces.UnitOfWork;
using MarcetUser;

namespace DataAccessEF.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DbA98a0dIlya29ilyaContext context;

        public ICategoryRepository categoryRepository { get; private set; }
        public IProductRepository productRepository { get; private set; }
        public IOrderRepository orderRepository { get; private set; }
        public IUserRepository userRepository { get; private set; }

        public UnitOfWork(DbA98a0dIlya29ilyaContext _context)
        {
            this.context = _context;
            this.categoryRepository = new CategoryRepository(this.context);
            this.productRepository = new ProductRepository(this.context);
            this.orderRepository = new OrderRepository(this.context);
            this.userRepository = new UserRepositpry(this.context);
        }


        public int Complete() => this.context.SaveChanges();

        public void Dispose() => this.context.Dispose();
    }
}

