using Portfolio.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Entities.Entity
{
    public class Project : BaseEntity
    {

        public string ProjectName { get; set; }

        public string Description { get; set; }

        public string ThumbNailImage { get; set; }

        public ICollection<ProjectPerson>? ProjectPeople { get; set; }

        public ICollection<ProjectCategory>? ProjectCategories { get; set; }


        // 1-M project-image relation 
        // 1-M project-comment relation 
    }
}
