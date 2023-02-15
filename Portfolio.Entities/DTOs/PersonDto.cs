


using Portfolio.Core.Entities;
using Portfolio.Entities.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Entities.DTOs
{
    public class PersonDto : BaseEntity
    {
        public string Name { get; set; }


        public ICollection<PersonAbility> PersonAbilities  { get; set; }

     
    }
}
