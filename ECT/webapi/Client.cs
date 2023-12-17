using System;
using System.Collections.Generic;

namespace webapi;

public partial class Client
{
    public int Id { get; set; }

    public string[]? Name { get; set; }

    public string[]? Inn { get; set; }

    public virtual ICollection<Commodity> Commodities { get; set; } = new List<Commodity>();

    public virtual ICollection<PurchaseHistory> PurchaseHistories { get; set; } = new List<PurchaseHistory>();
}
