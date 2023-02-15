using Portfolio.Core.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace Portfolio.Entities.Entity
{
    public class Ability  : BaseEntity
    {

        public string Name { get; set; }

        [ForeignKey("Category")]
        public int CategoryId { get; set; }

        public ICollection<PersonAbility>? PersonAbilities { get; set; }
    }
}