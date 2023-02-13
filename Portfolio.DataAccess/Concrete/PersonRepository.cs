using Portfolio.Core.DataAccess.EntityFramework;
using Portfolio.DataAccess.Abstract;
using Portfolio.DataAccess.Contexts;
using Portfolio.Entities.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.DataAccess.Concrete
{
    public class PersonRepository : EfEntityRepositoryBase<Person,ApplicationDbContext> , IPersonRepository
    {
    }
}
