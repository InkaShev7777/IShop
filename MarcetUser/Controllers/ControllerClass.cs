﻿using System;
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
    }
}

