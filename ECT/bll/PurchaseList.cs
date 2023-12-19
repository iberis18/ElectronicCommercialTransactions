using dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bll
{
    public class PurchaseList
    {
        private ECTContext _context = new ECTContext();
        public List<Purchase> Purchases { get; set; }

        public PurchaseList(List<dal.Purchase> list)
        {
            Purchases = new List<Purchase>();
            setParam(list);
        }
        public PurchaseList()
        {
            Purchases = new List<Purchase>();
            var purchases = _context.Purchase.ToList();
            setParam(purchases);
        }

        private void setParam(List<dal.Purchase> list)
        {
            foreach (var item in list)
                Purchases.Add(new Purchase(item));
        }
    }
}
