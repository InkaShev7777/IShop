using System;
using Domain.Interfaces;
using MarcetUser;

namespace DataAccessEF.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        protected readonly DbA98a0dIlya29ilyaContext db;
        public GenericRepository(DbA98a0dIlya29ilyaContext _db)
        {
            this.db = _db;
            this.db.ChangeTracker.QueryTrackingBehavior = Microsoft.EntityFrameworkCore.QueryTrackingBehavior.NoTracking;
        }

        public void Add(T item)
        {
            this.db.Set<T>().Add(item);
            this.db.SaveChanges();
        }

        public void Delete(int id)
        {
            T item = this.db.Set<T>().Find(id);
            if (item != null)
            {
                this.db.Set<T>().Remove(item);
                this.db.SaveChanges();
            }
        }

        public IEnumerable<T> GetAll()
        {
            return this.db.Set<T>().ToList();
        }

        public void Update(T item)
        {
            lock (db)
            {
                try
                {
                    this.db.Set<T>().Entry(item).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    this.db.SaveChanges();
                }
                catch(Exception ex){}
            }
        }
    }
}

