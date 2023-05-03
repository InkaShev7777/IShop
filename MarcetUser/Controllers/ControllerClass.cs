//using System;
//using Domain;
//using Domain.Interfaces.UnitOfWork;
//using Domain.Model;
//using MarcetUser.CacheFolder;
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;

//namespace MarcetUser.Controllers
//{
//    [ApiController]

//    [Route("api/[controller]")]
//    public class ControllerClass : ControllerBase
//    {
//        #region
//        private readonly IUnitOfWork unit;
//        private readonly ICacheService cacheService;
//        public ControllerClass(IUnitOfWork unitOfWork, ICacheService _cacheService)
//        {
//            this.unit = unitOfWork;
//            this.cacheService = _cacheService;
//            try
//            {
//                if (cacheService.GetData<List<CategoryProduct>>("AllCategory") == null)
//                {
//                    cacheService.SetData("AllCategory", this.unit.categoryRepository.GetAll(), DateTimeOffset.Now.AddDays(1));
//                }
//                if (cacheService.GetData<List<Product>>("AllProduct") == null)
//                {
//                    cacheService.SetData("AllProduct", this.unit.productRepository.GetAll(), DateTimeOffset.Now.AddDays(1));
//                }
//                if (cacheService.GetData<List<Product>>("PopularProduct") == null)
//                {
//                    cacheService.SetData("PopularProduct", this.unit.productRepository.GetPopularProducts(), DateTimeOffset.Now.AddDays(1));
//                }
//            }
//            catch (Exception ex)
//            {
//                var message = ex.Message;
//            }
//        }
//        //
//        //	user
//        //

//        [HttpGet]
//        [Route("GetAllCategory")]
//        public IResult GetAllCategory()
//        {
//            var listCategory = cacheService.GetData<List<CategoryProduct>>("AllCategory");
//            return Results.Ok(listCategory);
//        }

//        [HttpGet]
//        [Route("GetProductsByID")]
//        public IResult GetProductsByID(int id)
//        {
//            return Results.Ok(cacheService.GetData<List<Product>>("AllProduct").Where(x => x.IdCategory == id));
//        }

//        [HttpGet]
//        [Route("SearchProduct")]
//        public IResult SearchProduct(string text)
//        {
//            return Results.Ok(cacheService.GetData<List<Product>>("AllProduct").Where(x => x.Title.ToLower().Contains(text.ToLower()) || x.Model.ToLower().Contains(text.ToLower())).ToList());
//        }
//        [HttpGet]
//        [Route("GetPopularProducts")]
//        public IResult GetPopularProducts()
//        {
//            return Results.Ok(cacheService.GetData<List<Product>>("PopularProduct"));
//        }
//        [HttpGet]
//        [Route("GetAllProduct")]
//        public IResult GetAllProducts()
//        {
//            return Results.Ok(cacheService.GetData<List<Product>>("AllProduct"));
//        }
//        //
//        //	admin
//        //

//        [HttpPost]
//        [Route("addCategory")]
//        [Authorize(Roles = RolesInProject.Admin)]
//        public void AddCategory(CategoryProduct category)
//        {
//            this.unit.categoryRepository.Add(category);
//            cacheService.SetData("AllCategory", this.unit.categoryRepository.GetAll(), DateTimeOffset.Now.AddDays(1));
//        }
//        [HttpPost]
//        [Route("deleteCategory")]
//        [Authorize(Roles = RolesInProject.Admin)]
//        public IResult DeleteCategory(int id)
//        {
//            if (cacheService.GetData<List<Product>>("AllProduct").Where(x => x.IdCategory == id).ToList().Count == 0)
//            {
//                this.unit.categoryRepository.Delete(id);
//                cacheService.SetData("AllCategory", this.unit.categoryRepository.GetAll(), DateTimeOffset.Now.AddDays(1));
//                return Results.Ok();
//            }
//            return Results.Problem("You can`t delete the category the procuct are in!!!");
//        }

//        [HttpPost]
//        [Route("deleteProduct")]
//        [Authorize(Roles = RolesInProject.Admin)]
//        public void DeleteProduct(int id)
//        {
//            this.unit.productRepository.Delete(id);
//            cacheService.SetData("AllProduct", this.unit.productRepository.GetAll(), DateTimeOffset.Now.AddDays(1));
//        }
//        [HttpPost]
//        [Route("addProduct")]
//        [Authorize(Roles = RolesInProject.Admin)]
//        public void AddProduct(Product product)
//        {
//            this.unit.productRepository.Add(product);
//            cacheService.SetData("AllProduct", this.unit.productRepository.GetAll(), DateTimeOffset.Now.AddDays(1));
//        }
//        [HttpPost]
//        [Route("updateProduct")]
//        [Authorize(Roles = RolesInProject.Admin)]
//        public void UpdateProduct(Product product)
//        {
//            this.unit.productRepository.Update(product);
//            cacheService.SetData("AllProduct", this.unit.productRepository.GetAll(), DateTimeOffset.Now.AddDays(1));
//        }
//        #endregion
//        private readonly IUnitOfWork unit;

//        public ControllerClass(IUnitOfWork unitOfWork)
//        {
//            this.unit = unitOfWork;
//        }
//        [HttpGet]
//        [Route("GetAllCategory")]
//        public IResult GetAllCategory()
//        {
//            return Results.Ok(this.unit.categoryRepository.GetAll());
//        }

//    }
//}

