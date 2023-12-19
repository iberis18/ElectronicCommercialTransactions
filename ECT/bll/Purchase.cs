using dal;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace bll
{
    public class Purchase
    {
        private ECTContext _context = new ECTContext();
        public int Id { get; set; }
        public string[] Number { get; set; }
        public decimal? StartCost { get; set; }
        public DateTimeOffset? PostingDate { get; set; }
        public DateTime? DateOfAuction { get; set; }
        public decimal? Delay { get; set; }
        public string[] Name { get; set; }
        public List<Commodity> Commodity { get; set; }

        public Purchase(int id)
        {
            var item = _context.Purchase.FirstOrDefault(i => i.Id == id);
            setParam(item);
        }

        public Purchase(dal.Purchase item)
        {
            setParam(item);
        }

        private void setParam(dal.Purchase item)
        {
            Id = item.Id;
            Number = item.Number;
            StartCost = item.StartCost;
            PostingDate = item.PostingDate;
            DateOfAuction = item.DateOfAuction;
            Delay = item.Delay;
            Name = item.Name;

            List<int> commodityIds = _context.CommodityPurchase
                .Where(i => i.Purchase == item.Id)
                .Select(i => i.Commodity)
                .ToList();
            List<dal.Commodity> commodites = _context.Commodity
                .Where(i => commodityIds.Contains(i.Id)).ToList();
            Commodity = new CommodityList(commodites).commodities;
        }
    }
}
