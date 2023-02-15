using Portfolio.Core.DataAccess;
using Portfolio.Entities.DTOs;
using Portfolio.Entities.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.DataAccess.Abstract
{
    public interface ICategoryRepository : IEntityRepository<Category>
    {

        public Task<List<CategoryDto>> GetCategoriesDetails(); 
    }
}
