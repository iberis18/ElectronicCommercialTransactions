using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace dal
{
    public partial class Commodity
    {
        public Commodity()
        {
            CommodityPurchase = new HashSet<CommodityPurchase>();
        }

        public int Id { get; set; }
        public string[] Name { get; set; }
        public string[] Okpd2 { get; set; }
        public string[] Unit { get; set; }
        public decimal? Quantity { get; set; }
        public decimal? Price { get; set; }

        public virtual ICollection<CommodityPurchase> CommodityPurchase { get; set; }
    }
}
