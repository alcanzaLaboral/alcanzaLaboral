using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entidades
{
    public class DetalleUsuarioEntity
    {
        public string Nombres { get; set; }
        public string ApePaterno { get; set; }
        public string ApeMaterno { get; set; }
        public string Nacimiento { get; set; }
        public int Nacionalidad { get; set; }
        public int Sexo { get; set; }
        public int Residencia { get; set; }
        public string Ciudad { get; set; }
        public string Fijo { get; set; }
        public string Celular1 { get; set; }
        public string Celular2 { get; set; }
        public string Resumen { get; set; }
        public int NivEstudio { get; set; }
        public string EspEstudio { get; set; }
        public string Seminario { get; set; }
        public string Instituto { get; set; }
        public string Fecha { get; set; }
        public string Duración { get; set; }
        public int Experiencia { get; set; }
        public string TExperiencia { get; set; }
        public int SituacionAct { get; set; }
        public string Experiencia1 { get; set; }
        public string Experiencia2 { get; set; }
        public string Experiencia3 { get; set; }
        public string Experiencia4 { get; set; }
        public int Disponibilidad { get; set; }

        public string fechaNaciPerfil { get; set; }
        public int edadPerfil { get; set; }
        public string nacionalidadPerfil { get; set; }
        public string residenciaPerfil { get; set; }
        public string emailusuario { get; set; }

        public int idtipopostulante { get; set; }

        public int tipo_doc { get; set; }
        public string nro_doc { get; set; }
        public string fechacreacion { get; set; }
        public string finsubscrip { get; set; }
    }
}
