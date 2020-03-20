using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using BookMyShow.BoundedContext.SqlContext;
using BookMyShow.Models.Main;
using BookMyShow.Models;
using BookMyShow.BoundedContext.Singleton;
using RxWeb.Core.Data;
using RxWeb.Core.Data.Models;
using RxWeb.Core.Data.BoundedContext;

namespace BookMyShow.BoundedContext.Main
{
    public class MasterContext : BaseBoundedContext, IMasterContext
    {
        public MasterContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

            #region DbSets
            		
    		public DbSet<Activity> Activities { get; set; }
		public DbSet<Booking> Bookings { get; set; }
		public DbSet<BookingType> BookingTypes { get; set; }
		public DbSet<Event> Events { get; set; }
		public DbSet<Invoice> Invoices { get; set; }
		public DbSet<Monument> Monuments { get; set; }
		public DbSet<vMovy> vMovies { get; set; }
		public DbSet<Movie> Movies { get; set; }
		public DbSet<Multiplex> Multiplexes { get; set; }
		public DbSet<Offer> Offers { get; set; }
		public DbSet<OrderSummary> OrderSummaries { get; set; }
		public DbSet<Otp> Otps { get; set; }
		public DbSet<Screen> Screens { get; set; }
		public DbSet<Screening> Screenings { get; set; }
		public DbSet<Seat> Seats { get; set; }
		public DbSet<Show> Shows { get; set; }
		public DbSet<Sport> Sports { get; set; }
		public DbSet<vUser> vUsers { get; set; }
		public DbSet<User> Users { get; set; }
        public DbSet<ApplicationObject> ApplicationObjects { get; set; }

            #endregion DbSets





}


    public interface IMasterContext : IDbContext
    {
    }
}

