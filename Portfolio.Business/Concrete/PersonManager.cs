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
    public class PersonManager : IPersonService
    {

        IPersonRepository _personRepository;

        public PersonManager(IPersonRepository personRepository)
        {
            _personRepository = personRepository;
        }


        public async Task<PersonAbility> AddAbilityToPerson(PersonAbility personAbility)
        {
            return await _personRepository.AddAbilityToPerson(personAbility);
        }
        public async Task<List<Person>> GetList(Expression<Func<Person, bool>> filter = null)
        {
            return await _personRepository.GetList();
        }

        public async Task<PersonDto> GetOnePersonDetail(int personId)
        {
           return await _personRepository.GetOnePersonDetail(personId);
        }

        public async Task<List<PersonDto>> GetPeopleDetails()
        {
            return await _personRepository.GetPeopleDetails(); 
        }

        public async Task<Person> GetSingle(Expression<Func<Person, bool>> filter)
        {
            return await _personRepository.GetSingle(filter);
        }

        public async Task<Person> TAdd(Person entity)
        {
            return await _personRepository.TAdd(entity);
        }

        public async Task TDelete(int id)
        {
             await _personRepository.TDelete(id); 
        }

        public async Task TUpdate(int id, Person entity)
        {
            await _personRepository.TUpdate(id, entity); 
        }
    }
}
