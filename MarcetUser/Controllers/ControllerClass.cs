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
    }
}

