using Microsoft.Extensions.DependencyInjection;
using BookMyShow.Infrastructure.Singleton;
using BookMyShow.BoundedContext.Singleton;
using RxWeb.Core.Data;

namespace BookMyShow.Api.Bootstrap
{
    public static class Singleton
    {
        public static void AddSingletonService(this IServiceCollection serviceCollection)
        {
            #region Singleton
            serviceCollection.AddSingleton<ITenantDbConnectionInfo, TenantDbConnectionInfo>();
            serviceCollection.AddSingleton(typeof(UserAccessConfigInfo));
            #endregion Singleton
        }

    }
}




