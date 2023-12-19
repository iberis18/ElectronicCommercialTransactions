using dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bll
{
    public class CommodityList
    {
        private ECTContext _context = new ECTContext();
        public List<Commodity> commodities { get; set; }

        public CommodityList(List<dal.Commodity> list)
        {
            commodities = new List<Commodity>();
            foreach (var item in list)
                commodities.Add(new Commodity(item));
        }
    }
}
