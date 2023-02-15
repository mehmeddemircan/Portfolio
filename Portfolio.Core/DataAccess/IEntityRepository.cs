
using Portfolio.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Core.DataAccess
{
    public interface IEntityRepository<T> where T : BaseEntity, new()
    {

        public Task<T> TAdd(T entity);
        public Task<T> GetSingle(Expression<Func<T, bool>> filter);

        public Task<List<T>> GetList(Expression<Func<T, bool>> filter = null);

        public Task TUpdate(int id, T entity);
        public Task TDelete(int id);



    }
}
