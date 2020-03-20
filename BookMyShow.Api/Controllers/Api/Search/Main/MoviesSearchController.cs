using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RxWeb.Core.Data;
using BookMyShow.Models.ViewModels;
using BookMyShow.BoundedContext.SqlContext;
using Microsoft.Data.SqlClient;

namespace BookMyShow.Api.Controllers.MovieModule
{
    [ApiController]
	[Route("api/[controller]")]
    public class SearchMoviesController : ControllerBase
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        public SearchMoviesController(IDbContextManager<MainSqlDbContext> dbContextManager) {
            DbContextManager = dbContextManager;
        }

		[HttpPost]
        public async Task<IActionResult> Post([FromBody]Dictionary<string,string> searchParams)
        {
            var spParameters = new SqlParameter[1];
            spParameters[0] = new SqlParameter() { ParameterName = "Query", Value = searchParams["Query"] };
           // spParameters[1] = new SqlParameter() { ParameterName = "UserId", Value = UserClaim.UserId };
            var result = await DbContextManager.StoreProc<StoreProcResult>("[dbo].spSearchMovies", spParameters);
            return Ok(result.SingleOrDefault()?.Result);
        }
    }
}
