using Portfolio.Core.DataAccess;
using Portfolio.Entities.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.DataAccess.Abstract
{
    public interface IAbilityRepository : IEntityRepository<Ability>
    {

        public Task<List<Ability>> GetAbilityByCategory(int categoryId);
    }
}
