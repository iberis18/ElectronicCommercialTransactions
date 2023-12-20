using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using bll;
using System.Text.Json;
using static System.Runtime.InteropServices.JavaScript.JSType;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommodityController : ControllerBase
    {
        // GET: api/<CommodityController>
        [HttpGet]
        public List<Commodity> Get()
        {
            return new List<Commodity>();
        }

        // GET api/<CommodityController>/5
        [HttpGet("{id}")]
        public Commodity Get(int id)
        {
            return new Commodity();
        }

        // POST api/<CommodityController>/5
        [HttpPost("{purchaseId}")]
        public int Post(int purchaseId, [FromBody] Commodity value)
        {
            return value.add(purchaseId);
        }

        // PUT api/<CommodityController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CommodityController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
