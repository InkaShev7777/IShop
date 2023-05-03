using System;
using Domain.Interfaces;
using Domain.Model;
using MarcetUser;

namespace DataAccessEF.Repositories
{
    public class ProductRepository : GenericRepository<Product>, IProductRepository
    {
        public ProductRepository(DbA98a0dIlya29ilyaContext _db) : base(_db)
        {
        }

        public List<Product> GetByCategoryID(int id)
        {
            return this.db.Products.Where(x => x.IdCategory == id).ToList();
        }

        public List<Product> SearchProduct(string text)
        {
            return this.db.Products.Where(x => x.Title.ToLower().Contains(text.ToLower())).ToList();
        }
        public List<Product> GetPopularProducts()
        {
            List<Product> products = new List<Product>();
            foreach (var item in this.db.Categories.ToList())
            {
                Product temp = this.db.Products.Where(x => x.IdCategory == item.Id).FirstOrDefault();
                if (temp != null)
                {
                    products.Add(temp);
                }
            }
            return products;
        }
        public List<Product> GetAllProduct()
        {
            return this.db.Products.ToList();
        }
    }
}

