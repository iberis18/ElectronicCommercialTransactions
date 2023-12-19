using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace dal
{
    public partial class ECTContext : DbContext
    {
        public ECTContext()
        {
        }

        public ECTContext(DbContextOptions<ECTContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Client> Client { get; set; }
        public virtual DbSet<Commodity> Commodity { get; set; }
        public virtual DbSet<CommodityPurchase> CommodityPurchase { get; set; }
        public virtual DbSet<Purchase> Purchase { get; set; }
        public virtual DbSet<PurchaseHistory> PurchaseHistory { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=ECT;Username=postgres;Password=q");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasPostgresEnum(null, "stage", new[] { "WAITS", "COMPLETED", "CANCELED", "ONGOING" })
                .HasPostgresEnum(null, "type", new[] { "AUCTION", "QUOTATION" });

            modelBuilder.Entity<Client>(entity =>
            {
                entity.ToTable("client");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Inn)
                    .HasColumnName("inn")
                    .HasColumnType("character varying(12)[]");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasColumnType("character varying(100)[]");
            });

            modelBuilder.Entity<Commodity>(entity =>
            {
                entity.ToTable("commodity");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasColumnType("character varying(150)[]");

                entity.Property(e => e.Okpd2)
                    .HasColumnName("okpd2")
                    .HasColumnType("character varying(15)[]");

                entity.Property(e => e.Price)
                    .HasColumnName("price")
                    .HasColumnType("numeric(1000,2)");

                entity.Property(e => e.Quantity)
                    .HasColumnName("quantity")
                    .HasColumnType("numeric(1000,2)");

                entity.Property(e => e.Unit)
                    .HasColumnName("unit")
                    .HasColumnType("character varying(30)[]");
            });

            modelBuilder.Entity<CommodityPurchase>(entity =>
            {
                entity.ToTable("commodity_purchase");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Commodity).HasColumnName("commodity");

                entity.Property(e => e.Purchase).HasColumnName("purchase");

                entity.HasOne(d => d.CommodityNavigation)
                    .WithMany(p => p.CommodityPurchase)
                    .HasForeignKey(d => d.Commodity)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("f_key_commodity");

                entity.HasOne(d => d.PurchaseNavigation)
                    .WithMany(p => p.CommodityPurchase)
                    .HasForeignKey(d => d.Purchase)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("f_key_purchase");
            });

            modelBuilder.Entity<Purchase>(entity =>
            {
                entity.ToTable("purchase");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.DateOfAuction)
                    .HasColumnName("dateOfAuction")
                    .HasColumnType("timestamp with time zone");

                entity.Property(e => e.Delay)
                    .HasColumnName("delay")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.Number)
                    .HasColumnName("number")
                    .HasColumnType("character varying(40)[]");

                entity.Property(e => e.PostingDate)
                    .HasColumnName("postingDate")
                    .HasColumnType("time with time zone");

                entity.Property(e => e.StartCost)
                    .HasColumnName("startCost")
                    .HasColumnType("numeric(1000,2)");

                entity.Property(e => e.Name)
                   .HasColumnName("name")
                   .HasColumnType("character varying(300)[]");
            });

            modelBuilder.Entity<PurchaseHistory>(entity =>
            {
                entity.ToTable("purchase_history");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Celler).HasColumnName("celler");

                entity.Property(e => e.DateTime)
                    .HasColumnName("date_time")
                    .HasColumnType("timestamp with time zone");

                entity.Property(e => e.Price)
                    .HasColumnName("price")
                    .HasColumnType("numeric(1000,2)");

                entity.Property(e => e.Purchase).HasColumnName("purchase");

                entity.HasOne(d => d.CellerNavigation)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Celler)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("f_key_celler");

                entity.HasOne(d => d.PurchaseNavigation)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Purchase)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("f_key_purchase");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
