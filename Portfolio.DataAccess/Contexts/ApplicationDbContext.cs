using Microsoft.EntityFrameworkCore;
using Portfolio.Entities.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.DataAccess.Contexts
{
    public class ApplicationDbContext : DbContext
    {

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Server=127.0.0.1;Port=5432;Database=Portfolio;User Id=postgres;Password=Sd635241;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PersonAbility>().HasKey(pa => new { pa.PersonId, pa.AbilityId });

            modelBuilder.Entity<PersonAbility>()
             .HasOne<Person>(sc => sc.Person)
                .WithMany(s => s.PersonAbilities)
    .HasForeignKey(sc => sc.PersonId);


            modelBuilder.Entity<PersonAbility>()
             .HasOne<Ability>(sc => sc.Ability)
                .WithMany(s => s.PersonAbilities)
    .HasForeignKey(sc => sc.AbilityId);

            modelBuilder.Entity<ProjectCategory>().HasKey(pa => new { pa.ProjectId, pa.CategoryId });

            modelBuilder.Entity<ProjectCategory>()
             .HasOne<Project>(pc => pc.Project)
                .WithMany(s => s.ProjectCategories)
    .HasForeignKey(sc => sc.ProjectId);


            modelBuilder.Entity<ProjectCategory>()
             .HasOne<Category>(sc => sc.Category)
                .WithMany(s => s.ProjectCategories)
    .HasForeignKey(sc => sc.CategoryId);


            modelBuilder.Entity<ProjectPerson>().HasKey(pa => new { pa.ProjectId, pa.PersonId });

            modelBuilder.Entity<ProjectPerson>()
             .HasOne<Project>(pc => pc.Project)
                .WithMany(s => s.ProjectPeople)
    .HasForeignKey(sc => sc.ProjectId);


            modelBuilder.Entity<ProjectPerson>()
             .HasOne<Person>(sc => sc.Person)
                .WithMany(s => s.ProjectPeople)
    .HasForeignKey(sc => sc.PersonId);
        }

        public DbSet<Person> People { get; set; }

        public DbSet<Ability> Abilities { get; set; }

        public DbSet<PersonAbility> PersonAbilities { get; set; }

        public DbSet<Category> Categories { get; set; }

        public DbSet<Project> Projects { get; set; }

        public DbSet<ProjectPerson> ProjectPeople { get; set; }

        public DbSet<ProjectCategory> ProjectCategories { get; set; }
    }
}
