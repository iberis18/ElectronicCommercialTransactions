using System;
using System.Collections.Generic;

namespace webapi;

public partial class CommodityPurchase
{
    public int Id { get; set; }

    public int Purchase { get; set; }

    public int Commodity { get; set; }

    public virtual Commodity CommodityNavigation { get; set; } = null!;

    public virtual Purchase PurchaseNavigation { get; set; } = null!;
}
