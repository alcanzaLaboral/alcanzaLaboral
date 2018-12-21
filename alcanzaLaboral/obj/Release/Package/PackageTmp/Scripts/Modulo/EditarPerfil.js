var idusuarioPost;
var adminPost = 0;

window.onload = function () {

    idusuarioPost = sessionStorage.getItem("idusuario");
    adminPost = sessionStorage.getItem("administrador");
    $("#customRadio1").prop('checked', true);
    Spinner_ListarPaises();
    Spinner_ListarNacionalidad();
    Spinner_ListarCategoria();
    Spinner_ListarSubCategoria(1);
    DetalleUsuario(idusuarioPost);
    ListarDSoftware();
    ListarCategoria();
    ListarExperiencia();
    Spinner_ListarPaisesExp();
    ListarMaquinaria();
    ListarIdioma();
    ListarInstitucion();
    mostrarFotoPerfil();

    $("select[name=sp_categoria]").change(function () {
        idcategoria = $("#sp_categoria").val();
        Spinner_ListarSubCategoria(idcategoria);


    });

    
    if (adminPost == 1) {
        $("#admin_li").removeClass("Ocultar");
    } else {
        $("#admin_li").addClass("Ocultar");
    }
    
    
}
//Residencia
function Spinner_ListarPaises() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarPaises",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_ListarPaises,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });


}

function llenarSpinner_ListarPaises(data) {
    var selectAgregar = $("#sp_ListarPais");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].idpais + "'>" + data[i].nompais + "</option>");
    }

}

//Nacionalidad
function Spinner_ListarNacionalidad() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarNacionalidad",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_Nacionalidad,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });


}

function llenarSpinner_Nacionalidad(data) {
    var selectAgregar = $("#sp_Nacionalidad");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].idpais + "'>" + data[i].nompais + "</option>");
    }

}

