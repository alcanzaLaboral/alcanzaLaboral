using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entidades
{
    public class DatosFacturacion
    {
        public string transactionID { get; set; } // "referenceCode" 
        public string PayDescription { get; set; } //  "description"
        public float Value { get; set; }

        public int idUsuario { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Document { get; set; }

        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Postal { get; set; }
        public string expireDate { get; set; }
        



    }
}
