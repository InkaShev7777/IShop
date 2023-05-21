using System;
using System.Collections.Generic;
using Domain.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace MarcetUser;

public partial class DbA98a0dIlya29ilyaContext : IdentityDbContext<IdentityUser>
{
    public DbA98a0dIlya29ilyaContext()
    {
    }

    public DbA98a0dIlya29ilyaContext(DbContextOptions<DbA98a0dIlya29ilyaContext> options)
        : base(options)
    {
    }

    //public virtual DbSet<AspNetRole> AspNetRoles { get; set; }

    //public virtual DbSet<AspNetRoleClaim> AspNetRoleClaims { get; set; }

    //public virtual DbSet<AspNetUser> AspNetUsers { get; set; }

    //public virtual DbSet<AspNetUserClaim> AspNetUserClaims { get; set; }

    //public virtual DbSet<AspNetUserLogin> AspNetUserLogins { get; set; }

    //public virtual DbSet<AspNetUserToken> AspNetUserTokens { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Registr> Registrs { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        //modelBuilder.Entity<IdentityUserLogin<string>>().HasKey(x=> new {x.LoginProvider,x.ProviderKey});
        //modelBuilder.Entity<IdentityUserRole<string>>().HasKey(x => new { x.RoleId,x.UserId });
        //modelBuilder.Entity<IdentityUserToken<string>>().HasKey(x => new { x.UserId, x.LoginProvider, x.Name });
        //modelBuilder.Entity<IdentityUser<string>>().HasKey(x => new { x.Id });


    }
}
