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
        private dal.Purchase _purchase;
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
            _purchase = _context.Purchase.FirstOrDefault(i => i.Id == id);
            setParam(_purchase);
        }

        public Purchase(dal.Purchase item)
        {
            _purchase = item;
            setParam(item);
        }

        public Purchase()
        {
            _purchase = new dal.Purchase();
            setParam(_purchase);
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

        public void add()
        {
            _purchase.Id = Id;
            _purchase.Number = new[] { Number };
            _purchase.StartCost = StartCost;
            _purchase.DateOfAuction = DateOfAuction;
            _purchase.PostingDate = PostingDate;
            _purchase.StartCost = StartCost;
            _purchase.Delay = Delay;
            _purchase.Name = new[] { Name };
            _purchase.Stage = new[] { Stage };
            _purchase.Type = new[] { Type };

            _context.Purchase.Add(_purchase);
            _context.SaveChanges();
        }
    }
}
