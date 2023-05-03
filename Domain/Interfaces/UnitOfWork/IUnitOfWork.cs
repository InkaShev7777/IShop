using System;
namespace Domain.Interfaces.UnitOfWork
{
	public interface IUnitOfWork : IDisposable
	{
		public ICategoryRepository categoryRepository { get; }
		public IProductRepository productRepository { get; }
		public int Complete();
	}
}