//detalle usuario
function DetalleUsuario(id_usuario) {
    
    $.ajax({
        type: "POST",
        url: "../Services/DetalleUsuario",
        data: "{idusuario:'" + id_usuario + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: detalleUsuarioSucces,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

    
}

function detalleUsuarioSucces(data) {

    

    for (i = 0; i < data.length; i++) {
        Nombres = data[0].Nombres;
        ApePaterno = data[0].ApePaterno;
        ApeMaterno = data[0].ApeMaterno;
        Nacimiento = data[0].Nacimiento;
        Nacionalidad = data[0].Nacionalidad;
        Sexo = data[0].Sexo;
        Residencia = data[0].Residencia;
        Ciudad = data[0].Ciudad;
        Fijo = data[0].Fijo;
        Celular1 = data[0].Celular1;
        Celular2 = data[0].Celular2;
        Resumen = data[0].Resumen;
        NivEstudio = data[0].NivEstudio;
        EspEstudio = data[0].EspEstudio;
        Seminario = data[0].Seminario;
        Instituto = data[0].Instituto;
        Fecha = data[0].Fecha;
        Duración = data[0].Duración;
        Experiencia = data[0].Experiencia;
        TExperiencia = data[0].TExperiencia;
        SituacionAct = data[0].SituacionAct;
        Experiencia1 = data[0].Experiencia1;
        Experiencia2 = data[0].Experiencia2;
        Experiencia3 = data[0].Experiencia3;
        Experiencia4 = data[0].Experiencia4;
        Disponibilidad = data[0].Disponibilidad;
        idtipopostulante = data[0].idtipopostulante;

        tipo_doc = data[0].tipo_doc;
        nro_doc = data[0].nro_doc;
        emailusuario = data[0].emailusuario;

        fechacreacion = data[0].fechacreacion;
        finsubscrip = data[0].finsubscrip;
       
    }


        $("#nombres").val(Nombres);
        $("#apepaterno").val(ApePaterno);
        $("#apematerno").val(ApeMaterno);
        $("#fec_nacimiento").val(Nacimiento);
        $("#sp_Nacionalidad").val(Nacionalidad);
        $("#sp_genero").val(Sexo);
        $("#sp_ListarPais").val(Residencia);
        $("#ciudad").val(Ciudad);
        $("#fijo").val(Fijo);
        $("#celular1").val(Celular1);
        $("#celular2").val(Celular2);
        $("#resumen_porf").val(Resumen);
        $("#sp_NivelEstudio").val(NivEstudio);
        $("#espnivel").val(EspEstudio);
        $("#descripcion").val(Seminario);
        $("#intituto").val(Instituto);
        $("#fecha").val(Fecha);
        $("#duracion").val(Duración);
        $("#sp_Experiencia").val(Experiencia);
        $("#tiempoexp").val(TExperiencia);
        $("#sp_situacion").val(SituacionAct);
        $("#pri_experiencia").val(Experiencia1);
        $("#seg_experiencia").val(Experiencia2);
        $("#terc_experiencia").val(Experiencia3);
        $("#cuart_experiencia").val(Experiencia4);
        $("#sp_disponibilidad").val(Disponibilidad);

        $("#sp_TipoDoc").val(tipo_doc);
        $("#nrodocident").val(nro_doc);
        $("#correoelec").val(emailusuario);

        if (idtipopostulante == 1) {
            $("#customRadio1").prop('checked', true);
        } else if (idtipopostulante == 2) {
            $("#customRadio2").prop('checked', true);
        } else if (idtipopostulante == 3) {
            $("#customRadio3").prop('checked', true);
        }

        document.getElementById('inisubs_id').innerHTML = fechacreacion;
        document.getElementById('finsubs_id').innerHTML = finsubscrip;
       

    
}

//==========Habilitacion de Campos==================================

function HabilitarCampos_Onclick() {

    $("#nombres").prop("disabled", false);
    $("#apepaterno").prop("disabled", false);
    $("#apematerno").prop("disabled", false);
    $("#fec_nacimiento").prop("disabled", false);
    $("#sp_Nacionalidad").prop("disabled", false);
    $("#sp_genero").prop("disabled", false);
    $("#sp_ListarPais").prop("disabled", false);
    $("#ciudad").prop("disabled", false);
    $("#fijo").prop("disabled", false);
    $("#celular1").prop("disabled", false);
    $("#celular2").prop("disabled", false);
    $("#sp_TipoDoc").prop("disabled", false);
    $("#nrodocident").prop("disabled", false);
    $("#correoelec").prop("disabled", false);

}

function HabilitarResumen_onclick() {
    $("#resumen_porf").prop("disabled", false);
}

function HabilitarInfoAcademica_Onclick() {
    $("#sp_NivelEstudio").prop("disabled", false);
    $("#espnivel").prop("disabled", false);
    $("#descripcion").prop("disabled", false);
    $("#intituto").prop("disabled", false);
    $("#fecha").prop("disabled", false);
    $("#duracion").prop("disabled", false);
}

function HabilitarExperienciLaboral_Onclick() {
    $("#sp_Experiencia").prop("disabled", false);
    $("#tiempoexp").prop("disabled", false);
    $("#sp_situacion").prop("disabled", false);
    $("#pri_experiencia").prop("disabled", false);
    $("#seg_experiencia").prop("disabled", false);
    $("#terc_experiencia").prop("disabled", false);
    $("#cuart_experiencia").prop("disabled", false);
}

function HabilitarInfoAdicional_Onclick() {
    $("#sp_disponibilidad").prop("disabled", false);
}

//==================Fin Habilitacion======================================

//=========Actualizar Usuario Parte1

function ActualizarUsuario_onclick() {

    var idusuario = idusuarioPost;
    var nombres = $("#nombres").val();
    var apepaterno = $("#apepaterno").val();
    var apematerno = $("#apematerno").val();
    var fec_nacimiento1 = $("#fec_nacimiento").val();
    var sp_Nacionalidad = $("#sp_Nacionalidad").val();
    var sp_genero = $("#sp_genero").val();
    var sp_ListarPais = $("#sp_ListarPais").val();
    var ciudad = $("#ciudad").val();
    var fijo = $("#fijo").val();
    var celular1 = $("#celular1").val();
    var celular2 = $("#celular2").val();

    var tipo_doc = $("#sp_TipoDoc").val();
    var nro_doc = $("#nrodocident").val();
    var emailusuario = $("#correoelec").val();
   

    fec_nacimiento2 = fec_nacimiento1.toString();


    if (document.getElementById('customRadio1').checked) {
        idtipopostulante = 1;
    } else if (document.getElementById('customRadio2').checked) {
        idtipopostulante = 2;
    } else if (document.getElementById('customRadio3').checked) {
        idtipopostulante = 3;
    }
    


    $.ajax({
        type: "POST",
        url: "../Services/ActualizarUsuario",
        data: "{idusuario:'" + parseInt(idusuario) + "', PriNombre:'" + nombres + "', SegNombre:'" + nombres + "', ApePaterno:'" + apepaterno + "', ApeMaterno:'" + apematerno + "', FecNacimiento:'" + fec_nacimiento2 + "', idNacionalidad:'" + parseInt(sp_Nacionalidad) + "', genero:'" + parseInt(sp_genero) + "', idPaisresidencia:'" + parseInt(sp_ListarPais) + "', Ciudad:'" + ciudad + "', Telfijo:'" + fijo + "', TelCelular1:'" + celular1
            + "', TelCelular2:'" + celular2 + "', idtipopostulante:'" + parseInt(idtipopostulante) + "', tipo_doc:'" + parseInt(tipo_doc) + "', nro_doc:'" + nro_doc + "', emailusuario:'" + emailusuario + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ResponseUpdateSucces,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });

}

function ResponseUpdateSucces(data) {

    var respuesta;

    for (i = 0; i < data.length; i++) {
        respuesta = data[i].respuesta;
    }

    if (respuesta == "true") {
        alert_succes("Se registró satisfactoriamente");

        $("#nombres").prop("disabled", true);
        $("#apepaterno").prop("disabled", true);
        $("#apematerno").prop("disabled", true);
        $("#fec_nacimiento").prop("disabled", true);
        $("#sp_Nacionalidad").prop("disabled", true);
        $("#sp_genero").prop("disabled", true);
        $("#sp_ListarPais").prop("disabled", true);
        $("#ciudad").prop("disabled", true);
        $("#fijo").prop("disabled", true);
        $("#celular1").prop("disabled", true);
        $("#celular2").prop("disabled", true);

        

    } else {
        alert_error("Lo sentimos, ocurrió un problema al momento de actulizar los datos");
    }

}

//=========Actualizar Resumen Usuario
function ActualizarResumenUsuario_onclick() {

    var idusuario = idusuarioPost;
    var resumen_porf = $("#resumen_porf").val();


    $.ajax({
        type: "POST",
        url: "../Services/ActualizarResumenUsuario",
        data: "{idusuario:'" + parseInt(idusuario)  + "', ResumenExperiencia:'" + resumen_porf  + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ResponseUpdateResumenSucces,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });

}

function ResponseUpdateResumenSucces(data) {
    //alert("eee");

    var respuesta;

    for (i = 0; i < data.length; i++) {
        respuesta = data[i].respuesta;
    }

    if (respuesta == "true") {
        alert_succes("Se registró satisfactoriamente");

        $("#resumen_porf").prop("disabled", true);

    } else {
        alert_error("Lo sentimos, ocurrió un problema al momento de actulizar los datos");
    }

}
//=========Actualizar Informacion Academico
function ActualizarInfoAcademico_onclick() {

    var idusuario = idusuarioPost;
    var sp_NivelEstudio = $("#sp_NivelEstudio").val();
    var espnivel = $("#espnivel").val();
    var descripcion = $("#descripcion").val();
    var intituto = $("#intituto").val();
    var fecha1 = $("#fecha").val();
    var duracion = $("#duracion").val();

    fecha2 = fecha1.toString();

    $.ajax({
        type: "POST",
        url: "../Services/ActualizarInfoAcademico",
        data: "{idusuario:'" + parseInt(idusuario) + "', IdNivelEstudio:'" + sp_NivelEstudio +
             "', EspecifNivelEstudio:'" + espnivel +
             "', SeminarioCurso:'" + descripcion +
             "', Instituto:'" + intituto +
             "', Fecha:'" + fecha2 +
             "', Duración:'" + duracion + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ResponseUpdateInfoAcademicoSucces,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });

}

function ResponseUpdateInfoAcademicoSucces(data) {
    //alert("eee");

    var respuesta;

    for (i = 0; i < data.length; i++) {
        respuesta = data[i].respuesta;
    }

    if (respuesta == "true") {
        alert_succes("Se registró satisfactoriamente");

        $("#sp_NivelEstudio").prop("disabled", true);
        $("#espnivel").prop("disabled", true);
        $("#descripcion").prop("disabled", true);
        $("#intituto").prop("disabled", true);
        $("#fecha").prop("disabled", true);
        $("#duracion").prop("disabled", true);

    } else {
        alert_error("Lo sentimos, ocurrió un problema al momento de actulizar los datos");
    }

}
//=========Actualizar Experiencia Laboral
function ActualizarExpLaboral_onclick() {

    var idusuario = idusuarioPost;
    var sp_Experiencia = $("#sp_Experiencia").val();
    var tiempoexp = $("#tiempoexp").val();
    var sp_situacion = $("#sp_situacion").val();
    var pri_experiencia = $("#pri_experiencia").val();
    var seg_experiencia = $("#seg_experiencia").val();
    var terc_experiencia = $("#terc_experiencia").val();
    var cuart_experiencia = $("#cuart_experiencia").val();


    $.ajax({
        type: "POST",
        url: "../Services/ActualizarExpeLaboral",
        data: "{idusuario:'" + parseInt(idusuario) + "', ExperienciaLaboral:'" + sp_Experiencia +
             "', TiempodeExperiencia:'" + tiempoexp +
             "', SituaciónLaboralActual:'" + sp_situacion +
             "', Aespecdestre01:'" + pri_experiencia +
             "', Aespecdestre02:'" + seg_experiencia +
             "', Aespecdestre03:'" + terc_experiencia +
             "', Aespecdestre04:'" + cuart_experiencia + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ResponseUpdateExpLaboralSucces,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });

}

function ResponseUpdateExpLaboralSucces(data) {
    //alert("eee");

    var respuesta;

    for (i = 0; i < data.length; i++) {
        respuesta = data[i].respuesta;
    }

    if (respuesta == "true") {
        alert_succes("Se registró satisfactoriamente");

        $("#sp_Experiencia").prop("disabled", true);
        $("#tiempoexp").prop("disabled", true);
        $("#sp_situacion").prop("disabled", true);
        $("#pri_experiencia").prop("disabled", true);
        $("#seg_experiencia").prop("disabled", true);
        $("#terc_experiencia").prop("disabled", true);
        $("#cuart_experiencia").prop("disabled", true);

    } else {
        alert_error("Lo sentimos, ocurrió un problema al momento de actulizar los datos");
    }

}
//=========Actualizar Disponibilidad
function ActualizarDisponibilidad_onclick() {

    var idusuario = idusuarioPost;
    var sp_disponibilidad = $("#sp_disponibilidad").val();


    $.ajax({
        type: "POST",
        url: "../Services/ActualizarDisponibilidad",
        data: "{idusuario:'" + parseInt(idusuario) + "', Disponibilidad:'" + sp_disponibilidad + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ResponseUpdateDisponibilidadSucces,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });

}

function ResponseUpdateDisponibilidadSucces(data) {
    //alert("eee");

    var respuesta;

    for (i = 0; i < data.length; i++) {
        respuesta = data[i].respuesta;
    }

    if (respuesta == "true") {
        alert_succes("Se registró satisfactoriamente");

        $("#sp_disponibilidad").prop("disabled", true);

    } else {
        alert_error("Lo sentimos, ocurrió un problema al momento de actulizar los datos");
    }

}

//Listar combo categoria 
function Spinner_ListarCategoria() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarCategoria",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_ListarCategoria,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });


}

function llenarSpinner_ListarCategoria(data) {
    var selectAgregar = $("#sp_categoria");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].idcategoria + "'>" + data[i].nomcategoria + "</option>");
    }

}

