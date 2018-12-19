using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Entidades;
using System.Data.SqlClient;
using System.Data;

namespace Infraestrutura.Data.SqlServer
{
    public class General_DAL
    {

        Conexion_DAL cn = new Conexion_DAL();

        //***************************************************************************************************************************************
        //Inicio *******************************************************************************************************************
        //***************************************************************************************************************************************

        //Login
        public List<LoginEntity> Login_DAL(string usuario, string password)
        {
            List<LoginEntity> listado = new List<LoginEntity>();

            SqlCommand cmd = new SqlCommand("sp_accesousuario", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@usuario", usuario);
            cmd.Parameters.AddWithValue("@password", password);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                LoginEntity clase = new LoginEntity();
                clase.idusuario = int.Parse(dr["idusuario"].ToString());
                clase.nomusuario = dr["nomusuario"].ToString();
                clase.administrador = int.Parse(dr["administrador"].ToString());

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }

        //Recupera Cuenta
        public List<RecuperaCuentaEntity> Recupera_DAL(string emailusuariop, int idpreguntap, string respuestaPregp)
        {
            List<RecuperaCuentaEntity> listado = new List<RecuperaCuentaEntity>();

            SqlCommand cmd = new SqlCommand("sp_recuperarCuenta", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@emailusuario", emailusuariop);
            cmd.Parameters.AddWithValue("@idpregunta", idpreguntap);
            cmd.Parameters.AddWithValue("@respuestaPreg", respuestaPregp);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RecuperaCuentaEntity clase = new RecuperaCuentaEntity();
                clase.respuesta = dr["respuesta"].ToString();
                clase.nomusuario = dr["nomusuario"].ToString();
                clase.passusuario = dr["passusuario"].ToString();
                clase.emailusuario = dr["emailusuario"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }

        //Validar Usuario
        public List<RespuestaPostEntity> ValidarUsuario_DAL(string nomusuario)
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_validar_usuario", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@nomusuario", nomusuario);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }

        //Validar Correo
        public List<RespuestaPostEntity> ValidarCorreo_DAL(string emailusuario)
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_validar_correo", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@emailusuario", emailusuario);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }

        //Registrar Usuario
        public List<RespuestaPostEntity> RegistrarUsuario_DAL(string nomusuario, string passusuario, string emailusuario,
            int idpregunta, string respuestaPreg, int flagref, string emailref)
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_usuario_general_insertar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@nomusuario", nomusuario);
            cmd.Parameters.AddWithValue("@passusuario", passusuario);
            cmd.Parameters.AddWithValue("@emailusuario", emailusuario);
            cmd.Parameters.AddWithValue("@idpregunta", idpregunta);
            cmd.Parameters.AddWithValue("@respuestaPreg", respuestaPreg);

