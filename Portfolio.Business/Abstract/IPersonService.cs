using Portfolio.Entities.DTOs;
using Portfolio.Entities.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Business.Abstract
{
    public interface IPersonService : IGenericService<Person>
    {

        public Task<PersonAbility> AddAbilityToPerson(PersonAbility personAbility);

        public Task<List<PersonDto>> GetPeopleDetails();

        public Task<PersonDto> GetOnePersonDetail(int personId);

    }
}
