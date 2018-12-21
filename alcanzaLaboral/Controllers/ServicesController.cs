using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Dominio.Entidades;
using Dominio.Repositorio;
using System.Net.Mail;
using System.Text;
using Newtonsoft.Json;
using Infraestrutura.Data.SqlServer;

namespace alcanzaLaboral.Controllers
{
    public class ServicesController : Controller
    {
        // GET: Services

     
     

        public ActionResult Login(string usuario, string password)
        {
            General_BL bl = new General_BL();
            List<LoginEntity> listado = bl.Login_BL(usuario, password);
            return Json(listado);
        }

        public ActionResult Recupera(string emailusuariop, int idpreguntap, string respuestaPregp)
        {
            General_BL bl = new General_BL();
            List<RecuperaCuentaEntity> listado = bl.Recupera_BL(emailusuariop, idpreguntap, respuestaPregp);
            return Json(listado);
        }

        public ActionResult ValidarUsuario(string nomusuario)
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.ValidarUsuario_BL(nomusuario);
            return Json(listado);
        }

        public ActionResult ValidarCorreo(string emailusuario)
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.ValidarCorreo_BL(emailusuario);
            return Json(listado);
        }

        public ActionResult RegistrarUsuario(string nomusuario, string passusuario, string emailusuario,
            int idpregunta, string respuestaPreg)
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.RegistrarUsuario_BL(nomusuario, passusuario, emailusuario,
            idpregunta, respuestaPreg);
            return Json(listado);
        }

        public ActionResult ListarPaises()
        {
            General_BL bl = new General_BL();
            List<PaisesEntity> listado = bl.ListarPaises_BL();
            return Json(listado);
        }

        public ActionResult ListarNacionalidad()
        {
            General_BL bl = new General_BL();
            List<PaisesEntity> listado = bl.ListarNacionalidad_BL();
            return Json(listado);
        }

        public ActionResult DetalleUsuario(int idusuario)
        {
            General_BL bl = new General_BL();
            List<DetalleUsuarioEntity> listado = bl.DetalleUsuario_BL(idusuario);
            return Json(listado);
        }

        public ActionResult ActualizarUsuario(
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
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.ActualizarUsuario_BL(
                idusuario,
             PriNombre,
             SegNombre,
             ApePaterno,
             ApeMaterno,
             FecNacimiento,
             idNacionalidad,
             genero,
             idPaisresidencia,
             Ciudad,
             Telfijo,
             TelCelular1,
             TelCelular2,
             idtipopostulante,
             tipo_doc,
             nro_doc,
             emailusuario,
             flag_discap,
             desc_discap

                );
            return Json(listado);
        }

        public ActionResult ActualizarResumenUsuario(
             int idusuario,
            string ResumenExperiencia

           )
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.ActualizarResumenUsuario_BL(
                idusuario,
             ResumenExperiencia

                );
            return Json(listado);
        }
        public ActionResult ActualizarInfoAcademico(
            int idusuario,
            int IdNivelEstudio,
            string EspecifNivelEstudio,
            string SeminarioCurso,
            string Instituto,
            string Fecha,
            string Duración

           )
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.ActualizarInfoAcademico_BL(
                idusuario,
             IdNivelEstudio,
             EspecifNivelEstudio,
             SeminarioCurso,
             Instituto,
             Fecha,
             Duración

                );
            return Json(listado);
        }
        public ActionResult ActualizarExpeLaboral(
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
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.ActualizarExpLaboral_BL(
               idusuario,
             ExperienciaLaboral,
             TiempodeExperiencia,
             SituaciónLaboralActual,
             Aespecdestre01,
             Aespecdestre02,
             Aespecdestre03,
             Aespecdestre04

                );
            return Json(listado);
        }
        public ActionResult ActualizarDisponibilidad(
             int idusuario,
            int Disponibilidad

           )
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.ActualizarDisponibilidad_BL(
                 idusuario,
             Disponibilidad

                );
            return Json(listado);
        }

        public ActionResult ListarCategoria()
        {
            General_BL bl = new General_BL();
            List<LCategoria> listado = bl.ListarCategoria_BL();
            return Json(listado);
        }

        public ActionResult ListarSubCategoria(int idcategoria)
        {
            General_BL bl = new General_BL();
            List<LSCategoria> listado = bl.ListarSubCategoria_BL(idcategoria);
            return Json(listado);
        }

        public ActionResult AgregarCategoria(int idusuario, int idcategoria, int subcategoria)
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.AgregarCategoria_BL(idusuario, idcategoria, subcategoria);
            return Json(listado);
        }
        public ActionResult ListaCategoria(int idusuario)
        {
            General_BL bl = new General_BL();
            List<Categoria> listado = bl.ListaCategoria_BL(idusuario);
            return Json(listado);
        }
        public ActionResult EliminarCategoria(int idprofesion)
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.EliminarCategoria_BL(idprofesion);
            return Json(listado);
        }
        public ActionResult AgregarExperiencia(int idusuario, string descrippuesto, string titulo, string desde, string hasta, string nomempresa, string actividadempresa, int idpais, string ciudad, string desemlogros)
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.AgregarExperiencia_BL(idusuario, descrippuesto, titulo, desde, hasta, nomempresa, actividadempresa, idpais, ciudad, desemlogros);
            return Json(listado);
        }
        public ActionResult ListarExperiencia(int idusuario)
        {
            General_BL bl = new General_BL();
            List<LExperiencia> listado = bl.ListarExperiencia_BL(idusuario);
            return Json(listado);
        }
        public ActionResult EliminarExperiencia(int idexperiencia)
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.EliminarExperiencia_BL(idexperiencia);
            return Json(listado);
        }
        public ActionResult AgregarMaquinaria(int idusuario, string nom_maquinaria, int idnivel)
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.AgregarMaquinaria_BL(idusuario, nom_maquinaria, idnivel);
            return Json(listado);
        }
        public ActionResult ListarMaquinaria(int idusuario)
        {
            General_BL bl = new General_BL();
            List<LMaquinaria> listado = bl.ListarMaquinario_BL(idusuario);
            return Json(listado);
        }
        public ActionResult EliminarMaquinaria(int idmaquinaria)
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.EliminarMaquinaria_BL(idmaquinaria);
            return Json(listado);
        }
        public ActionResult AgregarPrograma(int idusuario, string nomprograma, int idnivel)
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.AgregarPrograma_BL(idusuario, nomprograma, idnivel);
            return Json(listado);
        }

        public ActionResult EliminarPrograma(int iddominiosoft)
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.EliminarPrograma_BL(iddominiosoft);
            return Json(listado);
        }

        public ActionResult ListarPrograma(int idusuario)
        {
            General_BL bl = new General_BL();
            List<DSoftwareEntity> listado = bl.ListarPrograma_BL(idusuario);
            return Json(listado);
        }

        public ActionResult AgregarIdioma(int idusuario, string nomidioma, int nivelhablado,
            int nivelescrito, int niveltraduccion)
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.AgregarIdioma_BL(idusuario, nomidioma, nivelhablado,
             nivelescrito, niveltraduccion);
            return Json(listado);
        }

        public ActionResult EliminarIdioma(int ididiomausu)
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.EliminarIdioma_BL(ididiomausu);
            return Json(listado);
        }

        public ActionResult ListarIdioma(int idusuario)
        {
            General_BL bl = new General_BL();
            List<DIdiomaEntity> listado = bl.ListarIdioma_BL(idusuario);
            return Json(listado);
        }

        public ActionResult AgregarInstitucion(int idusuario, int idestudio, string nominstitucion, int estudioculminado, string titulo)
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.AgregarInstitucion_BL(idusuario, idestudio, nominstitucion, estudioculminado, titulo);
            return Json(listado);
        }

        public ActionResult EliminarInstitucion(int idacademico)
        {
            General_BL bl = new General_BL();
            List<RespuestaPostEntity> listado = bl.EliminarInstitucion_BL(idacademico);
            return Json(listado);
        }

        public ActionResult ListarInstitucion(int idusuario)
        {
            General_BL bl = new General_BL();
            List<IAcademicoEntity> listado = bl.ListarInstitucion_BL(idusuario);
            return Json(listado);
        }

        public ActionResult ListarCandidatos(int Profesion, int Subprofesion, int Tipo, int Nacionalidad, int Sexo)
        {
            General_BL bl = new General_BL();
            List<LCandidato> listado = bl.ListarCandidatos_BL(Profesion, Subprofesion, Tipo, Nacionalidad, Sexo);
            return Json(listado);
        }

        public ActionResult ListarBuscarCandidatos(int Profesion, int Subprofesion, int Nacionalidad, int Sexo, int idtipopostulante, string flag_discap)
        {
            General_BL bl = new General_BL();
            List<LCandidatos> listado = bl.ListarBuscarCandidatos_BL(Profesion, Subprofesion, Nacionalidad, Sexo, idtipopostulante, flag_discap);
            return Json(listado);
        }

        public ActionResult RCandidatosPeridoCategoria(int Profesion, int Subprofesion, string dfechaIni, string dfechaFin)
        {
            General_BL bl = new General_BL();
            List<LCandidatos> listado = bl.RCandidatosPeridoCategoria(Profesion, Subprofesion, dfechaIni, dfechaFin);
            return Json(listado);
        }
        public ActionResult RCantidadCandidatosPeridoTiempo(string dfechaIni, string dfechaFin)
        {
            General_BL bl = new General_BL();
            List<CantidadEntity> listado = bl.RCantidadCandidatosPeridoTiempo(dfechaIni, dfechaFin);
            return Json(listado);
        }
        public ActionResult RPagosPeridoTiempo(string dfechaIni, string dfechaFin)
        {
            General_BL bl = new General_BL();
            List<PagosEntity> listado = bl.RPagosPeridoTiempo(dfechaIni, dfechaFin);
            return Json(listado);
        }

        public ActionResult RCuentas(int filtro)
        {
            General_BL bl = new General_BL();
            List<RCuentas> listado = bl.RCuentas(filtro);
            return Json(listado);
        }


        public ActionResult EnviarCorreo(string mensajep, string asuntop, string destinop)
        {

            MailMessage mensaje = new MailMessage();

            mensaje.Subject = asuntop;
            mensaje.Body = mensajep;
            mensaje.To.Add(destinop);

            mensaje.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient();
            smtp.Send(mensaje);

            return Json("ok");
        }

        public ActionResult EnviarCorreoContactar(string nombresaludo, string asuntop, string nombrecontactador, string correocontactador, string fonocontactador,
            string vacante, string destinop)
        {
            string stCuerpoHTML = "<!DOCTYPE html><html><head><title>Contactar</title></head><body><h1>Solicitud de Empleo</h1>";
            stCuerpoHTML += "<label>Hola " + nombresaludo + ",</label><br>";
            stCuerpoHTML += "<label>Esta persona desea contactarte a traves de Alcanza Laboral:</label><br>";
            stCuerpoHTML += "<label>Nombre:<span>" + nombrecontactador + "</span></label><br>";
            stCuerpoHTML += "<label>Correo:<span>" + correocontactador + "</span></label><br>";
            stCuerpoHTML += "<label>Teléfono: <span>" + fonocontactador + "</span></label><br>";
            stCuerpoHTML += "<label>Vacante: <span>" + vacante + "</span></label><br>";
            stCuerpoHTML += "</body></html>";

            MailMessage mensaje = new MailMessage();
            mensaje.BodyEncoding = Encoding.UTF8;
            mensaje.SubjectEncoding = Encoding.UTF8;

            AlternateView htmlView = AlternateView.CreateAlternateViewFromString(stCuerpoHTML);
            htmlView.ContentType = new System.Net.Mime.ContentType("text/html");

            //string path = Server.MapPath("~") + @"Img\";

            //LinkedResource imgcalendar = new LinkedResource(path + "icon-calendar.png");
            //imgcalendar.ContentId = "icon-calendar";
            //htmlView.LinkedResources.Add(imgcalendar);

            //LinkedResource imgclock = new LinkedResource(path + "icon-clock.png");
            //imgclock.ContentId = "icon-clock";
            //htmlView.LinkedResources.Add(imgclock);

            //LinkedResource imgcar = new LinkedResource(path + "car.png");
            //imgcar.ContentId = "car";
            //htmlView.LinkedResources.Add(imgcar);

            mensaje.AlternateViews.Add(htmlView);

            mensaje.Subject = asuntop;
            mensaje.Body = stCuerpoHTML;
            mensaje.To.Add(destinop);

            mensaje.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient();
            smtp.Send(mensaje);

            return Json("ok");
        }


    }
}