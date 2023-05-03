using System;
using StackExchange.Redis;

namespace MarcetUser.CacheFolder
{
	public class ConnectionHelper
	{
        private static Lazy<ConnectionMultiplexer> _lazyConnection;

        public static ConnectionMultiplexer Connection => _lazyConnection.Value;

        static ConnectionHelper()
        {
            //_lazyConnection = new Lazy<ConnectionMultiplexer>(() =>
            //{
            //    return ConnectionMultiplexer.Connect(ConfigurationManager.AppSettings["RedisUrl"]);
            //});
        }
    }
}

