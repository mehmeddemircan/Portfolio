using Portfolio.Core.Entities;
using Portfolio.Entities.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Entities.DTOs
{
    public class CategoryDto : BaseEntity
    {

        public string CategoryName { get; set; }

        public int? ParentId { get; set; }

        public virtual Category Category { get; set; }
    }
}
