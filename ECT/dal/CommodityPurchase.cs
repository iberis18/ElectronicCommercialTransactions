using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace dal
{
    public partial class CommodityPurchase
    {
        public int Id { get; set; }
        public int Purchase { get; set; }
        public int Commodity { get; set; }

        public virtual Commodity CommodityNavigation { get; set; }
        public virtual Purchase PurchaseNavigation { get; set; }
    }
}
