﻿using System;
namespace Domain.Interfaces
{
	public interface IGenericRepository<T> where T:class
	{
		IEnumerable<T> GetAll();
		void Delete(int id);
		void Add(T item);
		void Update(T item);
		
	}
}

