using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace dal
{
    public partial class Purchase
    {
        public Purchase()
        {
            CommodityPurchase = new HashSet<CommodityPurchase>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Id { get; set; }
        public string[] Number { get; set; }
        public decimal? StartCost { get; set; }
        public DateTimeOffset? PostingDate { get; set; }
        public DateTime? DateOfAuction { get; set; }
        public decimal? Delay { get; set; }
        public string[] Name { get; set; }
        public string[] Stage { get; set; }
        public string[] Type { get; set; }


        public virtual ICollection<CommodityPurchase> CommodityPurchase { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
