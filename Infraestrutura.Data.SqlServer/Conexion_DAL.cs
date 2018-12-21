using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Configuration;

namespace Infraestrutura.Data.SqlServer
{
    public class Conexion_DAL
    {
        public static string cnx = ConfigurationManager.ConnectionStrings["Conalcanzadb"].ConnectionString;
        SqlConnection cn = new SqlConnection(cnx);
        public SqlConnection getcn
        {
            get { return cn; }
        }
    }
}
