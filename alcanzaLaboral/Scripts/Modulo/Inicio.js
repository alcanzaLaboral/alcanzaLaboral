
var idusuarioPost = 0;
var adminPost = 0;

//$(window).keypress(function (e) {
//    if (e.keyCode == 13) {
//        Login_Onclick()
//    }
//});

$(document).ready(function () {

    sessionStorage.setItem('flagref', 0)

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
    
});

window.onload = function () {

    
    $("#rbt_noref").prop('checked', true);

    $("#rbt_siref").click(function () {
        if (this.checked) {
            $("#email_refe").prop("disabled", false);
            sessionStorage.setItem('flagref',1)
        }
        else {
            $("#email_refe").prop("disabled", true);
            sessionStorage.setItem('flagref', 0)
        }
    });

    $("#rbt_noref").click(function () {
        if (this.checked) {
            $("#email_refe").prop("disabled", true);
            sessionStorage.setItem('flagref', 1)
        }
        else {
            $("#email_refe").prop("disabled", false);
            sessionStorage.setItem('flagref', 0)
        }
    });

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
    sessionStorage.setItem("idcandidato", idusuarioPost);
    sessionStorage.setItem('peticionver', 2);
    window.location = "../Inicio/PerfilProfesional";
    //window.open('../Inicio/PerfilProfesional', '_blank');
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

  