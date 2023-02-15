using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Business.Abstract;
using Portfolio.Entities.Entity;

namespace Portfolio.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AbilitiesController : ControllerBase
    {
        IAbilityService _abilityService; 


        public AbilitiesController(IAbilityService abilityService)
        {
            _abilityService = abilityService;
        }

        [HttpGet("get-abilities")]

        public async Task<ActionResult<List<Ability>>> GetAbilities()
        {
            return  await _abilityService.GetList(); 
        }

        [HttpDelete("delete-ability/{id}")]

        public async Task DeleteAbility(int id)
        {
            await _abilityService.TDelete(id); 
         }

        [HttpPost("add-ability")]

        public async Task<ActionResult<Ability>> AddAbility(Ability ability)
        {
            return await _abilityService.TAdd(ability); 
        }

        [HttpPut("update-ability")]

        public async Task UpdateAbility(int id , Ability ability)
        {
            await _abilityService.TUpdate(id, ability);
        }

        //[HttpGet("group-by-category")]
        [HttpGet("get-by-category")]

        public async Task<ActionResult<List<Ability>>> GetAbilityByCategory(int categoryId)
        {
            return await _abilityService.GetAbilityByCategory(categoryId);
        }
        
        
     }
}
