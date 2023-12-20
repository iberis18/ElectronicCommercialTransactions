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
        public void Post([FromBody] Purchase value)
        {
            value.add();
            //var body = System.Text.Json.JsonSerializer.Deserialize<Purchase>(value);
            
    //        purchase.Name = value.name;
    //            name: body.name,
    //customer: body.customer,
    //startCost: body.startCost,
    //postingDate: new Date(),
    //dateOfAuction: body.dateOfAuction,
    //commodity: body.commodity.map((elem) => {
    //    return {
    //        okpd2: elem.okpd2,
    //    name: elem.name,
    //    unit: elem.unit,
    //    quantity: elem.quantity,
    //    price: elem.price,
    //    cost: elem.cost,
    //  }
    //}),
    //// documents: body.documents,
    //stage: body.stage,
    //type: body.type,
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
