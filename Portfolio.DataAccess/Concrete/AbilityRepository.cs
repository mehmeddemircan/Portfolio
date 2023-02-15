using Microsoft.EntityFrameworkCore;
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
    public class AbilityRepository : EfEntityRepositoryBase<Ability, ApplicationDbContext>, IAbilityRepository
    {
        public async Task<List<Ability>> GetAbilityByCategory(int categoryId)
        {
            using (var context = new ApplicationDbContext())
            {
                return await context.Set<Ability>().Where((a) => a.CategoryId == categoryId).ToListAsync();
            }
        }

        // grup by category 
    }
}
