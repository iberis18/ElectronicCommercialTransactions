using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using webapi;

namespace webapi.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ClientsController : ControllerBase
    {
        private readonly EctContext _context;

        public ClientsController(EctContext context)
        {
            _context = context;
        }

        // GET: Clients
        [HttpGet(Name = "GetClients")]
        public IEnumerable<Client> Get()
        {
            return _context.Clients.ToArray();
        }
    }
}