//Listar combo subcategoria 
function Spinner_ListarSubCategoria(idcategoria) {
    
    $.ajax({
        type: "POST",
        url: "../Services/ListarSubCategoria",
        data: "{idcategoria:'" + parseInt(idcategoria) + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_ListarSubCategoria,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });


}

function llenarSpinner_ListarSubCategoria(data) {
    var selectAgregar = $("#sp_subcategoria");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].idsubcategoria + "'>" + data[i].nomsubcategoria + "</option>");
    }

}
//Guardar Categoria
function btnCategoria_Onclick() {
    var idusuario = idusuarioPost;
    var sp_categoria = $("#sp_categoria").val();
    var sp_subcategoria = $("#sp_subcategoria").val();


        $.ajax({
            type: "POST",
            url: "../Services/AgregarCategoria",
            data: "{idusuario:'" + parseInt(idusuario) + "', idcategoria:'" + parseInt(sp_categoria) + "', subcategoria:'" + parseInt(sp_subcategoria) + "'}",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: GuardarCategoria,
            failure: function (response) {
                alert(response.d);
            },
            error: OnError
        });


}

function GuardarCategoria(data) {

    var respuesta;

    for (i = 0; i < data.length; i++) {
        respuesta = data[i].respuesta;
    }

    if (respuesta == "true") {
        alert_succes("Se Registró satisfactoriamente");
        ListarCategoria();
    } else {
        alert_error("Lo sentimos, ocurrió un problema al momento de registrar los datos");
    }


    LimpiarCajas_Categoria();

}

