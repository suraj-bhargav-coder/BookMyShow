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
	
	public class MultiplexesController : BaseController<Multiplex,Multiplex,Multiplex>

    {
        public MultiplexesController(IMasterUow uow):base(uow) {}

    }
}
