using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(alcanzaLaboral.Startup))]
namespace alcanzaLaboral
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
