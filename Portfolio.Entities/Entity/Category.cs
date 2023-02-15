using Portfolio.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Entities.Entity
{
    public class Category : BaseEntity
    {

        public string CategoryName { get; set; }

        public ICollection<Ability>? Abilities { get; set; }

        public ICollection<ProjectCategory>? ProjectCategories { get; set; }
    }
}
