using Microsoft.EntityFrameworkCore;
using Npgsql;
using Portfolio.Entities.Common;
using Portfolio.Entities.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Core.DataAccess.Dapper
{
    public class DapperRepositoryBase<TEntity, TContext> : IEntityRepository<TEntity>
        where TEntity : BaseEntity, new()
        where TContext : DbContext, new()
    {
        public async Task<List<TEntity>> GetList(Expression<Func<TEntity, bool>> filter = null)
        {
            using (var connection = new NpgsqlConnection("Server=127.0.0.1;Port=5432;Database=Portfolio;User Id=postgres;Password=Sd635241;"))
            {
                throw new NotImplementedException();
            }
        }

        public Task<TEntity> GetSingle(Expression<Func<TEntity, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public Task<TEntity> TAdd(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task TDelete(int id)
        {
            throw new NotImplementedException();
        }

        public Task TUpdate(int id, TEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
