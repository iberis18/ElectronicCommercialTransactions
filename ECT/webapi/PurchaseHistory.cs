using System;
using System.Collections.Generic;

namespace webapi;

public partial class PurchaseHistory
{
    public int Id { get; set; }

    public int Celler { get; set; }

    public decimal? Price { get; set; }

    public DateTime? DateTime { get; set; }

    public int Purchase { get; set; }

    public virtual Client CellerNavigation { get; set; } = null!;

    public virtual Purchase PurchaseNavigation { get; set; } = null!;
}
