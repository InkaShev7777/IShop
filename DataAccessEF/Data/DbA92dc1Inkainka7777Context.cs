//using System;
//using System.Collections.Generic;
////using Domain.Models;
//using Microsoft.AspNetCore.Identity;
//using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
//using Microsoft.EntityFrameworkCore;

//namespace DataAccessEF;

//public partial class DbA92dc1Inkainka7777Context : IdentityDbContext<IdentityUser>
//{
//    public DbA92dc1Inkainka7777Context()
//    {
//    }

//    public DbA92dc1Inkainka7777Context(DbContextOptions<DbA92dc1Inkainka7777Context> options)
//        : base(options)
//    {
//    }

//    //public virtual DbSet<CategoryProduct> CategoryProducts { get; set; }

//    //public virtual DbSet<Login> Logins { get; set; }

//    //public virtual DbSet<Product> Products { get; set; }

//    //public virtual DbSet<Registr> Registrs { get; set; }

//    //public virtual DbSet<ShoppingBasket> ShoppingBaskets{ get; set; }

////    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
////#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
////        => optionsBuilder.UseSqlServer("Data Source=SQL8002.site4now.net;Initial Catalog=db_a98a0d_ilya29ilya;User Id=db_a98a0d_ilya29ilya_admin;Password=ilya2905");

//    protected override void OnModelCreating(ModelBuilder modelBuilder)
//    {
//        base.OnModelCreating(modelBuilder);
//    }
//}
