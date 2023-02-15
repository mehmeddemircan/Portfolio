using Portfolio.Business.Abstract;
using Portfolio.DataAccess.Abstract;
using Portfolio.Entities.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Business.Concrete
{
    public class AbilityManager : IAbilityService
    {

        IAbilityRepository _abilityRepository;

        public AbilityManager(IAbilityRepository abilityRepository)
        {
            _abilityRepository = abilityRepository; 
        }

        public async Task<List<Ability>> GetAbilityByCategory(int categoryId)
        {
            return await _abilityRepository.GetAbilityByCategory(categoryId); 
        }

        public Task<List<Ability>> GetList(Expression<Func<Ability, bool>> filter = null)
        {
            return _abilityRepository.GetList(filter);
        }

        public Task<Ability> GetSingle(Expression<Func<Ability, bool>> filter)
        {
            return _abilityRepository.GetSingle(filter);
        }

        public Task<Ability> TAdd(Ability entity)
        {
            return _abilityRepository.TAdd(entity);
        }

        public async Task TDelete(int id)
        {
            await _abilityRepository.TDelete(id); 
        }

        public async Task TUpdate(int id, Ability entity)
        {
            await _abilityRepository.TUpdate(id,entity);
        }
    }
}
