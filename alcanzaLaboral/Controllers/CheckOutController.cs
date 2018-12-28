using Dominio.Entidades;
using Infraestrutura.Data.SqlServer;
using Newtonsoft.Json;
using PayApi;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace alcanzaLaboral.Controllers
{
    public class CheckOutController : Controller
    {
        // GET: CheckOut

        public ActionResult Index(string s)
        {
            string sessionID = HttpContext.Session.SessionID;
            var sessionIDp = CreateMD5(sessionID + (DateTime.Now).ToString());

            HttpCookie deviceSessionId = new HttpCookie("deviceSessionId");
            deviceSessionId.Value = sessionIDp;
            deviceSessionId.Expires = DateTime.Now.AddHours(1);
            Response.Cookies.Add(deviceSessionId);
            
            ViewBag.deviceSessionId = "https://maf.pagosonline.net/ws/fp/tags.js?id="+sessionIDp+"80200";

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
        public ActionResult ValidatePay(string json)
        {
            dynamic stuff = JsonConvert.DeserializeObject(json);

            int idUsuario = stuff.session;
            string carrito = stuff.carrito;
            string medioPago = stuff.medio;
            int tipomedio = stuff.tipomedio;

            var deviceSessionId = Request.Cookies["deviceSessionId"];
            string ipAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            string userAgent = Request.Headers["User-Agent"].ToString();

            if (string.IsNullOrEmpty(ipAddress))
            {
                ipAddress = Request.ServerVariables["REMOTE_ADDR"];
            }

            var model = new General_DAL().ListarDatosFacturacion(idUsuario,carrito);

            if (tipomedio == 0) {

                var response = new ProcessAsync().processPayAsync(model.transactionID,model.PayDescription,model.Value,model.idUsuario.ToString(),model.Name,model.Email,medioPago,model.expireDate ,ipAddress,deviceSessionId.Value,userAgent);
                new General_DAL().GuardarRespuesta(response.ResponseText, carrito);
                return Json(response.Uri, JsonRequestBehavior.AllowGet);
            }
            else
            {

                string payerName = stuff.payerName;
                string card = stuff.card;
                string securityCode = stuff.securityCode;
                string expirationCard = stuff.expirationCard;

                var response = new Process().processPay(model.transactionID, model.PayDescription, model.Value, 
                        model.idUsuario.ToString(), model.Name, model.Email, medioPago,model.Phone,model.Document,model.Street,model.City,model.Postal,model.State
                        ,payerName, card,securityCode, expirationCard,deviceSessionId.Value,ipAddress,userAgent);

                new General_DAL().GuardarRespuesta(response.ResponseText,response.State,carrito);

                return Json(response.State, JsonRequestBehavior.AllowGet);
            }
            return View();
        }
        public ActionResult EndTrans(string json)
        {
            return View();
        }
        public ActionResult ErrorShop()
        {
            return View();
        }

        public static string CreateMD5(string input)
        {
            // Use input string to calculate MD5 hash
            using (System.Security.Cryptography.MD5 md5 = System.Security.Cryptography.MD5.Create())
            {
                byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(input);
                byte[] hashBytes = md5.ComputeHash(inputBytes);

                // Convert the byte array to hexadecimal string
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < hashBytes.Length; i++)
                {
                    sb.Append(hashBytes[i].ToString("X2"));
                }
                return sb.ToString();
            }
        }

    }
}