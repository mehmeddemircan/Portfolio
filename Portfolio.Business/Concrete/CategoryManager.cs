using Portfolio.Business.Abstract;
using Portfolio.DataAccess.Abstract;
using Portfolio.Entities.DTOs;
using Portfolio.Entities.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Business.Concrete
{
    public class CategoryManager : ICategoryService
    {
        ICategoryRepository _categoryRepository; 


        public CategoryManager(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public async Task<List<CategoryDto>> GetCategoriesDetails()
        {
            return await _categoryRepository.GetCategoriesDetails();
        }

        public async Task<List<Category>> GetList(Expression<Func<Category, bool>> filter = null)
        {
            return await _categoryRepository.GetList(filter);
        }

        public async Task<Category> GetSingle(Expression<Func<Category, bool>> filter)
        {
            return await _categoryRepository.GetSingle(filter);
        }

        public async Task<Category> TAdd(Category entity)
        {
            return await _categoryRepository.TAdd(entity);
        }

        public async Task TDelete(int id)
        {
            await _categoryRepository.TDelete(id);
        }

        public async Task TUpdate(int id, Category entity)
        {
            await _categoryRepository.TUpdate(id, entity);
        }
    }
}
