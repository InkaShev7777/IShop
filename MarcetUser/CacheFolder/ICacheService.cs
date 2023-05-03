using System;
namespace MarcetUser.CacheFolder
{
	public interface ICacheService
	{
		T GetData<T>(string key);

		bool SetData<T>(string key, T value, DateTimeOffset dateTimeOffset);
	}
}

