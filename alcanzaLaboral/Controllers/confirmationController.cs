using Infraestrutura.Data.SqlServer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace alcanzaLaboral.Controllers
{
    public class confirmationController : Controller
    {
        // GET: confirmation
        public ActionResult Index(string state_pol,string reference_sale)
        {

            var split = reference_sale.Split('_');
            new General_DAL().ConfirmarPago(state_pol, split[1]);

            return View();
        }
    }
}