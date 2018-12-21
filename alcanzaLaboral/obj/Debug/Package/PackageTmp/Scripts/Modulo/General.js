

//Alerts

function alert_succes(mensaje) {
    swal({
        type: 'success',
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
    })
}

function alert_error(mensaje) {
    swal({
        type: 'error',
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
    })
}

function alert_warning(mensaje) {
    swal({
        type: 'warning',
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
    })
}

function ValidarUsuario() {

    var nomusuario = $("#usu_reg").val();

    if (nomusuario.length > 0) {
    
        $.ajax({
            type: "POST",
            url: "../Services/ValidarUsuario",
            data: "{nomusuario:'" + nomusuario + "'}",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: ValUsuSuccess,
            failure: function (response) {
                alert(response.d);
            },
            error: OnError

        });
    }
    
}

function ValUsuSuccess(data) {

    for (i = 0; i < data.length; i++) {
        respuesta = data[0].respuesta;        
    }

    if (respuesta == 'existe') {
        alert_warning('El nombre de usuario ya se encuentra en uso');
        $("#usu_reg").val('');
        $("#usu_reg").focus();
    }

}

function ValidarCorreoRecu() {

    var emailusuario = $("#correo_recu").val();

    if (emailusuario.length > 0) {

        $.ajax({
            type: "POST",
            url: "../Services/ValidarCorreo",
            data: "{emailusuario:'" + emailusuario + "'}",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: ValCorreoRecuSuccess,
            failure: function (response) {
                alert(response.d);
            },
            error: OnError

        });

    }

}

function ValCorreoRecuSuccess(data) {

    for (i = 0; i < data.length; i++) {
        respuesta = data[0].respuesta;
    }

    if (respuesta == 'existe') {
        
    }
    else {
        alert_warning('Correo no registrado');
        $("#correo_recu").val('');
        $("#correo_recu").focus();
    }

}


function ValidarCorreo() {

    var emailusuario = $("#email_reg").val();

    if (emailusuario.length > 0) {

        $.ajax({
            type: "POST",
            url: "../Services/ValidarCorreo",
            data: "{emailusuario:'" + emailusuario + "'}",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: ValCorreoSuccess,
            failure: function (response) {
                alert(response.d);
            },
            error: OnError

        });

    }
    
}

function ValCorreoSuccess(data) {

    for (i = 0; i < data.length; i++) {
        respuesta = data[0].respuesta;
    }

    if (respuesta == 'existe') {
        alert_warning('El correo ya se encuentra en uso');
        $("#email_reg").val('');
        $("#email_reg").focus();
    }

}

//Login
function Login_Onclick() {

    var usuario = $("#login_usuario").val();
    var pass = $("#login_pass").val();

    $.ajax({
        type: "POST",
        url: "../Services/Login",
        data: "{usuario:'" + usuario + "', password:'" + pass + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: LoginSucces,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });


}

function LoginSucces(data) {

    var idusuario;
    var nomusuario;
    var administrador;


    for (i = 0; i < data.length; i++) {
        idusuario = data[0].idusuario;
        nomusuario = data[0].nomusuario;
        administrador = data[0].administrador;

    }

    if (nomusuario.length == 0) {
        alert_error("Usuario o Password Incorrecto");
    }
    else {
        Link(idusuario, administrador);
    }


}

function Link(idusuario, administrador) {

    sessionStorage.setItem("idusuario", idusuario);
    sessionStorage.setItem("administrador", administrador);
    window.location = "../Inicio/EditarPerfil";


}


//Registrar Usuario
function Registrar_Onclick() {

    if (document.getElementById('chk_terminos').checked) {
        terminos = 1;
    } else {
        terminos = 0;
    }

    var nomusuario = $("#usu_reg").val();
    var passusuario = $("#pass_reg").val();
    var emailusuario = $("#email_reg").val();
    var idpregunta = $("#preg_reg").val();
    var respuestaPreg = $("#respuesta_reg").val();

    var rpass_reg = $("#rpass_reg").val();
    var remail_reg = $("#remail_reg").val();

    if (nomusuario.length < 1) {
        alert_warning("Ingrese nombre de usuario");
        $("#usu_reg").focus();
    }
    else if (passusuario.length < 1) {
        alert_warning("Ingrese una contraseña");
        $("#pass_reg").focus();

    }
    else if (rpass_reg != passusuario) {
        alert_warning("Las contraseñas no coinciden");
        $("#pass_reg").val("");
        $("#rpass_reg").val("");
        $("#pass_reg").focus();
    }
    else if (emailusuario.length < 1) {
        alert_warning("Ingrese un correo");
        $("#email_reg").focus();
    }
    else if (remail_reg != emailusuario) {
        alert_warning("Los correos no coinciden");
        $("#email_reg").val("");
        $("#remail_reg").val("");
        $("#email_reg").focus();
    }
    else if (respuestaPreg.length < 1) {
        alert_warning("Ingrese una respuesta a la pregunta secreta");
        $("#respuesta_reg").focus();
    } else if (terminos == 0) {

        alert_warning("Debe aceptar los términos");
    } else {

        $.ajax({
            type: "POST",
            url: "../Services/RegistrarUsuario",
            data: "{nomusuario:'" + nomusuario + "', passusuario:'" + passusuario
                + "', emailusuario:'" + emailusuario + "', idpregunta:'" + idpregunta + "', respuestaPreg:'" + respuestaPreg + "'}",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: RegistroSucces,
            failure: function (response) {
                alert(response.d);
            },
            error: OnError

        });

    }


}

function RegistroSucces(data) {


    for (i = 0; i < data.length; i++) {
        respuesta = data[0].respuesta;
    }

    if (respuesta == "true") {
        alert_succes("Registrado satisfactoriamente");
    }
    else {
        alert("Ups ocurrio un problema al registrar usuario");
    }


}

function Recupera_Onclick() {

    var correo_recu = $("#correo_recu").val();
    var preg_recu = $("#preg_recu").val();
    var respuesta_recu = $("#respuesta_recu").val();

    $.ajax({
        type: "POST",
        url: "../Services/Recupera",
        data: "{emailusuariop:'" + correo_recu + "', idpreguntap:'" + preg_recu + "', respuestaPregp:'" + respuesta_recu + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: RecuperaSuccess,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError

    });

}

function RecuperaSuccess(data) {

    for (i = 0; i < data.length; i++) {
        respuesta = data[0].respuesta;
        nomusuario = data[0].nomusuario;
        passusuario = data[0].passusuario;
        emailusuario = data[0].emailusuario;
    }


    if (respuesta == 'true') {

        asunto_env = 'No Reply - Recuperación de Cuenta Alcanza Laboral';
        mensaje_env = 'Username: ' + nomusuario + ', Password: ' + passusuario;
        //emailtest = 'cristopher.torres291@gmail.com'

        $.ajax({
            type: "POST",
            url: "../Services/EnviarCorreo",
            data: "{ mensajep:'" + mensaje_env + "', asuntop:'" + asunto_env + "', destinop:'" + emailusuario + "'}",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: ResponseEnviarSucces,
            failure: function (response) {
                alert(response.d);
            },

            error: ResponseEnviarSucces

        });
    }
    else {
        alert('no ok');
    }

}

function ResponseEnviarSucces() {
    alert('Envio Satisfactorio');
}



//Error:
function OnError(data) {
    alert("Error 404...");
}
