using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Business.Abstract
{
    public interface IGenericService<T> 
    {

        public Task<T> GetSingle(Expression<Func<T, bool>> filter);

        public Task<List<T>> GetList(Expression<Func<T, bool>> filter = null);

        public Task TUpdate(int id, T entity);

        public Task TDelete(int id);

        public Task<T> TAdd(T entity); 
    }
}
