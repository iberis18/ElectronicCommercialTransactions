using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using webapi;
using dal;

namespace webapi.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ClientsController : ControllerBase
    {
        private ECTContext _context;

        public ClientsController()
        {
            _context = new ECTContext();
        }

        // GET: Clients
        [HttpGet]
        public IEnumerable<Client> Get()
        {
            return _context.Client.ToList();
        }
    }
}