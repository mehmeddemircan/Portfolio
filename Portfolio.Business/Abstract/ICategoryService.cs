﻿using Portfolio.Entities.DTOs;
using Portfolio.Entities.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Business.Abstract
{
    public interface ICategoryService  : IGenericService<Category>
    {

        public Task<List<CategoryDto>> GetCategoriesDetails();
    }
}
