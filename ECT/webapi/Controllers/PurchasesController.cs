using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using bll;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PurchasesController : ControllerBase
    {
        private PurchaseList list = new PurchaseList();

        // GET: api/<PurchasesController>
        [HttpGet]
        public List<Purchase> Get()
        {

            return list.Purchases;
        }

        // GET api/<PurchasesController>/5
        [HttpGet("{id}")]
        public Purchase Get(int id)
        {
            return new Purchase(id);
        }

        // POST api/<PurchasesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<PurchasesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PurchasesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
