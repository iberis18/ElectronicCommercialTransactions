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
        public string Number { get; set; }
        public decimal? StartCost { get; set; }
        public DateTime? PostingDate { get; set; }
        public DateTime? DateOfAuction { get; set; }
        public decimal? Delay { get; set; }
        public string Name { get; set; }
        public string Stage { get; set; }
        public string Type { get; set; }
        public int? Customer { get; set; }
        public string CustomerName { get; set; }

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

        public Purchase()
        {
            var item = new dal.Purchase();
            setParam(item);
        }

        private void setParam(dal.Purchase item)
        {
            Id = item.Id;
            if (item.Number != null)
                Number = String.Join(" ", item.Number);
            StartCost = item.StartCost;
            PostingDate = item.PostingDate;
            DateOfAuction = item.DateOfAuction;
            Delay = item.Delay;
            if (item.Name != null)
                Name = String.Join(" ", item.Name);
            if (item.Stage != null)
                Stage = String.Join(" ", item.Stage);
            if (item.Customer != null)
                Customer = item.Customer;

            List<int> commodityIds = _context.CommodityPurchase
                .Where(i => i.Purchase == item.Id)
                .Select(i => i.Commodity)
                .ToList();
            List<dal.Commodity> commodites = _context.Commodity
                .Where(i => commodityIds.Contains(i.Id)).ToList();
            Commodity = new CommodityList(commodites).commodities;

            if (item.Customer != null)
                CustomerName = String.Join(" ", _context.Client
                    .Where(i => i.Id == item.Customer)
                    .FirstOrDefault()?
                    .Name);
        }

        public int add()
        {
            var item = new dal.Purchase();
            item.Id = Id;
            item.Number = new[] { Number };
            item.StartCost = StartCost;
            item.DateOfAuction = DateOfAuction;
            item.PostingDate = PostingDate;
            item.StartCost = StartCost;
            item.Delay = Delay;
            item.Name = new[] { Name };
            item.Stage = new[] { Stage };
            item.Type = new[] { Type };

            _context.Purchase.Add(item);
            _context.SaveChanges();

            return item.Id;
        }
    }
}
