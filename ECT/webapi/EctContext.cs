using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace webapi;

public partial class EctContext : DbContext
{
    public EctContext()
    {
    }

    public EctContext(DbContextOptions<EctContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Client> Clients { get; set; }

    public virtual DbSet<Commodity> Commodities { get; set; }

    public virtual DbSet<CommodityPurchase> CommodityPurchases { get; set; }

    public virtual DbSet<Purchase> Purchases { get; set; }

    public virtual DbSet<PurchaseHistory> PurchaseHistories { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=ECT;Username=postgres;Password=q");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .HasPostgresEnum("stage", new[] { "WAITS", "COMPLETED", "CANCELED", "ONGOING" })
            .HasPostgresEnum("type", new[] { "AUCTION", "QUOTATION" });

        modelBuilder.Entity<Client>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("client_pkey");

            entity.ToTable("client");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Inn)
                .HasColumnType("character varying(12)[]")
                .HasColumnName("inn");
            entity.Property(e => e.Name)
                .HasColumnType("character varying(100)[]")
                .HasColumnName("name");
        });

        modelBuilder.Entity<Commodity>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("commodity_pkey");

            entity.ToTable("commodity");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Customer).HasColumnName("customer");
            entity.Property(e => e.Name)
                .HasColumnType("character varying(150)[]")
                .HasColumnName("name");
            entity.Property(e => e.Okpd2)
                .HasColumnType("character varying(15)[]")
                .HasColumnName("okpd2");
            entity.Property(e => e.Price)
                .HasPrecision(1000, 2)
                .HasColumnName("price");
            entity.Property(e => e.Quantity)
                .HasPrecision(1000, 2)
                .HasColumnName("quantity");
            entity.Property(e => e.Unit)
                .HasColumnType("character varying(30)[]")
                .HasColumnName("unit");

            entity.HasOne(d => d.CustomerNavigation).WithMany(p => p.Commodities)
                .HasForeignKey(d => d.Customer)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("f_key_customer");
        });

        modelBuilder.Entity<CommodityPurchase>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("commodity_purchase_pkey");

            entity.ToTable("commodity_purchase");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Commodity).HasColumnName("commodity");
            entity.Property(e => e.Purchase).HasColumnName("purchase");

            entity.HasOne(d => d.CommodityNavigation).WithMany(p => p.CommodityPurchases)
                .HasForeignKey(d => d.Commodity)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("f_key_commodity");

            entity.HasOne(d => d.PurchaseNavigation).WithMany(p => p.CommodityPurchases)
                .HasForeignKey(d => d.Purchase)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("f_key_purchase");
        });

        modelBuilder.Entity<Purchase>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("purchase_pkey");

            entity.ToTable("purchase");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.DateOfAuction).HasColumnName("dateOfAuction");
            entity.Property(e => e.Delay)
                .HasPrecision(3)
                .HasColumnName("delay");
            entity.Property(e => e.Number)
                .HasColumnType("character varying(40)[]")
                .HasColumnName("number");
            entity.Property(e => e.PostingDate)
                .HasColumnType("time with time zone")
                .HasColumnName("postingDate");
            entity.Property(e => e.StartCost)
                .HasPrecision(1000, 2)
                .HasColumnName("startCost");
        });

        modelBuilder.Entity<PurchaseHistory>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("purchase_history_pkey");

            entity.ToTable("purchase_history");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Celler).HasColumnName("celler");
            entity.Property(e => e.DateTime).HasColumnName("date_time");
            entity.Property(e => e.Price)
                .HasPrecision(1000, 2)
                .HasColumnName("price");
            entity.Property(e => e.Purchase).HasColumnName("purchase");

            entity.HasOne(d => d.CellerNavigation).WithMany(p => p.PurchaseHistories)
                .HasForeignKey(d => d.Celler)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("f_key_celler");

            entity.HasOne(d => d.PurchaseNavigation).WithMany(p => p.PurchaseHistories)
                .HasForeignKey(d => d.Purchase)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("f_key_purchase");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
