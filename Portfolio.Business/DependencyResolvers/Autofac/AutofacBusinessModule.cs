using Autofac;
using Autofac.Extras.DynamicProxy;
using Castle.DynamicProxy;
using Portfolio.Business.Abstract;
using Portfolio.Business.Concrete;
using Portfolio.Core.Utilities.Interceptors;
using Portfolio.DataAccess.Abstract;
using Portfolio.DataAccess.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;

using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Business.DependencyResolvers.Autofac
{
    public class AutofacBusinessModule  : Module
    {

        protected override void Load(ContainerBuilder builder)
        {

            builder.RegisterType<AbilityManager>().As<IAbilityService>();
            builder.RegisterType<AbilityRepository>().As<IAbilityRepository>();


            builder.RegisterType<PersonManager>().As<IPersonService>();
            builder.RegisterType<PersonRepository>().As<IPersonRepository>();

            builder.RegisterType<CategoryManager>().As<ICategoryService>();
            builder.RegisterType<CategoryRepository>().As<ICategoryRepository>();

            var assembly = System.Reflection.Assembly.GetExecutingAssembly();

            builder.RegisterAssemblyTypes(assembly).AsImplementedInterfaces()
                .EnableInterfaceInterceptors(new ProxyGenerationOptions()
                {
                    Selector = new AspectInterceptorSelector()
                }).SingleInstance();
        }
    }
}
