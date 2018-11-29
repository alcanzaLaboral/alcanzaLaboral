
var idusuarioPost = 0;

$(document).ready(function () {
    if (sessionStorage.getItem('administrador') != 1) {
        window.location = "../Inicio/Inicio";
    }
});

window.onload = function () {



    idusuarioPost = sessionStorage.getItem("idusuario");
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

    


}


function buscarCandidatos() {
    var txtInicio = $("#txtInicio").val();
    var txtFin = $("#txtFin").val();


    $.ajax({
        type: "POST",
        url: "../Services/RCantidadCandidatosPeridoTiempo",
        data: "{ dfechaIni:'" + txtInicio + "', dfechaFin:'" + txtFin + "'}",
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
    cantidad = data[0].cantidad;
    document.getElementById('cantUsuarios').innerHTML = cantidad;
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