function LimpiarCajas_Categoria() {
    Spinner_ListarCategoria();
    Spinner_ListarSubCategoria(1);
}
//Listar Categoria
function ListarCategoria() {

    idusuario = idusuarioPost;

    $.ajax({
        type: "POST",
        url: "../Services/ListaCategoria",
        data: "{idusuario:'" + parseInt(idusuario) + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarCategoriaBody,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });
}

function ListarCategoriaBody(data) {

    var tbody = $("#bodyCategoria");
    tbody.empty();

    for (i = 0; i < data.length; i++) {


        //fun_editar = 'EditarBanco("' + data.d[i].cod_banco + '", "' + data.d[i].desc_banco + '", "' + data.d[i].acro_banco + '", "' + data.d[i].desc_breve_banco + '", "' + data.d[i].FEC_REG + '", "' + data.d[i].USU_REG + '", "' + data.d[i].FEC_UPD + '", "' + data.d[i].USU_UPD + '")';
        //fun_detalle = 'DetalleBanco("' + data.d[i].cod_banco + '", "' + data.d[i].desc_banco + '", "' + data.d[i].acro_banco + '", "' + data.d[i].desc_breve_banco + '", "' + data.d[i].FEC_REG + '", "' + data.d[i].USU_REG + '", "' + data.d[i].FEC_UPD + '", "' + data.d[i].USU_UPD + '")';
        fun_eliminar = 'EliminarCategoria("' + data[i].idprofesion + '")';

        tbody.append("<tr>" +
            "<td>" + data[i].categoria + "</td>" +
            "<td>" + data[i].subcategoria + "</td>" +
            "<td><a href='#' onclick = '" + fun_eliminar + "'><span class='badge badge-categoria' id=btnDelete_" + i + ">Eliminar</span></a></td>" +
            "<td><a href='#'><span class='badge badge-categoria' id=btnDelete_" + i + ">comprar</span></a></td>" +
            "</tr>");
    }

}
//Eliminar Categoria
function EliminarCategoria(idprofesion) {

    $.ajax({
        type: "POST",
        url: "../Services/EliminarCategoria",
        data: "{idprofesion:'" + parseInt(idprofesion) + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarCategoria,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });
}
//Paises experiencia
function Spinner_ListarPaisesExp() {

    $.ajax({
        type: "POST",
        url: "../Services/ListarPaises",
        data: "",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: llenarSpinner_ListarPaisesExp,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });


}

