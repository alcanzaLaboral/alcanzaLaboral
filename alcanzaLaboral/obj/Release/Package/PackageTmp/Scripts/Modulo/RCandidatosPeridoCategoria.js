var idusuarioPost = 0;

window.onload = function () {

    

    idusuarioPost = sessionStorage.getItem("idusuario");
    if (idusuarioPost == null) {
        idusuarioPost = 0;
    }

    if (idusuarioPost > 0) {
        $("#miPerfil_li").removeClass("Ocultar");
    } else {
        $("#miPerfil_li").addClass("Ocultar");
    }

    Spinner_ListarCategoria();
    Spinner_ListarSubCategoria(1);



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


function buscarCandidatos() {
    var Profesion = $("#combo_cate").val();
    var Subprofesion = $("#combo_subcate").val();
    var txtInicio = $("#txtInicio").val();
    var txtFin = $("#txtFin").val();
    

    $.ajax({
        type: "POST",
        url: "../Services/RCandidatosPeridoCategoria",
        data: "{ Profesion:'" + parseInt(Profesion) + "', Subprofesion:'" + parseInt(Subprofesion) + "', dfechaIni:'" + txtInicio + "', dfechaFin:'" + txtFin + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarBody,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });


}

function ListarBody(data) {

    var tbody = $("#BodyCandidatos");
    tbody.empty();

    for (i = 0; i < data.length; i++) {


        tbody.append("<tr>" +
            "<td style='text-align:center'>" + data[i].nombre + "</td>" +
            "<td style='text-align:center'>" + data[i].profesion + "</td>" +
            "<td style='text-align:center'>" + data[i].especialidad + "</td>" +
            "<td style='text-align:center'>" + data[i].nacionalidad + "</td>" +
            "<td style='text-align:center'>" + data[i].sexo + "</td>" +
            "<td style='text-align:center'>" + data[i].edad + "</td>" +
            "<td style='text-align:center'>" + data[i].fechacreacion + "</td>" +            
            "</tr>");
    }

}



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

function BuscarCandidatos() {
    sessionStorage.setItem("idcandidato", idusuarioPost);
    window.location = "../Inicio/BuscarCandidatos";
}

function ComoRegistrarse() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/ComoRegistrarse";
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


