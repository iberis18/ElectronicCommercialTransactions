using System;
using System.Collections.Generic;

namespace webapi;

public partial class Purchase
{
    public int Id { get; set; }

    public string[]? Number { get; set; }

    public decimal? StartCost { get; set; }

    public DateTimeOffset? PostingDate { get; set; }

    public DateTime? DateOfAuction { get; set; }

    public decimal? Delay { get; set; }

    public virtual ICollection<CommodityPurchase> CommodityPurchases { get; set; } = new List<CommodityPurchase>();

    public virtual ICollection<PurchaseHistory> PurchaseHistories { get; set; } = new List<PurchaseHistory>();
}
