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
        public string Name { get; set; }
        public string Okpd2 { get; set; }
        public string Unit { get; set; }
        public decimal? Quantity { get; set; }
        public decimal? Price { get; set; }
        public Commodity(int id) 
        {
            var item = _context.Commodity.FirstOrDefault(c => c.Id == id);
            setParam(item);
        }

        public Commodity(dal.Commodity item)
        {
            setParam(item);
        }

        public Commodity()
        {
            setParam(new dal.Commodity());
        }

        private void setParam(dal.Commodity item)
        {
            Id = item.Id;
            if (item.Okpd2 != null)
                Okpd2 = String.Join(" ", item.Okpd2);
            if (item.Name != null)
                Name = String.Join(" ", item.Name);
            if (item.Unit != null)
                Unit = String.Join(" ", item.Unit);
            Quantity = item.Quantity;
            Price = item.Price;

        }
    }
}
