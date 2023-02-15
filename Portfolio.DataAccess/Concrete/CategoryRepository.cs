using Portfolio.Core.DataAccess.EntityFramework;
using Portfolio.DataAccess.Abstract;
using Portfolio.DataAccess.Contexts;
using Portfolio.Entities.DTOs;
using Portfolio.Entities.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.DataAccess.Concrete
{
    public class CategoryRepository : EfEntityRepositoryBase<Category, ApplicationDbContext>, ICategoryRepository
    {
        public Task<List<CategoryDto>> GetCategoriesDetails()
        {
            throw new NotImplementedException();
        }
    }
}
