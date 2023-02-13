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


        public DbSet<Person> People { get; set; }

        public DbSet<Ability> Abilities { get; set; }
    }
}
