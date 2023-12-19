using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace dal
{
    public partial class PurchaseHistory
    {
        public int Id { get; set; }
        public int Celler { get; set; }
        public decimal? Price { get; set; }
        public DateTime? DateTime { get; set; }
        public int Purchase { get; set; }

        public virtual Client CellerNavigation { get; set; }
        public virtual Purchase PurchaseNavigation { get; set; }
    }
}
