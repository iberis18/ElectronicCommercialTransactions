using dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bll
{
    public class Commodity
    {
        private ECTContext _context = new ECTContext();
        public int Id { get; set; }
        public string[] Name { get; set; }
        public string[] Okpd2 { get; set; }
        public string[] Unit { get; set; }
        public decimal? Quantity { get; set; }
        public decimal? Price { get; set; }
        public Commodity(int id) 
        {
            var item = _context.Commodity.FirstOrDefault(c => c.Id == id);
            Id = id;
            Okpd2 = item.Okpd2;
            Name = item.Name;
            Unit = item.Unit;
            Quantity = item.Quantity;
            Price = item.Price;
        }

        public Commodity(dal.Commodity item)
        {
            Id = item.Id;
            Okpd2 = item.Okpd2;
            Name = item.Name;
            Unit = item.Unit;
            Quantity = item.Quantity;
            Price = item.Price;
        }
    }
}
