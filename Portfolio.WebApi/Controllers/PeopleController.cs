using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Business.Abstract;
using Portfolio.Entities.DTOs;
using Portfolio.Entities.Entity;

namespace Portfolio.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {

        IPersonService _personService;
        


        public PeopleController(IPersonService personService)
        {
            _personService = personService ;
        }


        [HttpGet("get-people")]

        public async Task<ActionResult<List<Person>>> GetPeople()
        {
            return await _personService.GetList(); 
            
        }

        [HttpPost("add-person")]

        public async Task<Person> AddPerson(Person person)
        {
            return await _personService.TAdd(person); 
        }

        [HttpPut("update-person")]

        public async Task UpdatePerson (int id , Person person)
        {
            await _personService.TUpdate(id, person); 
        }


        [HttpDelete("delete-person/{id}")]

        public async Task DeletePerson(int id)
        {
            await _personService.TDelete(id); 
        }

        [HttpPost("add-ability-to-person")]

        public async Task<PersonAbility> AddAbilityToPerson(PersonAbility personAbility)
        {
            return await _personService.AddAbilityToPerson(personAbility); 
        }

        [HttpGet("people-details")]

        public async Task<ActionResult<List<PersonDto>>> GetPeopleDetails()
        {
            return await _personService.GetPeopleDetails(); 
        }


        [HttpGet("{personId}/details")]

        public async Task<ActionResult<PersonDto>> GetOnePersonDetail(int personId)
        {
            return await _personService.GetOnePersonDetail(personId); 
        }
        
    }
}