function llenarSpinner_ListarPaisesExp(data) {
    var selectAgregar = $("#sp_pais_reg");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].idpais + "'>" + data[i].nompais + "</option>");
    }

}
//Guardar Experiencia
function btnExperiencia_Onclick() {
    var idusuario = idusuarioPost;
    var descripcion_reg = $("#descripcion_reg").val();
    var titulo_reg = $("#titulo_reg").val();
    var fecdesde_reg1 = $("#fecdesde_reg").val();
    var fechasta_reg1 = $("#fechasta_reg").val();
    var empresa_reg = $("#empresa_reg").val();
    var actempresa_reg = $("#actempresa_reg").val();
    var sp_pais_reg = $("#sp_pais_reg").val();
    var ciudad_reg = $("#ciudad_reg").val();
    var desemp_reg = $("#desemp_reg").val();

    fecdesde_reg2 = fecdesde_reg1.toString();
    fechasta_reg2 = fechasta_reg1.toString();

    $.ajax({
        type: "POST",
        url: "../Services/AgregarExperiencia",
        data: "{idusuario:'" + parseInt(idusuario) + "', descrippuesto:'" + descripcion_reg + "', titulo:'" + titulo_reg
            + "', desde:'" + fecdesde_reg2
            + "', hasta:'" + fechasta_reg2
            + "', nomempresa:'" + empresa_reg
            + "', actividadempresa:'" + actempresa_reg
            + "', idpais:'" + parseInt(sp_pais_reg)
            + "', ciudad:'" + ciudad_reg
            + "', desemlogros:'" + desemp_reg +"'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: GuardarExperiencia,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });


}

function GuardarExperiencia(data) {

    var respuesta;

    for (i = 0; i < data.length; i++) {
        respuesta = data[i].respuesta;
    }

    if (respuesta == "true") {
        alert_succes("Se Registró satisfactoriamente");
        ListarExperiencia();
    } else {
        alert_error("Lo sentimos, ocurrió un problema al momento de registrar los datos");
    }


    LimpiarCajas_Experiencia();

}

function LimpiarCajas_Experiencia() {
    $("#descripcion_reg").val("");
    $("#titulo_reg").val("");
    $("#fecdesde_reg").val("");
    $("#fechasta_reg").val("");
    $("#empresa_reg").val("");
    $("#actempresa_reg").val("");
    $("#sp_pais_reg").val(1);
    $("#ciudad_reg").val("");
    $("#desemp_reg").val("");
}
//Listar Experiencia
function ListarExperiencia() {

    idusuario = idusuarioPost;

    $.ajax({
        type: "POST",
        url: "../Services/ListarExperiencia",
        data: "{idusuario:'" + parseInt(idusuario) + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarExperienciaBody,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });
}

function ListarExperienciaBody(data) {

    var tbody = $("#bodyExperiencia");
    tbody.empty();

    for (i = 0; i < data.length; i++) {


        //fun_editar = 'EditarBanco("' + data.d[i].cod_banco + '", "' + data.d[i].desc_banco + '", "' + data.d[i].acro_banco + '", "' + data.d[i].desc_breve_banco + '", "' + data.d[i].FEC_REG + '", "' + data.d[i].USU_REG + '", "' + data.d[i].FEC_UPD + '", "' + data.d[i].USU_UPD + '")';
        //fun_detalle = 'DetalleBanco("' + data.d[i].cod_banco + '", "' + data.d[i].desc_banco + '", "' + data.d[i].acro_banco + '", "' + data.d[i].desc_breve_banco + '", "' + data.d[i].FEC_REG + '", "' + data.d[i].USU_REG + '", "' + data.d[i].FEC_UPD + '", "' + data.d[i].USU_UPD + '")';
        fun_eliminar = 'EliminarExperiencia("' + data[i].idexperiencia + '")';

        tbody.append("<tr>" +
            "<td>" + data[i].descripcion + "</td>" +
            "<td>" + data[i].titulo + "</td>" +
            "<td>" + data[i].empresa + "</td>" +
            "<td><a href='#' onclick = '" + fun_eliminar + "'><span class='badge badge-categoria' id=btnDelete_" + i + ">Eliminar</span></a></td>" +
            "</tr>");
    }

}
//Eliminar Experiencia
function EliminarExperiencia(idexperiencia) {

    $.ajax({
        type: "POST",
        url: "../Services/EliminarExperiencia",
        data: "{idexperiencia:'" + parseInt(idexperiencia) + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarExperiencia,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });
}
//Guardar Maquinaria
function btnMaquinaria_Onclick() {
    var idusuario = idusuarioPost;
    var nom_maquinaria = $("#nom_maquinaria").val();
    var sp_nivmaquinaria = $("#sp_nivmaquinaria").val();



    if (nom_maquinaria.length < 1) {
        alert_warning("Debe Ingresar el nombre de maquinaria");
    } else {

        $.ajax({
            type: "POST",
            url: "../Services/AgregarMaquinaria",
            data: "{idusuario:'" + parseInt(idusuario) + "', nom_maquinaria:'" + nom_maquinaria + "', idnivel:'" + parseInt(sp_nivmaquinaria) + "'}",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: GuardarMaquinaria,
            failure: function (response) {
                alert(response.d);
            },
            error: OnError
        });


    }


}

function GuardarMaquinaria(data) {

    var respuesta;

    for (i = 0; i < data.length; i++) {
        respuesta = data[i].respuesta;
    }

    if (respuesta == "true") {
        alert_succes("Se Registró satisfactoriamente");
        ListarMaquinaria();
    } else {
        alert_error("Lo sentimos, ocurrió un problema al momento de registrar los datos");
    }


    LimpiarCajas_Maquinaria();

}

function LimpiarCajas_Maquinaria() {
    $("#nom_maquinaria").val("");
    $("#sp_nivmaquinaria").val(1);
}
//Listar Maquinaria
function ListarMaquinaria() {

    idusuario = idusuarioPost;

    $.ajax({
        type: "POST",
        url: "../Services/ListarMaquinaria",
        data: "{idusuario:'" + parseInt(idusuario) + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarMaquinariaBody,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });
}

function ListarMaquinariaBody(data) {

    var tbody = $("#bodyMaquinaria");
    tbody.empty();

    for (i = 0; i < data.length; i++) {

        var nivel = data[i].idnivel;
        var descripcion = "";

        if (nivel == 1) {
            descripcion = "Inicial";
        } else if (nivel == 2) {
            descripcion = "Medio";
        } else if (nivel == 3) {
            descripcion = "Experto";
        }

        //fun_editar = 'EditarBanco("' + data.d[i].cod_banco + '", "' + data.d[i].desc_banco + '", "' + data.d[i].acro_banco + '", "' + data.d[i].desc_breve_banco + '", "' + data.d[i].FEC_REG + '", "' + data.d[i].USU_REG + '", "' + data.d[i].FEC_UPD + '", "' + data.d[i].USU_UPD + '")';
        //fun_detalle = 'DetalleBanco("' + data.d[i].cod_banco + '", "' + data.d[i].desc_banco + '", "' + data.d[i].acro_banco + '", "' + data.d[i].desc_breve_banco + '", "' + data.d[i].FEC_REG + '", "' + data.d[i].USU_REG + '", "' + data.d[i].FEC_UPD + '", "' + data.d[i].USU_UPD + '")';
        fun_eliminar = 'EliminarMaquinaria("' + data[i].idmaquinaria + '")';

        tbody.append("<tr>" +
            "<td>" + data[i].nom_maquinaria + "</td>" +
            "<td>" + descripcion + "</td>" +
            "<td><a href='#' onclick = '" + fun_eliminar + "'><span class='badge badge-categoria' id=btnDelete_" + i + ">Eliminar</span></a></td>" +
            "</tr>");
    }

}
//Eliminar DSoftware
function EliminarMaquinaria(idmaquinaria) {

    $.ajax({
        type: "POST",
        url: "../Services/EliminarMaquinaria",
        data: "{idmaquinaria:'" + parseInt(idmaquinaria) + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarMaquinaria,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });
}

//Listar DSoftware
function ListarDSoftware() {

    idusuario = idusuarioPost;

    $.ajax({
        type: "POST",
        url: "../Services/ListarPrograma",
        data: "{idusuario:'" + parseInt(idusuario) + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarDSoftwareBody,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });
}

function ListarDSoftwareBody(data) {

    var tbody = $("#bodyDSoftware");
    tbody.empty();

    for (i = 0; i < data.length; i++) {

        var nivel = data[i].idnivel;
        var descripcion = "";

        if (nivel == 1) {
            descripcion = "Inicial";
        }else if(nivel == 2){
            descripcion = "Medio";
        }else if(nivel == 3){
            descripcion = "Experto";
        }

        //fun_editar = 'EditarBanco("' + data.d[i].cod_banco + '", "' + data.d[i].desc_banco + '", "' + data.d[i].acro_banco + '", "' + data.d[i].desc_breve_banco + '", "' + data.d[i].FEC_REG + '", "' + data.d[i].USU_REG + '", "' + data.d[i].FEC_UPD + '", "' + data.d[i].USU_UPD + '")';
        //fun_detalle = 'DetalleBanco("' + data.d[i].cod_banco + '", "' + data.d[i].desc_banco + '", "' + data.d[i].acro_banco + '", "' + data.d[i].desc_breve_banco + '", "' + data.d[i].FEC_REG + '", "' + data.d[i].USU_REG + '", "' + data.d[i].FEC_UPD + '", "' + data.d[i].USU_UPD + '")';
        fun_eliminar = 'EliminarDSoftware("' + data[i].iddominiosoft + '")';

        tbody.append("<tr>" +
            "<td>" + data[i].nomprograma + "</td>" +
            "<td>" + descripcion + "</td>" +            
            "<td><a href='#' onclick = '" + fun_eliminar + "'><span class='badge badge-categoria' id=btnDelete_" + i + ">Eliminar</span></a></td>" +
            "</tr>");
    }

}

//Eliminar DSoftware
function EliminarDSoftware(iddominiosoft) {

    $.ajax({
        type: "POST",
        url: "../Services/EliminarPrograma",
        data: "{iddominiosoft:'" + parseInt(iddominiosoft) + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarDSoftware,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });
}

//Guardar DSoftware
function btnDSoftware_Onclick() {
    var idusuario = idusuarioPost;
    var nomprograma_reg = $("#nomprograma_reg").val();
    var sp_nivelprograma = $("#sp_nivelprograma").val();

 

    if (nomprograma_reg.length < 1) {
        alert_warning("Debe Ingresar el nombre del programa");
    } else {

        $.ajax({
            type: "POST",
            url: "../Services/AgregarPrograma",
            data: "{idusuario:'" + parseInt(idusuario) + "', nomprograma:'" + nomprograma_reg + "', idnivel:'" + parseInt(sp_nivelprograma) + "'}",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: GuardarDSoftware,
            failure: function (response) {
                alert(response.d);
            },
            error: OnError
        });

       
    }

  
}

function GuardarDSoftware(data) {

    var respuesta;

    for (i = 0; i < data.length; i++) {
        respuesta = data[i].respuesta;
    }

    if (respuesta == "true") {
        alert_succes("Se Registró satisfactoriamente");
        ListarDSoftware();
    } else {
        alert_error("Lo sentimos, ocurrió un problema al momento de registrar los datos");
    }

   
    LimpiarCajas_DSoftware();

}

function LimpiarCajas_DSoftware(){
    $("#nomprograma_reg").val("");
    $("#sp_nivelprograma").val(1);
}

//Guardar Idioma
function btnDIdioma_Onclick() {
    var idusuario = idusuarioPost;
    var idioma_reg = $("#idioma_reg").val();
    var sp_ihablado = $("#sp_ihablado").val();
    var sp_iescrito = $("#sp_iescrito").val();
    var itraduccion = $("#itraduccion").val();



    if (idioma_reg.length < 1) {
        alert_warning("Debe Ingresar el nombre de Idioma");
    } else {

        $.ajax({
            type: "POST",
            url: "../Services/AgregarIdioma",
            data: "{idusuario:'" + parseInt(idusuario) + "', nomidioma:'" + idioma_reg + "', nivelhablado:'" + parseInt(sp_ihablado) + "', nivelescrito:'" + parseInt(sp_iescrito) + "', niveltraduccion:'" + parseInt(itraduccion) + "'}",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: GuardarIdioma,
            failure: function (response) {
                alert(response.d);
            },
            error: OnError
        });


    }


}

function GuardarIdioma(data) {

    var respuesta;

    for (i = 0; i < data.length; i++) {
        respuesta = data[i].respuesta;
    }

    if (respuesta == "true") {
        alert_succes("Se Registró satisfactoriamente");
        ListarIdioma();
    } else {
        alert_error("Lo sentimos, ocurrió un problema al momento de registrar los datos");
    }


    LimpiarCajas_Idioma();

}

function LimpiarCajas_Idioma() {
    $("#idioma_reg").val("");
    $("#sp_ihablado").val(1);
    $("#sp_iescrito").val(1);
    $("#itraduccion").val(1);
}

//Listar Idioma
function ListarIdioma() {

    idusuario = idusuarioPost;

    $.ajax({
        type: "POST",
        url: "../Services/ListarIdioma",
        data: "{idusuario:'" + parseInt(idusuario) + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarIdiomaBody,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });
}

function ListarIdiomaBody(data) {

    var tbody = $("#bodyIdioma");
    tbody.empty();

    for (i = 0; i < data.length; i++) {
        

        var nivelHablado = data[i].nivelhablado;
        var descripcion1 = "";

        if (nivelHablado == 1) {
            descripcion1 = "Inicial";
        } else if (nivelHablado == 2) {
            descripcion1 = "Medio";
        } else if (nivelHablado == 3) {
            descripcion1 = "Experto";
        }

        var nivelEscrito = data[i].nivelescrito;
        var descripcion2 = "";

        if (nivelEscrito == 1) {
            descripcion2 = "Inicial";
        } else if (nivelEscrito == 2) {
            descripcion2 = "Medio";
        } else if (nivelEscrito == 3) {
            descripcion2 = "Experto";
        }

        var nivelTraduccion = data[i].niveltraduccion;
        var descripcion3 = "";

        if (nivelTraduccion == 1) {
            descripcion3 = "Inicial";
        } else if (nivelTraduccion == 2) {
            descripcion3 = "Medio";
        } else if (nivelTraduccion == 3) {
            descripcion3 = "Experto";
        }
        //fun_editar = 'EditarBanco("' + data.d[i].cod_banco + '", "' + data.d[i].desc_banco + '", "' + data.d[i].acro_banco + '", "' + data.d[i].desc_breve_banco + '", "' + data.d[i].FEC_REG + '", "' + data.d[i].USU_REG + '", "' + data.d[i].FEC_UPD + '", "' + data.d[i].USU_UPD + '")';
        //fun_detalle = 'DetalleBanco("' + data.d[i].cod_banco + '", "' + data.d[i].desc_banco + '", "' + data.d[i].acro_banco + '", "' + data.d[i].desc_breve_banco + '", "' + data.d[i].FEC_REG + '", "' + data.d[i].USU_REG + '", "' + data.d[i].FEC_UPD + '", "' + data.d[i].USU_UPD + '")';
        fun_eliminar = 'EliminarIdioma("' + data[i].ididiomausu + '")';

        tbody.append("<tr>" +
            "<td>" + data[i].nomidioma + "</td>" +
            "<td>" + descripcion1 + "</td>" +
            "<td>" + descripcion2 + "</td>" +
            "<td>" + descripcion3 + "</td>" +
            "<td><a href='#' onclick = '" + fun_eliminar + "'><span class='badge badge-categoria' id=btnDelete_" + i + ">Eliminar</span></a></td>" +
            "</tr>");
    }

}
//Eliminar Idioma
function EliminarIdioma(ididiomausu) {

    $.ajax({
        type: "POST",
        url: "../Services/EliminarIdioma",
        data: "{ididiomausu:'" + parseInt(ididiomausu) + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarIdioma,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });
}

//Guardar Institucion
function btnIAcademico_Onclick() {
    var idusuario = idusuarioPost;
    var sp_tipEstudio = $("#sp_tipEstudio").val();
    var nomInstituto = $("#nomInstituto").val();
    var sp_culminado = $("#sp_culminado").val();
    var nomtitulo = $("#nomtitulo").val();



    if (nomInstituto.length < 1) {
        alert_warning("Debe Ingresar el nombre de la Institución");
    } else if (nomtitulo.length < 1) {
        alert_warning("Debe Ingresar el nombre del Título");
    } else {

        $.ajax({
            type: "POST",
            url: "../Services/AgregarInstitucion",
            data: "{idusuario:'" + parseInt(idusuario)
                + "', idestudio:'" + parseInt(sp_tipEstudio)
                + "', nominstitucion:'" + nomInstituto
                + "', estudioculminado:'" + parseInt(sp_culminado)
                + "', titulo:'" + nomtitulo + "'}",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: GuardarInstitucion,
            failure: function (response) {
                alert(response.d);
            },
            error: OnError
        });


    }


}

function GuardarInstitucion(data) {

    var respuesta;

    for (i = 0; i < data.length; i++) {
        respuesta = data[i].respuesta;
    }

    if (respuesta == "true") {
        alert_succes("Se Registró satisfactoriamente");
        ListarInstitucion();
    } else {
        alert_error("Lo sentimos, ocurrió un problema al momento de registrar los datos");
    }


    LimpiarCajas_Institucion();


}

function LimpiarCajas_Institucion() {
    $("#sp_tipEstudio").val(1);
    $("#nomInstituto").val("");
    $("#sp_culminado").val(1);
    $("#nomtitulo").val("");
}

//Listar Institucion
function ListarInstitucion() {

    idusuario = idusuarioPost;

    $.ajax({
        type: "POST",
        url: "../Services/ListarInstitucion",
        data: "{idusuario:'" + parseInt(idusuario) + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarInstitucionBody,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });
}

function ListarInstitucionBody(data) {

    var tbody = $("#bodyInstitucion");
    tbody.empty();

    for (i = 0; i < data.length; i++) {

        var nivel = data[i].estudioculminado;
        var descripcion = "";

        if (nivel == 1) {
            descripcion = "Sí";
        } else if (nivel == 2) {
            descripcion = "No";
        }

        var tipoInst = data[i].idestudio;
        var nomInstitucion = "";

        if (tipoInst == 1) {
            nomInstitucion = "Colegio";
        } else if (tipoInst == 2) {
            nomInstitucion = "Universidad";
        } else if (tipoInst == 3) {
            nomInstitucion = "Instituto";
        } else if (tipoInst == 4) {
            nomInstitucion = "Otro";
        }
        //fun_editar = 'EditarBanco("' + data.d[i].cod_banco + '", "' + data.d[i].desc_banco + '", "' + data.d[i].acro_banco + '", "' + data.d[i].desc_breve_banco + '", "' + data.d[i].FEC_REG + '", "' + data.d[i].USU_REG + '", "' + data.d[i].FEC_UPD + '", "' + data.d[i].USU_UPD + '")';
        //fun_detalle = 'DetalleBanco("' + data.d[i].cod_banco + '", "' + data.d[i].desc_banco + '", "' + data.d[i].acro_banco + '", "' + data.d[i].desc_breve_banco + '", "' + data.d[i].FEC_REG + '", "' + data.d[i].USU_REG + '", "' + data.d[i].FEC_UPD + '", "' + data.d[i].USU_UPD + '")';
        fun_eliminar = 'EliminarInstitucion("' + data[i].idacademico + '")';

        tbody.append("<tr>" +
            "<td>" + nomInstitucion + "</td>" +
            "<td>" + data[i].nominstitucion + "</td>" +
            "<td>" + descripcion + "</td>" +
            "<td><a href='#' onclick = '" + fun_eliminar + "'><span class='badge badge-categoria' id=btnDelete_" + i + ">Eliminar</span></a></td>" +
            "</tr>");
    }

}

//Eliminar Institucion
function EliminarInstitucion(idacademico) {

    $.ajax({
        type: "POST",
        url: "../Services/EliminarInstitucion",
        data: "{idacademico:'" + parseInt(idacademico) + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarDSoftware,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });
}

function GuardarFoto() {
    archivo = $('#myfile').val();

    if (archivo.length < 1) {
        alert_warning('Por favor seleccione un archivo');
    } else {
        var formData = new FormData();
        var file = $('#myfile')[0];
        var nombreImagen = idusuarioPost + ".jpg";
        formData.append('file', file.files[0], nombreImagen);

        $.ajax({
            url: '../api/fileUpload',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function (d) {
                alert_succes('La imagen fue guardada satisfactoriamente');                
            },
            error: function () {
                alert_error('Ocurrio un problema al guardar la imagen');
            }
        });
    }
}


function mostrarFotoPerfil() {
    //mostrarfoto_perfil
    var tbody = $("#mostrarfoto_perfil");
    tbody.empty();
    tbody.append("<img src='../documents/" + idusuarioPost + ".jpg' style='width: 200px;'>");

}

//Redireccionar:


function Inicio() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/Inicio";
}


function QuienesSomos() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/QuienesSomos";
}

