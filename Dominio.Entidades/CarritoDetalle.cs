using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entidades
{
   public class CarritoDetalle
    {
        public int idDetalle { get; set; }
        public string Descripcion { get; set; }
        public string TotalUnd { get; set; }
        public string Total { get; set; }
    }
}
