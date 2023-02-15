using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Entities.Entity
{
    public class ProjectPerson
    {

        public int ProjectId { get; set; }

        public virtual Project? Project { get; set; }

        public int PersonId { get; set; }

        public virtual Person? Person { get; set; }
    }
}
