using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entidades
{
    public class PagosEntity
    {
        public int id { get; set; }
        public int idusuario { get; set; }
        public string nomcompleto { get; set; }
        public string emailusuario { get; set; }
        public decimal monto { get; set; }
        public string fechapago { get; set; }
        public decimal facturado { get; set; }
    }
}
