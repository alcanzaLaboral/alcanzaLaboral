
var idusuarioPost = 0;
var adminPost = 0;

window.onload = function () {

    idusuarioPost = sessionStorage.getItem("idusuario");
    adminPost = sessionStorage.getItem("administrador");
    if (idusuarioPost == null) {
        idusuarioPost = 0;
    }

    if (idusuarioPost > 0) {
        $("#miPerfil_li").removeClass("Ocultar");
        $("#siden_acceder").addClass("Ocultar");
        $("#siden_salir").removeClass("Ocultar");
        $("#socialBar_id").addClass("Ocultar");

    } else {
        $("#miPerfil_li").addClass("Ocultar");
        $("#siden_salir").addClass("Ocultar");
        $("#siden_acceder").removeClass("Ocultar");
        $("#socialBar_id").removeClass("Ocultar");
    }

    if (adminPost == 1) {
        $("#admin_li").removeClass("Ocultar");
    } else {
        $("#admin_li").addClass("Ocultar");
    }

    if (adminPost == 1) {
        $("#admin_li").removeClass("Ocultar");
    } else {
        $("#admin_li").addClass("Ocultar");
    }

    Spinner_ListarCategoria();
    Spinner_ListarSubCategoria(1);
    Spinner_ListarPaises();
    


    $("select[name=combo_cate]").change(function () {
        idcategoria = $("#combo_cate").val();
        Spinner_ListarSubCategoria(idcategoria);


    });    


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
    var selectAgregar = $("#combo_cate");
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
    var selectAgregar = $("#combo_subcate");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].idsubcategoria + "'>" + data[i].nomsubcategoria + "</option>");
    }

}


//pais
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
    var selectAgregar = $("#combo_nacionalidad");
    selectAgregar.empty();

    for (i = 0; i < data.length; i++) {
        selectAgregar.append("<option value='" + data[i].idpais + "'>" + data[i].nompais + "</option>");
    }

}

//ListarGrilla
function ListarGrilla() {
    //var Profesion = $("#combo_cate").val();
    //var Subprofesion = $("#combo_subcate").val();
    //var Nacionalidad = $("#combo_nacionalidad").val();
    //var Sexo = $("#sexo").val();
    

    //alert(Profesion);
    //alert(Subprofesion);
    //alert(Nacionalidad);
    //alert(Sexo);
    //alert(TipoCandidato_sp);
    

    //$.ajax({
    //    type: "POST",
    //    url: "../Services/ListarBuscarCandidatos",
    //    data: "{ Profesion:'" + 0 + "', Subprofesion:'" + 0 + "', Nacionalidad:'" + 0 + "', Sexo:'" + 0 + "', idtipopostulante:'" + 0 + "'}",
    //    dataType: "json",
    //    contentType: "application/json; charset=utf-8",
    //    success: ListarBody,
    //    failure: function (response) {
    //        alert(response.d);
    //    },
    //    error: OnError

    //});
}

function ListarBody(data) {

    var tbody = $("#BodyCandidatos");
    tbody.empty();

    for (i = 0; i < data.length; i++) {

        fun_ver = 'vercv("' + data[i].id + '")';
        fun_contactar = 'contactar("' + data[i].emailusuario + '","' + data[i].nombre + '")';

        tbody.append("<tr>" +
            "<td style='text-align:center'>" + data[i].nombre + "</td>" +
            "<td style='text-align:center'>" + data[i].profesion + "</td>" +
            "<td style='text-align:center'>" + data[i].especialidad + "</td>" +
            "<td style='text-align:center'>" + data[i].nacionalidad + "</td>" +
            "<td style='text-align:center'>" + data[i].sexo + "</td>" +
            "<td style='text-align:center'>" + data[i].edad + "</td>" +
            "<td style='text-align:center'><a href='#' onclick = '" + fun_ver + "'><span class='badge badge-categoria' id=btnDelete_" + i + ">Ver C.V</span></a></td>" +
            "<td style='text-align:center'><a href='#' onclick = '" + fun_contactar + "' data-toggle='modal' data-target='#contac_mod'><span class='badge badge-categoria' id=btn_Contactar" + i + ">Contactar</span></a></td>" +
            "</tr>");
    }

}


function contactar(emailusuario, nombre) {
    document.getElementById('nombredestinatario').innerHTML = nombre;
    document.getElementById('correodestinatario').innerHTML = emailusuario;
}

function vercv(varriable) {
    sessionStorage.setItem("idcandidato", varriable);
    window.open('../Inicio/PerfilProfesional', '_blank');
}

function Contactar_Onclick() {
    var asuntop = 'Solicitud de Contacto, Alcanza Laboral'
    var nom_contacto = $("#nom_contacto").val();
    var email_contacto = $("#email_contacto").val();
    var fono_contacto = $("#fono_contacto").val();
    var desc_contacto = $("#desc_contacto").val();
    var nombredestinatario = document.getElementById('nombredestinatario').innerHTML;
    var correodestinatario = document.getElementById('correodestinatario').innerHTML;

    $.ajax({
        type: "POST",
        url: "../Services/EnviarCorreoContactar",
        data: "{ nombresaludo:'" + nombredestinatario + "', asuntop:'" + asuntop + "', nombrecontactador:'" + nom_contacto + "', correocontactador:'" + email_contacto + "', fonocontactador:'" + fono_contacto + "', vacante:'" + desc_contacto + "', destinop:'" + correodestinatario + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ContactarSuccess,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function ContactarSuccess() {
    alert_succes('Envio Satisfactorio'); 
    $("#cancelarContactar").click();
    $("#nom_contacto").val('');
    $("#email_contacto").val('');
    $("#fono_contacto").val('');
    $("#desc_contacto").val('');
}

function buscarCandidatos() {
    var Profesion = $("#combo_cate").val();
    var Subprofesion = $("#combo_subcate").val();
    var Nacionalidad = $("#combo_nacionalidad").val();
    var Sexo = $("#sexo").val();
    var TipoCandidato_sp = $("#TipoCandidato_sp").val();

    $.ajax({
        type: "POST",
        url: "../Services/ListarBuscarCandidatos",
        data: "{ Profesion:'" + parseInt(Profesion) + "', Subprofesion:'" + parseInt(Subprofesion) + "', Nacionalidad:'" + parseInt(Nacionalidad) + "', Sexo:'" + parseInt(Sexo) + "', idtipopostulante:'" + parseInt( TipoCandidato_sp ) + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarBody,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

    
}


function OnError() {
    alert("Error 404");
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
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.open('../Inicio/PerfilProfesional', '_blank');
}

function ComoRegistrarse() {
    sessionStorage.setItem("idcandidato", idusuarioPost);
    window.location = "../Inicio/ComoRegistrarse";
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
    sessionStorage.setItem("administrador", null);
    window.location = "../Inicio/Inicio";
}

function RCandidatosPeridoCategoria() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/RCandidatosPeridoCategoria";
}

function RCantidadCandidatosPeridoTiempo() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/RCantidadCandidatosPeridoTiempo";
}

function RMontoFacturadoPeriodoTiempo() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/RPagosPeridoTiempo";
}

function RCuentas() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/RCuentas";
}

function Representante() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/Representante";
}
