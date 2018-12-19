using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Entidades;
using Infraestrutura.Data.SqlServer;

namespace Dominio.Repositorio
{
    public class General_BL
    {
        General_DAL dal = new General_DAL();

        //***************************************************************************************************************************************
        //Inicio *******************************************************************************************************************
        //***************************************************************************************************************************************

        //Login
        public List<LoginEntity> Login_BL(string usuario, string password)
        {
            return dal.Login_DAL(usuario, password);
        }

        public List<RecuperaCuentaEntity> Recupera_BL(string emailusuariop, int idpreguntap, string respuestaPregp)
        {
            return dal.Recupera_DAL(emailusuariop, idpreguntap, respuestaPregp);
        }

        //Validar Usuario
        public List<RespuestaPostEntity> ValidarUsuario_BL(string nomusuario)
        {
            return dal.ValidarUsuario_DAL(nomusuario);
        }

        //Validar Correo
        public List<RespuestaPostEntity> ValidarCorreo_BL(string emailusuario)
        {
            return dal.ValidarCorreo_DAL(emailusuario);
        }

        //Registrar Usuario
        public List<RespuestaPostEntity> RegistrarUsuario_BL(string nomusuario, string passusuario, string emailusuario,
            int idpregunta, string respuestaPreg, int flagref, string emailref)
        {
            return dal.RegistrarUsuario_DAL(nomusuario, passusuario, emailusuario,
            idpregunta, respuestaPreg, flagref, emailref);
        }

        //Listar Paises
        public List<PaisesEntity> ListarPaises_BL()
        {
            return dal.ListarPaises_DAL();
        }

        //Listar Nacionalidad
        public List<PaisesEntity> ListarNacionalidad_BL()
        {
            return dal.ListarNacionalidad_DAL();
        }

        //Detalle Usuario
        public List<DetalleUsuarioEntity> DetalleUsuario_BL(int idusuario)
        {
            return dal.DetalleUsuario_DAL(idusuario);
        }

