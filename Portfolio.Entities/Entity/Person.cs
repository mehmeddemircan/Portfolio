using Portfolio.Core.Entities;

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

        public ICollection<PersonAbility>?  PersonAbilities { get; set; }


        public ICollection<ProjectPerson>? ProjectPeople { get; set; }
    }
}