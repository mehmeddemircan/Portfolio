﻿using Portfolio.Entities.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Business.Abstract
{
    public interface IAbilityService : IGenericService<Ability>
    {

       public Task<List<Ability>> GetAbilityByCategory (int categoryId);    
    }
}
