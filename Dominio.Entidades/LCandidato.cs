using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entidades
{
    public class LCandidato
    {
        public int Id { get; set; }
        public string Nombres { get; set; }
        public int Profesion { get; set; } //cambiar el tipo de dato a string cuando se llame el nombre y no el id de este campo
        public int Subprofesion { get; set; } //cambiar el tipo de dato a string cuando se llame el nombre y no el id de este campo
        public string Nacionalidad { get; set; }
        public string Sexo { get; set; }
        public int Edad { get; set; }
        public int Tipo { get; set; } //cambiar el tipo de dato a string cuando se llame el nombre y no el id de este campo
        public string TotalRegistros { get; set; }
    }
}
