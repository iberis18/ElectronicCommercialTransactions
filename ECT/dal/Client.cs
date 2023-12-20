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
            PurchaseHistory = new HashSet<PurchaseHistory>();
            Purchases = new HashSet<Purchase>();
        }

        public int Id { get; set; }
        public string[] Name { get; set; }
        public string[] Inn { get; set; }

        public virtual ICollection<Purchase> Purchases { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
