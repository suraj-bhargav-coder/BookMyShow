using Microsoft.AspNetCore.Mvc;
using System.Linq;
using BookMyShow.UnitOfWork.Main;
using BookMyShow.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace BookMyShow.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class BookingsController : BaseController<Booking,Booking,Booking>

    {
        public BookingsController(IMasterUow uow):base(uow) {}

    }
}
