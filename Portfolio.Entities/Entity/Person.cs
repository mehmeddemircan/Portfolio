using Portfolio.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Entities.Entity
{
    public class Person : BaseEntity
    {

        public string Name { get; set; }

        public ICollection<Ability>?  Abilities { get; set; }

    }
}