            cmd.Parameters.AddWithValue("@flagref", flagref);
            cmd.Parameters.AddWithValue("@emailref", emailref);


            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }

        //***************************************************************************************************************************************
        //Editar Perfil *******************************************************************************************************************
        //***************************************************************************************************************************************


        //Listar Paises
        public List<PaisesEntity> ListarPaises_DAL()
        {
            List<PaisesEntity> listado = new List<PaisesEntity>();

            SqlCommand cmd = new SqlCommand("sp_listar_paises", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                PaisesEntity clase = new PaisesEntity();
                clase.idpais = int.Parse(dr["idpais"].ToString());
                clase.nompais = dr["nompais"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }

        //Listar Nacionalidad
        public List<PaisesEntity> ListarNacionalidad_DAL()
        {
            List<PaisesEntity> listado = new List<PaisesEntity>();

            SqlCommand cmd = new SqlCommand("sp_listar_paises", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                PaisesEntity clase = new PaisesEntity();
                clase.idpais = int.Parse(dr["idpais"].ToString());
                clase.nompais = dr["nompais"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }

        //detalle usuario
        public List<DetalleUsuarioEntity> DetalleUsuario_DAL(int idusuario)
        {
            List<DetalleUsuarioEntity> listado = new List<DetalleUsuarioEntity>();

            SqlCommand cmd = new SqlCommand("sp_deta_usuario", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                DetalleUsuarioEntity clase = new DetalleUsuarioEntity();
                clase.Nombres = dr["Nombres"].ToString();
                clase.ApePaterno = dr["ApePaterno"].ToString();
                clase.ApeMaterno = dr["ApeMaterno"].ToString();
                clase.Nacimiento = dr["Nacimiento"].ToString();
                clase.Nacionalidad = int.Parse(dr["Nacionalidad"].ToString());
                clase.Sexo = int.Parse(dr["Sexo"].ToString());
                clase.Residencia = int.Parse(dr["Residencia"].ToString());
                clase.Ciudad = dr["Ciudad"].ToString();
                clase.Fijo = dr["Fijo"].ToString();
                clase.Celular1 = dr["Celular1"].ToString();
                clase.Celular2 = dr["Celular2"].ToString();
                clase.Resumen = dr["Resumen"].ToString();
                clase.NivEstudio = int.Parse(dr["NivEstudio"].ToString());
                clase.EspEstudio = dr["EspEstudio"].ToString();
                clase.Seminario = dr["Seminario"].ToString();
                clase.Instituto = dr["Instituto"].ToString();
                clase.Fecha = dr["Fecha"].ToString();
                clase.Duración = dr["Duración"].ToString();
                clase.Experiencia = int.Parse(dr["Experiencia"].ToString());
                clase.TExperiencia = dr["TExperiencia"].ToString();
                clase.SituacionAct = int.Parse(dr["SituacionAct"].ToString());
                clase.Experiencia1 = dr["Experiencia1"].ToString();
                clase.Experiencia2 = dr["Experiencia2"].ToString();
                clase.Experiencia3 = dr["Experiencia3"].ToString();
                clase.Experiencia4 = dr["Experiencia4"].ToString();
                clase.Disponibilidad = int.Parse(dr["Disponibilidad"].ToString());

                clase.fechaNaciPerfil = dr["fechaNaciPerfil"].ToString();
                clase.edadPerfil = int.Parse(dr["edadPerfil"].ToString());
                clase.nacionalidadPerfil = dr["nacionalidadPerfil"].ToString();
                clase.residenciaPerfil = dr["residenciaPerfil"].ToString();
                clase.emailusuario = dr["emailusuario"].ToString();
                clase.idtipopostulante = int.Parse(dr["idtipopostulante"].ToString());

                clase.tipo_doc = int.Parse(dr["tipo_doc"].ToString());
                clase.nro_doc = dr["nro_doc"].ToString();
                clase.fechacreacion = dr["fechacreacion"].ToString();
                clase.finsubscrip = dr["finsubscrip"].ToString();

                clase.flag_discap = int.Parse(dr["flag_discap"].ToString());
                clase.desc_discap = dr["desc_discap"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }

        //actualizar detalle usuario
        public List<RespuestaPostEntity> ActualizarUsuario_DAL(
            int idusuario,
            string PriNombre,
            string SegNombre,
            string ApePaterno,
            string ApeMaterno,
            string FecNacimiento,
            int idNacionalidad,
            int genero,
            int idPaisresidencia,
            string Ciudad,
            string Telfijo,
            string TelCelular1,
            string TelCelular2,
            int idtipopostulante,
            int tipo_doc,
            string nro_doc,
            string emailusuario,
            int flag_discap,
            string desc_discap
            )
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_usuario_actualizar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);
            cmd.Parameters.AddWithValue("@PriNombre", PriNombre);
            cmd.Parameters.AddWithValue("@SegNombre", SegNombre);
            cmd.Parameters.AddWithValue("@ApePaterno", ApePaterno);
            cmd.Parameters.AddWithValue("@ApeMaterno", ApeMaterno);
            cmd.Parameters.AddWithValue("@FecNacimiento", FecNacimiento);
            cmd.Parameters.AddWithValue("@idNacionalidad", idNacionalidad);
            cmd.Parameters.AddWithValue("@genero", genero);
            cmd.Parameters.AddWithValue("@idPaisresidencia", idPaisresidencia);
            cmd.Parameters.AddWithValue("@Ciudad", Ciudad);
            cmd.Parameters.AddWithValue("@Telfijo", Telfijo);
            cmd.Parameters.AddWithValue("@TelCelular1", TelCelular1);
            cmd.Parameters.AddWithValue("@TelCelular2", TelCelular2);
            cmd.Parameters.AddWithValue("@idtipopostulante", idtipopostulante);
            cmd.Parameters.AddWithValue("@tipo_doc", tipo_doc);
            cmd.Parameters.AddWithValue("@nro_doc", nro_doc);
            cmd.Parameters.AddWithValue("@emailusuario", emailusuario);
            cmd.Parameters.AddWithValue("@flag_discap", flag_discap);
            cmd.Parameters.AddWithValue("@desc_discap", desc_discap);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //===actualizar resumen =========
        public List<RespuestaPostEntity> ActualizarResumenUsuario_DAL(
            int idusuario,
            string ResumenExperiencia
            )
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_resumen_actualizar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);
            cmd.Parameters.AddWithValue("@ResumenExperiencia", ResumenExperiencia);


            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //===actualizar informacion academica =========
        public List<RespuestaPostEntity> ActualizarInfoAcademico_DAL(
            int idusuario,
            int IdNivelEstudio,
            string EspecifNivelEstudio,
            string SeminarioCurso,
            string Instituto,
            string Fecha,
            string Duración
            )
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_infoAcademico_actualizar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);
            cmd.Parameters.AddWithValue("@IdNivelEstudio", IdNivelEstudio);
            cmd.Parameters.AddWithValue("@EspecifNivelEstudio", EspecifNivelEstudio);
            cmd.Parameters.AddWithValue("@SeminarioCurso", SeminarioCurso);
            cmd.Parameters.AddWithValue("@Instituto", Instituto);
            cmd.Parameters.AddWithValue("@Fecha", Fecha);
            cmd.Parameters.AddWithValue("@Duración", Duración);


            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //===actualizar experiencia laboral =========
        public List<RespuestaPostEntity> ActualizarExpLaboral_DAL(
            int idusuario,
            int ExperienciaLaboral,
            string TiempodeExperiencia,
            string SituaciónLaboralActual,
            string Aespecdestre01,
            string Aespecdestre02,
            string Aespecdestre03,
            string Aespecdestre04
            )
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_experienciaLab_actualizar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);
            cmd.Parameters.AddWithValue("@ExperienciaLaboral", ExperienciaLaboral);
            cmd.Parameters.AddWithValue("@TiempodeExperiencia", TiempodeExperiencia);
            cmd.Parameters.AddWithValue("@SituaciónLaboralActual", SituaciónLaboralActual);
            cmd.Parameters.AddWithValue("@Aespecdestre01", Aespecdestre01);
            cmd.Parameters.AddWithValue("@Aespecdestre02", Aespecdestre02);
            cmd.Parameters.AddWithValue("@Aespecdestre03", Aespecdestre03);
            cmd.Parameters.AddWithValue("@Aespecdestre04", Aespecdestre04);


            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //===actualizar disponibilidad =========
        public List<RespuestaPostEntity> ActualizarDisponibilidad_DAL(
            int idusuario,
            int Disponibilidad
            )
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_disponibilidad_actualizar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);
            cmd.Parameters.AddWithValue("@Disponibilidad", Disponibilidad);


            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //Listar Categoria
        public List<LCategoria> ListarCategoria_DAL()
        {
            List<LCategoria> listado = new List<LCategoria>();

            SqlCommand cmd = new SqlCommand("sp_listar_categoria", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                LCategoria clase = new LCategoria();
                clase.idcategoria = int.Parse(dr["idcategoria"].ToString());
                clase.nomcategoria = dr["nomcategoria"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }

        //Listar subCategoria
        public List<LSCategoria> ListarSubCategoria_DAL(int idcategoria)
        {
            List<LSCategoria> listado = new List<LSCategoria>();

            SqlCommand cmd = new SqlCommand("sp_listar_subcategoria", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idcategoria", idcategoria);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                LSCategoria clase = new LSCategoria();
                clase.idsubcategoria = int.Parse(dr["idsubcategoria"].ToString());
                clase.nomsubcategoria = dr["nomsubcategoria"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //Agregar Categoria:
        public List<RespuestaPostEntity> AgregarCategoria_DAL(int idusuario, int idcategoria, int subcategoria)
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_usuario_categoria_insertar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);
            cmd.Parameters.AddWithValue("@idcategoria", idcategoria);
            cmd.Parameters.AddWithValue("@subcategoria", subcategoria);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //Listar Categoria:
        public List<Categoria> ListaCategoria_DAL(int idusuario)
        {
            List<Categoria> listado = new List<Categoria>();

            SqlCommand cmd = new SqlCommand("sp_usuario_categoria_listar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                Categoria clase = new Categoria();
                clase.idprofesion = int.Parse(dr["idprofesion"].ToString());
                clase.categoria = dr["categoria"].ToString();
                clase.subcategoria = dr["subcategoria"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //Eliminar Categoria:
        public List<RespuestaPostEntity> EliminarCategoria_DAL(int idprofesion)
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_usuario_categoria_eliminar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idprofesion", idprofesion);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //Agregar Experiencia:
        public List<RespuestaPostEntity> AgregarExperiencia_DAL(int idusuario, string descrippuesto, string titulo, string desde, string hasta, string nomempresa, string actividadempresa, int idpais, string ciudad, string desemlogros)
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_usuario_experiencia_insertar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);
            cmd.Parameters.AddWithValue("@descrippuesto", descrippuesto);
            cmd.Parameters.AddWithValue("@titulo", titulo);
            cmd.Parameters.AddWithValue("@desde", desde);
            cmd.Parameters.AddWithValue("@hasta", hasta);
            cmd.Parameters.AddWithValue("@nomempresa", nomempresa);
            cmd.Parameters.AddWithValue("@actividadempresa", actividadempresa);
            cmd.Parameters.AddWithValue("@idpais", idpais);
            cmd.Parameters.AddWithValue("@ciudad", ciudad);
            cmd.Parameters.AddWithValue("@desemlogros", desemlogros);


            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //Listar Experiencia:
        public List<LExperiencia> ListarExperiencia_DAL(int idusuario)
        {
            List<LExperiencia> listado = new List<LExperiencia>();

            SqlCommand cmd = new SqlCommand("sp_usuario_experiencia_listar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                LExperiencia clase = new LExperiencia();
                clase.idexperiencia = int.Parse(dr["idexperiencia"].ToString());
                clase.descripcion = dr["descripcion"].ToString();
                clase.titulo = dr["titulo"].ToString();
                clase.empresa = dr["empresa"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //Eliminar Experiencia:
        public List<RespuestaPostEntity> EliminarExperiencia_DAL(int idexperiencia)
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_usuario_experiencia_eliminar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idexperiencia", idexperiencia);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //Agregar Maquinaria:
        public List<RespuestaPostEntity> AgregarMaquinaria_DAL(int idusuario, string nom_maquinaria, int idnivel)
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_usuario_maquinaria_insertar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);
            cmd.Parameters.AddWithValue("@nom_maquinaria", nom_maquinaria);
            cmd.Parameters.AddWithValue("@idnivel", idnivel);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //Listar Maquinaria:
        public List<LMaquinaria> ListarMaquinaria_DAL(int idusuario)
        {
            List<LMaquinaria> listado = new List<LMaquinaria>();

            SqlCommand cmd = new SqlCommand("sp_usuario_maquinaria_listar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                LMaquinaria clase = new LMaquinaria();
                clase.idmaquinaria = int.Parse(dr["idmaquinaria"].ToString());
                clase.nom_maquinaria = dr["nom_maquinaria"].ToString();
                clase.idnivel = int.Parse(dr["idnivel"].ToString());

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //Eliminar Maquinaria:
        public List<RespuestaPostEntity> EliminarMaquinaria_DAL(int idmaquinaria)
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_usuario_maquinaria_eliminar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idmaquinaria", idmaquinaria);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //Agregar inst. Academico
        public List<RespuestaPostEntity> AgregarInstitucion_DAL(int idusuario, int idestudio, string nominstitucion, int estudioculminado, string titulo)
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_usuario_academico_insertar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);
            cmd.Parameters.AddWithValue("@idestudio", idestudio);
            cmd.Parameters.AddWithValue("@nominstitucion", nominstitucion);
            cmd.Parameters.AddWithValue("@estudioculminado", estudioculminado);
            cmd.Parameters.AddWithValue("@titulo", titulo);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //Eliminar Inst. Academio:
        public List<RespuestaPostEntity> EliminarInstitucion_DAL(int idacademico)
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_usuario_academico_eliminar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idacademico", idacademico);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //Listar Inst. Academico:
        public List<IAcademicoEntity> ListarInstitucion_DAL(int idusuario)
        {
            List<IAcademicoEntity> listado = new List<IAcademicoEntity>();

            SqlCommand cmd = new SqlCommand("sp_usuario_academico_listar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                IAcademicoEntity clase = new IAcademicoEntity();
                clase.idacademico = int.Parse(dr["idacademico"].ToString());
                clase.idestudio = int.Parse(dr["idestudio"].ToString());
                clase.nominstitucion = dr["nominstitucion"].ToString();
                clase.estudioculminado = int.Parse(dr["estudioculminado"].ToString());

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //Agregar Programa:
        public List<RespuestaPostEntity> AgregarPrograma_DAL(int idusuario, string nomprograma, int idnivel)
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_usuario_dominiosoft_insertar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);
            cmd.Parameters.AddWithValue("@nomprograma", nomprograma);
            cmd.Parameters.AddWithValue("@idnivel", idnivel);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }

        //Eliminar Programa:
        public List<RespuestaPostEntity> EliminarPrograma_DAL(int iddominiosoft)
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_usuario_dominiosoft_eliminar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@iddominiosoft", iddominiosoft);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }

        //Listar Programa:
        public List<DSoftwareEntity> ListarPrograma_DAL(int idusuario)
        {
            List<DSoftwareEntity> listado = new List<DSoftwareEntity>();

            SqlCommand cmd = new SqlCommand("sp_usuario_dominiosoft_listar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                DSoftwareEntity clase = new DSoftwareEntity();
                clase.iddominiosoft = int.Parse(dr["iddominiosoft"].ToString());
                clase.nomprograma = dr["nomprograma"].ToString();
                clase.idnivel = int.Parse(dr["idnivel"].ToString());

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }


        //Agregar Idioma:
        public List<RespuestaPostEntity> AgregarIdioma_DAL(int idusuario, string nomidioma, int nivelhablado,
            int nivelescrito, int niveltraduccion)
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_usuario_idioma_insertar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);
            cmd.Parameters.AddWithValue("@nomidioma", nomidioma);
            cmd.Parameters.AddWithValue("@nivelhablado", nivelhablado);
            cmd.Parameters.AddWithValue("@nivelescrito", nivelescrito);
            cmd.Parameters.AddWithValue("@niveltraduccion", niveltraduccion);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        //Eliminar Idioma:
        public List<RespuestaPostEntity> EliminarIdioma_DAL(int ididiomausu)
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_usuario_idioma_eliminar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@ididiomausu", ididiomausu);


            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }


        //Listar Idioma:
        public List<DIdiomaEntity> ListarIdioma_DAL(int idusuario)
        {
            List<DIdiomaEntity> listado = new List<DIdiomaEntity>();

            SqlCommand cmd = new SqlCommand("sp_usuario_idioma_listar", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idusuario", idusuario);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                DIdiomaEntity clase = new DIdiomaEntity();
                clase.ididiomausu = int.Parse(dr["ididiomausu"].ToString());
                clase.nomidioma = dr["nomidioma"].ToString();
                clase.nivelhablado = int.Parse(dr["nivelhablado"].ToString());
                clase.nivelescrito = int.Parse(dr["nivelescrito"].ToString());
                clase.niveltraduccion = int.Parse(dr["niveltraduccion"].ToString());

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }

        //Listado Datos Candidatos
        public List<LCandidato> ListarCandidatos_DAL(int Profesion, int Subprofesion, int Tipo, int Nacionalidad, int Sexo)
        {
            List<LCandidato> listado = new List<LCandidato>();

            SqlCommand cmd = new SqlCommand("sp_listar_candiato", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@Profesion", Profesion);
            cmd.Parameters.AddWithValue("@Subprofesion", Subprofesion);
            cmd.Parameters.AddWithValue("@Tipo", Tipo);
            cmd.Parameters.AddWithValue("@Nacionalidad", Nacionalidad);
            cmd.Parameters.AddWithValue("@Sexo", Sexo);


            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                LCandidato clase = new LCandidato();
                clase.Id = int.Parse(dr["Id"].ToString());
                clase.Nombres = dr["Nombres"].ToString();
                clase.Profesion = int.Parse(dr["Profesion"].ToString());//quitar el parce cuando se traiga el nombre no el id
                clase.Subprofesion = int.Parse(dr["Subprofesion"].ToString());//quitar el parce cuando se traiga el nombre no el id
                clase.Nacionalidad = dr["Nacionalidad"].ToString();
                clase.Sexo = dr["Sexo"].ToString();
                clase.Edad = int.Parse(dr["Edad"].ToString());
                clase.Tipo = int.Parse(dr["Tipo"].ToString());//quitar el parce cuando se traiga el nombre no el id
                clase.TotalRegistros = dr["TotalRegistros"].ToString();
                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }

        public List<LCandidatos> ListarBuscarCandidatos_DAL(int Profesion, int Subprofesion, int Nacionalidad, int Sexo, int idtipopostulante, string flag_discap, int NroDePagina, int RegPorPag)
        {
            List<LCandidatos> listado = new List<LCandidatos>();

            SqlCommand cmd = new SqlCommand("sp_listar_candidatos", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@profesion", Profesion);
            cmd.Parameters.AddWithValue("@especialidad", Subprofesion);
            cmd.Parameters.AddWithValue("@nacionalidad", Nacionalidad);
            cmd.Parameters.AddWithValue("@sexo", Sexo);
            cmd.Parameters.AddWithValue("@idtipopostulante", idtipopostulante);
            cmd.Parameters.AddWithValue("@flag_discap", flag_discap);
            cmd.Parameters.AddWithValue("@NroDePagina", NroDePagina);
            cmd.Parameters.AddWithValue("@RegPorPag", RegPorPag);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                LCandidatos clase = new LCandidatos();
                clase.id = int.Parse(dr["id"].ToString());
                clase.nombre = dr["nombre"].ToString();
                clase.profesion = dr["profesion"].ToString();
                clase.especialidad = dr["especialidad"].ToString();
                clase.nacionalidad = dr["nacionalidad"].ToString();
                clase.sexo = dr["sexo"].ToString();
                clase.edad = int.Parse(dr["edad"].ToString());
                clase.emailusuario = dr["emailusuario"].ToString();
                clase.TotalRegistros = int.Parse(dr["TotalRegistros"].ToString());
                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }

        public List<LCandidatos> RCandidatosPeridoCategoria(int Profesion, int Subprofesion, string dfechaIni, string dfechaFin)
        {
            List<LCandidatos> listado = new List<LCandidatos>();

            SqlCommand cmd = new SqlCommand("RCandidatosPeridoCategoria", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@profesion", Profesion);
            cmd.Parameters.AddWithValue("@especialidad", Subprofesion);
            cmd.Parameters.AddWithValue("@dfechaIni", dfechaIni);
            cmd.Parameters.AddWithValue("@dfechaFin", dfechaFin);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                LCandidatos clase = new LCandidatos();
                clase.id = int.Parse(dr["id"].ToString());
                clase.nombre = dr["nombre"].ToString();
                clase.profesion = dr["profesion"].ToString();
                clase.especialidad = dr["especialidad"].ToString();
                clase.nacionalidad = dr["nacionalidad"].ToString();
                clase.sexo = dr["sexo"].ToString();
                clase.edad = int.Parse(dr["edad"].ToString());
                clase.emailusuario = dr["emailusuario"].ToString();
                clase.fechacreacion = dr["fechacreacion"].ToString();
                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }

        public List<CantidadEntity> RCantidadCandidatosPeridoTiempo(string dfechaIni, string dfechaFin)
        {
            List<CantidadEntity> listado = new List<CantidadEntity>();

            SqlCommand cmd = new SqlCommand("RCantidadCandidatosPeridoTiempo", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@dfechaIni", dfechaIni);
            cmd.Parameters.AddWithValue("@dfechaFin", dfechaFin);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                CantidadEntity clase = new CantidadEntity();
                clase.cantidad = int.Parse(dr["cantidad"].ToString());
                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }
        public List<PagosEntity> RPagosPeridoTiempo(string dfechaIni, string dfechaFin)
        {
            List<PagosEntity> listado = new List<PagosEntity>();

            SqlCommand cmd = new SqlCommand("RPagosPeridoTiempo", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@dfechaIni", dfechaIni);
            cmd.Parameters.AddWithValue("@dfechaFin", dfechaFin);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                PagosEntity clase = new PagosEntity();
                clase.id = int.Parse(dr["id"].ToString());
                clase.idusuario = int.Parse(dr["idusuario"].ToString());
                clase.nomcompleto = dr["nomcompleto"].ToString();
                clase.emailusuario = dr["emailusuario"].ToString();
                clase.monto = decimal.Parse(dr["monto"].ToString());
                clase.fechapago = dr["fechapago"].ToString();
                clase.facturado = decimal.Parse(dr["facturado"].ToString());
                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }

        public List<RCuentas> RCuentas(int filtro)
        {
            List<RCuentas> listado = new List<RCuentas>();

            SqlCommand cmd = new SqlCommand("RCuentas", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@filtro", filtro);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RCuentas clase = new RCuentas();
                clase.nomusuario = dr["nomusuario"].ToString();
                clase.nombre = dr["nombre"].ToString();
                clase.emailusuario = dr["emailusuario"].ToString();
                clase.fechavence = dr["fechavence"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }

        //===actualizar informacion academica =========
        public List<RespuestaPostEntity> validaremailref_DAL(string emailusuario)
        {
            List<RespuestaPostEntity> listado = new List<RespuestaPostEntity>();

            SqlCommand cmd = new SqlCommand("sp_validar_emailref", cn.getcn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@emailusuario", emailusuario);

            cn.getcn.Open();

            SqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                RespuestaPostEntity clase = new RespuestaPostEntity();
                clase.respuesta = dr["respuesta"].ToString();

                listado.Add(clase);
            }

            dr.Close();
            cmd.Dispose();
            cn.getcn.Close();

            return listado;
        }



















    }
}
