using Microsoft.EntityFrameworkCore;
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
    public class PersonRepository : EfEntityRepositoryBase<Person,ApplicationDbContext> , IPersonRepository
    {

        public async Task<PersonAbility> AddAbilityToPerson(PersonAbility personAbility)
        {
            using (var context = new ApplicationDbContext())
            {
                await context.Set<PersonAbility>().AddAsync(personAbility);
                await context.SaveChangesAsync();
                return personAbility;
            }
        }

        public async Task<List<PersonDto>> GetPeopleDetails()
        {
            using (var context = new ApplicationDbContext())
            {
                var people = from p in context.People
                             select new PersonDto
                             {
                                 Id = p.Id,
                                 Name = p.Name,
                                 //PersonAbilities = p.PersonAbilities.ToList(),
                                 PersonAbilities = (
                                    from pa in context.PersonAbilities
                                    where pa.PersonId == p.Id
                                    select new PersonAbility
                                    {
                                        PersonId = p.Id,
                                        AbilityId = pa.AbilityId,
                                        Ability = pa.Ability
                                        
                                    }

                                 ).ToList()
                             };

                             return await people.ToListAsync(); 
            }
        }

        public async Task<PersonDto> GetOnePersonDetail(int personId)
        {
            using (var context = new ApplicationDbContext())
            {
                var person = from p in context.People
                             where p.Id == personId
                             select new PersonDto
                             {
                                 Id = p.Id,
                                 Name = p.Name,
                                 PersonAbilities = (
                                    from pa in context.PersonAbilities
                                    where pa.PersonId == p.Id
                                    select new PersonAbility
                                    {
                                        PersonId = p.Id,
                                        AbilityId = pa.AbilityId,
                                        Ability = pa.Ability

                                    }

                                 ).ToList()
                             };
                return await person.FirstOrDefaultAsync();
            }
        }
    }
}
