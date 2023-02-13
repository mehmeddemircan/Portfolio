using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Entities.Entity;

namespace Portfolio.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {

        public PeopleController()
        {

        }


        [HttpGet()]

        public async Task<ActionResult<List<Person>>> GetPeople()
        {

            var people =  new List<Person>(); 
            return people; 
        }



    }
}
