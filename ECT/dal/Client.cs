using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace dal
{
    public partial class Client
    {
        public Client()
        {
            Commodity = new HashSet<Commodity>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Id { get; set; }
        public string[] Name { get; set; }
        public string[] Inn { get; set; }

        public virtual ICollection<Commodity> Commodity { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