        //======actualizar detalle usuario
        public List<RespuestaPostEntity> ActualizarUsuario_BL(
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
            return dal.ActualizarUsuario_DAL(
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
        }
        //===actualizar resumen =========
        public List<RespuestaPostEntity> ActualizarResumenUsuario_BL(
             int idusuario,
            string ResumenExperiencia

            )
        {
            return dal.ActualizarResumenUsuario_DAL(
               idusuario,
             ResumenExperiencia

                );
        }
        //===actualizar informacion academico =========
        public List<RespuestaPostEntity> ActualizarInfoAcademico_BL(
            int idusuario,
            int IdNivelEstudio,
            string EspecifNivelEstudio,
            string SeminarioCurso,
            string Instituto,
            string Fecha,
            string Duración

            )
        {
            return dal.ActualizarInfoAcademico_DAL(
               idusuario,
             IdNivelEstudio,
             EspecifNivelEstudio,
             SeminarioCurso,
             Instituto,
             Fecha,
             Duración

                );
        }
        //===actualizar Experiencia Laboral =========
        public List<RespuestaPostEntity> ActualizarExpLaboral_BL(
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
            return dal.ActualizarExpLaboral_DAL(
              idusuario,
             ExperienciaLaboral,
             TiempodeExperiencia,
             SituaciónLaboralActual,
             Aespecdestre01,
             Aespecdestre02,
             Aespecdestre03,
             Aespecdestre04

                );
        }
        //===actualizar disponibilidad =========
        public List<RespuestaPostEntity> ActualizarDisponibilidad_BL(
            int idusuario,
            int Disponibilidad

            )
        {
            return dal.ActualizarDisponibilidad_DAL(
                idusuario,
            Disponibilidad

                );
        }
        //Listar Categoria
        public List<LCategoria> ListarCategoria_BL()
        {
            return dal.ListarCategoria_DAL();
        }
        //listar Subcategoria
        public List<LSCategoria> ListarSubCategoria_BL(int idcategoria)
        {
            return dal.ListarSubCategoria_DAL(idcategoria);
        }
        //Agregar Categoria
        public List<RespuestaPostEntity> AgregarCategoria_BL(int idusuario, int idcategoria, int subcategoria)
        {
            return dal.AgregarCategoria_DAL(idusuario, idcategoria, subcategoria);
        }
        //Listar Categoria
        public List<Categoria> ListaCategoria_BL(int idusuario)
        {
            return dal.ListaCategoria_DAL(idusuario);
        }
        //Eliminar Categoria
        public List<RespuestaPostEntity> EliminarCategoria_BL(int idprofesion)
        {
            return dal.EliminarCategoria_DAL(idprofesion);
        }
        //Agregar Experiencia
        public List<RespuestaPostEntity> AgregarExperiencia_BL(int idusuario, string descrippuesto, string titulo, string desde, string hasta, string nomempresa, string actividadempresa, int idpais, string ciudad, string desemlogros)
        {
            return dal.AgregarExperiencia_DAL(idusuario, descrippuesto, titulo, desde, hasta, nomempresa, actividadempresa, idpais, ciudad, desemlogros);
        }
        //Listar Experiencia
        public List<LExperiencia> ListarExperiencia_BL(int idusuario)
        {
            return dal.ListarExperiencia_DAL(idusuario);
        }
        //Eliminar Programa
        public List<RespuestaPostEntity> EliminarExperiencia_BL(int idexperiencia)
        {
            return dal.EliminarExperiencia_DAL(idexperiencia);
        }
        //Agregar Maquinaria
        public List<RespuestaPostEntity> AgregarMaquinaria_BL(int idusuario, string nom_maquinaria, int idnivel)
        {
            return dal.AgregarMaquinaria_DAL(idusuario, nom_maquinaria, idnivel);
        }
        //Listar Maquinaria
        public List<LMaquinaria> ListarMaquinario_BL(int idusuario)
        {
            return dal.ListarMaquinaria_DAL(idusuario);
        }
        //Eliminar Maquinaria
        public List<RespuestaPostEntity> EliminarMaquinaria_BL(int idmaquinaria)
        {
            return dal.EliminarMaquinaria_DAL(idmaquinaria);
        }
        //Agregar Programa
        public List<RespuestaPostEntity> AgregarPrograma_BL(int idusuario, string nomprograma, int idnivel)
        {
            return dal.AgregarPrograma_DAL(idusuario, nomprograma, idnivel);
        }

        //Eliminar Programa
        public List<RespuestaPostEntity> EliminarPrograma_BL(int iddominiosoft)
        {
            return dal.EliminarPrograma_DAL(iddominiosoft);
        }

        //Listar Programa
        public List<DSoftwareEntity> ListarPrograma_BL(int idusuario)
        {
            return dal.ListarPrograma_DAL(idusuario);
        }


        //Agregar Idioma
        public List<RespuestaPostEntity> AgregarIdioma_BL(int idusuario, string nomidioma, int nivelhablado,
            int nivelescrito, int niveltraduccion)
        {
            return dal.AgregarIdioma_DAL(idusuario, nomidioma, nivelhablado,
            nivelescrito, niveltraduccion);
        }

        //Eliminar Idioma
        public List<RespuestaPostEntity> EliminarIdioma_BL(int ididiomausu)
        {
            return dal.EliminarIdioma_DAL(ididiomausu);
        }

        //Listar Idioma
        public List<DIdiomaEntity> ListarIdioma_BL(int idusuario)
        {
            return dal.ListarIdioma_DAL(idusuario);
        }

        //Agregar Inst. Academico
        public List<RespuestaPostEntity> AgregarInstitucion_BL(int idusuario, int idestudio, string nominstitucion, int estudioculminado, string titulo)
        {
            return dal.AgregarInstitucion_DAL(idusuario, idestudio, nominstitucion, estudioculminado, titulo);
        }

        //Eliminar Inst. Academico
        public List<RespuestaPostEntity> EliminarInstitucion_BL(int idacademico)
        {
            return dal.EliminarInstitucion_DAL(idacademico);
        }

        //Listar Inst. Academico
        public List<IAcademicoEntity> ListarInstitucion_BL(int idusuario)
        {
            return dal.ListarInstitucion_DAL(idusuario);
        }

        //Listar Candidato
        public List<LCandidato> ListarCandidatos_BL(int Profesion, int Subprofesion, int Tipo, int Nacionalidad, int Sexo)
        {
            return dal.ListarCandidatos_DAL(Profesion, Subprofesion, Tipo, Nacionalidad, Sexo);
        }

        public List<LCandidatos> ListarBuscarCandidatos_BL(int Profesion, int Subprofesion, int Nacionalidad, int Sexo, int idtipopostulante, string flag_discap, int NroDePagina, int RegPorPag)
        {
            return dal.ListarBuscarCandidatos_DAL(Profesion, Subprofesion, Nacionalidad, Sexo, idtipopostulante, flag_discap, NroDePagina, RegPorPag);
        }
        public List<LCandidatos> RCandidatosPeridoCategoria(int Profesion, int Subprofesion, string dfechaIni, string dfechaFin)
        {
            return dal.RCandidatosPeridoCategoria(Profesion, Subprofesion, dfechaIni, dfechaFin);
        }
        public List<CantidadEntity> RCantidadCandidatosPeridoTiempo(string dfechaIni, string dfechaFin)
        {
            return dal.RCantidadCandidatosPeridoTiempo(dfechaIni, dfechaFin);
        }
        public List<PagosEntity> RPagosPeridoTiempo(string dfechaIni, string dfechaFin)
        {
            return dal.RPagosPeridoTiempo(dfechaIni, dfechaFin);
        }
        public List<RCuentas> RCuentas(int filtro)
        {
            return dal.RCuentas(filtro);
        }
        public List<RespuestaPostEntity> validaremailref_BL(string emailusuario)
        {
            return dal.validaremailref_DAL(emailusuario);
        }

    }
}