function MisionYVision() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/MisionyVision";
}

function ConceptosBasicos() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/ConceptosBasicos";
}

function alcanzaYOtrosPortales() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/alcanzaYOtrosPortales";
}

function PorQueRegistrarse() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/PorQueRegistrarse";
}

function Beneficios() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/Beneficios";
}

function Tarifas() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/Tarifas";
}

function Contactenos() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/Contactenos";
}

function EditarPerfil() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/EditarPerfil";
}

function PerfilProfesional() {
    sessionStorage.setItem("idcandidato", idusuarioPost);
    window.open('../Inicio/PerfilProfesional', '_blank');
}

function ComoRegistrarse() {
    sessionStorage.setItem("idcandidato", idusuarioPost);
    window.location = "../Inicio/ComoRegistrarse";
}

function BuscarCandidatos() {
    sessionStorage.setItem("idcandidato", idusuarioPost);
    window.location = "../Inicio/BuscarCandidatos";
}

function TerminosCondiciones() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/TerminosCondiciones";
}

function Salir() {
    sessionStorage.setItem("idusuario", null);
    window.location = "../Inicio/Inicio";
}

function RCandidatosPeridoCategoria() {
    sessionStorage.setItem("idusuario", null);
    window.location = "../Inicio/RCandidatosPeridoCategoria";
}

function RCantidadCandidatosPeridoTiempo() {
    sessionStorage.setItem("idusuario", null);
    window.location = "../Inicio/RCantidadCandidatosPeridoTiempo";
}

function RMontoFacturadoPeriodoTiempo() {
    sessionStorage.setItem("idusuario", null);
    window.location = "../Inicio/RPagosPeridoTiempo";
}

function RCuentas() {
    sessionStorage.setItem("idusuario", null);
    window.location = "../Inicio/RCuentas";
}



//Error
function OnError() {
    alert("Error de conexion");
}