using System;
using Domain.Model;

namespace Domain.Interfaces
{
    public interface IProductRepository : IGenericRepository<Product>
    {
        List<Product> GetByCategoryID(int id);
        List<Product> SearchProduct(string text);
        List<Product> GetPopularProducts();
        List<Product> GetAllProduct();
    }
}

