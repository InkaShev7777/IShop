using System;
using Domain;
using Domain.Interfaces.UnitOfWork;
using Domain.Model;
using MarcetUser.CacheFolder;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MarcetUser.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ControllerClass : ControllerBase
    {
        private readonly IUnitOfWork unitOf;
        public ControllerClass(IUnitOfWork unitOfWork)
        {
            this.unitOf = unitOfWork;
        }

        [HttpGet]
        [Route("get-all-category")]
        public IResult getAllCategory()
        {
            return Results.Ok(this.unitOf.categoryRepository.GetAll());
        }

        [HttpGet]
        [Route("get-all-product")]
        public IResult getAllProduct()
        {
            return Results.Ok(this.unitOf.productRepository.GetAll());
        }
        [HttpGet]
        [Route("search-by-product")]
        public IResult Search(string qweryText)
        {
            var tempMas = this.unitOf.productRepository.SearchProduct(qweryText);
            if(tempMas.Count > 0)
            {
                return Results.Ok(tempMas);
            }
            return Results.Problem(statusCode:400);
        }
        [HttpGet]
        [Route("sort")]
        public IResult SortPriceUp(string sortID, string catID)
        {
            List<Product> tempMas;
            if (Convert.ToInt32(sortID) == 1)
            {
                if(Convert.ToInt32(catID) == 1)
                {
                    tempMas = this.unitOf.productRepository.GetAllProduct();
                    return Results.Ok(tempMas);
                }
                else
                {
                    tempMas = this.unitOf.productRepository.GetByCategoryID(Convert.ToInt32(catID));
                    return Results.Ok(tempMas);
                }
            }
            return Results.Ok(sortID);
        }
        [HttpPost]
        [Route("add-order")]
        public void AddToOrderTable(Order order)
        {
            this.unitOf.orderRepository.Add(order);
        }
        [HttpPost]
        [Route("update-categories")]
        public void Updatecatefgory(Category category)
        {
            this.unitOf.categoryRepository.Update(category);
        }
        [HttpPost]
        [Route("add-category")]
        public void Addcategory(Category category)
        {
            this.unitOf.categoryRepository.Add(category);
        }
        [HttpPost]
        [Route("delete-category")]
        public void DeleteCategory(Category category)
        {
            this.unitOf.categoryRepository.Delete(category.Id);
        }
        [HttpPost]
        [Route("update-order")]
        public void UpdateOrder(Order order)
        {
            this.unitOf.orderRepository.Update(order);
        }
        [HttpGet]
        [Route("get-all-orders")]
        public IResult GetAllOrders()
        {
            return Results.Ok(this.unitOf.orderRepository.GetAll());
        }
        [HttpPost]
        [Route("delete-order")]
        public void DeleteOrder(int id)
        {
            this.unitOf.orderRepository.Delete(id);
        }
    }
}

