using Infraestrutura.Data.SqlServer;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace alcanzaLaboral.Controllers
{
    public class CheckOutController : Controller
    {
        // GET: CheckOut
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AddCarrito(string json)
        {
            dynamic stuff = JsonConvert.DeserializeObject(json);
            string carrito = stuff.carrito;
            int candidato = stuff.candidato;
            return Json(new General_DAL().AddCarrito(carrito, candidato), JsonRequestBehavior.AllowGet);

        }

        public ActionResult EliminarCarrito(string json)
        {
            dynamic stuff = JsonConvert.DeserializeObject(json);
            string carrito = stuff.carrito;
            int secuencia = stuff.secuencia;
            return Json(new General_DAL().EliminarCarrito(carrito, secuencia), JsonRequestBehavior.AllowGet);
        }

        public ActionResult ListarCarrito(string json)
        {
            dynamic stuff = JsonConvert.DeserializeObject(json);

            string carrito = stuff.carrito;

            return Json(new General_DAL().ListarCarrito(carrito), JsonRequestBehavior.AllowGet);

        }
        public ActionResult OutShop()
        {
            return View();
        }
        public ActionResult EndTrans()
        {
            return View();
        }
        public ActionResult ErrorShop()
        {
            return View();
        }
    }
}