using Portfolio.Business.Abstract;
using Portfolio.Entities.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Business.Concrete
{
    public class PersonManager : IPersonService
    {
        public Task<List<Person>> GetList(Expression<Func<Person, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<Person> GetSingle(Expression<Func<Person, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public Task<Person> TAdd(Person entity)
        {
            throw new NotImplementedException();
        }

        public Task TDelete(int id)
        {
            throw new NotImplementedException();
        }

        public Task TUpdate(int id, Person entity)
        {
            throw new NotImplementedException();
        }
    }
}
