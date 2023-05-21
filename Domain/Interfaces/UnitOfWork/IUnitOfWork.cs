using System;
namespace Domain.Interfaces.UnitOfWork
{
	public interface IUnitOfWork : IDisposable
	{
		public ICategoryRepository categoryRepository { get; }
		public IProductRepository productRepository { get; }
		public IOrderRepository orderRepository { get; }
		public IUserRepository userRepository { get; }
		public int Complete();
	}
}

