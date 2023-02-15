using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Business.Abstract;
using Portfolio.Entities.Entity;

namespace Portfolio.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesControler : ControllerBase
    {
        ICategoryService _categoryService; 


        public CategoriesControler(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet("get-all-category")]

        public async Task<ActionResult<List<Category>>> GetAllCategory()
        {
            return await _categoryService.GetList();
        }


        [HttpPost("add-category")]
        public async Task<ActionResult<Category>> AddCategory(Category category)
        {
            return await _categoryService.TAdd(category); 
        }

        [HttpPut("update-category/{id}")]

        public async Task UpdateCategory(int id ,Category category)
        {
             await _categoryService.TUpdate(id,category);
        }

        [HttpDelete("delete-category/{id}")]

        public async Task DeleteCategory(int id)
        {
            await _categoryService.TDelete(id); 
        }



        // categoryDto category details alt alta bir liste yapmak lazım nasıl olur     
        // parentId ye göre gruplama
    }
}
