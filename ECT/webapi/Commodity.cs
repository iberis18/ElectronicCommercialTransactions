using System;
using System.Collections.Generic;

namespace webapi;

public partial class Commodity
{
    public int Id { get; set; }

    public string[]? Name { get; set; }

    public string[]? Okpd2 { get; set; }

    public string[]? Unit { get; set; }

    public decimal? Quantity { get; set; }

    public decimal? Price { get; set; }

    public int Customer { get; set; }

    public virtual ICollection<CommodityPurchase> CommodityPurchases { get; set; } = new List<CommodityPurchase>();

    public virtual Client CustomerNavigation { get; set; } = null!;
}
