
var idusuarioPost;

$(document).ready(function () {

    if (sessionStorage.getItem('peticionver')+'' == 'null') {
        window.location = "../Inicio/Inicio";
    }

});


window.onload = function () {
    
    idusuarioPost = sessionStorage.getItem("idcandidato");


    DetalleUsuario(idusuarioPost);
        ListarCategoria();
        ListarInstitucion();
        ListarExperiencia();
        ListarDSoftware();
        ListarMaquinaria();
        ListarIdioma();
        mostrarFotoPerfil();
    
}

function mostrarFotoPerfil() {
    var tbody = $("#mostrarfoto_perfil");
    tbody.empty();
    tbody.append("<img src='../documents/" + idusuarioPost + ".jpg' style='width:130px;'>");

}

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

        fechaNaciPerfil = data[0].fechaNaciPerfil;
        edadPerfil = data[0].edadPerfil;
        nacionalidadPerfil = data[0].nacionalidadPerfil;
        residenciaPerfil = data[0].residenciaPerfil;
        emailusuario = data[0].emailusuario;

    }

    NombreCompleto = Nombres + " " + ApePaterno + " " + ApeMaterno;
    edad = edadPerfil + " años de edad";
    fonos = Fijo + " / " + Celular1;

    document.getElementById('nombre_id').innerHTML = NombreCompleto;
    document.getElementById('fechanaci_id').innerHTML = fechaNaciPerfil;
    document.getElementById('edad_id').innerHTML = edad;
    document.getElementById('nacionalidad_id').innerHTML = nacionalidadPerfil
    document.getElementById('residencia_id').innerHTML = residenciaPerfil;
    document.getElementById('fono_id').innerHTML = fonos;
    document.getElementById('correo_id').innerHTML = emailusuario;


    if (Resumen.length < 1) {
        $("#perfilpro_tab").addClass("Ocultar");
    } else {
        $("#perfilpro_tab").removeClass("Ocultar");
        document.getElementById('resumenpro_id').innerHTML = Resumen;
    }

    

    if (Experiencia4.length > 1) {
        var tbody = $("#bodyInteres");
        tbody.empty();

        tbody.append(
            "<tr><td style='text-align:center'>" + Experiencia1 + "</td></tr>" +
            "<tr><td style='text-align:center'>" + Experiencia2 + "</td></tr>" +
            "<tr><td style='text-align:center'>" + Experiencia3 + "</td></tr>" +
            "<tr><td style='text-align:center'>" + Experiencia4 + "</td></tr>"
            );

    } else if (Experiencia3.length > 1) {
        var tbody = $("#bodyInteres");
        tbody.empty();

        tbody.append(
            "<tr><td style='text-align:center'>" + Experiencia1 + "</td></tr>" +
            "<tr><td style='text-align:center'>" + Experiencia2 + "</td></tr>" +
            "<tr><td style='text-align:center'>" + Experiencia3 + "</td></tr>"
            );

    } else if (Experiencia2.length > 1) {
        var tbody = $("#bodyInteres");
        tbody.empty();

        tbody.append(
            "<tr><td style='text-align:center'>" + Experiencia1 + "</td></tr>" +
            "<tr><td style='text-align:center'>" + Experiencia2 + "</td></tr>"
            );

    } else if (Experiencia1.length > 1) {
        var tbody = $("#bodyInteres");
        tbody.empty();

        tbody.append(
            "<tr><td style='text-align:center'>" + Experiencia1 + "</td></tr>"
            );
    } else {
        alert(0);
    }


}


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

        tbody.append("<tr>" +
            "<td>" + data[i].categoria + "</td>" +
            "<td>" + data[i].subcategoria + "</td>" +
            "</tr>");
    }

}

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
   

        tbody.append("<tr>" +
            "<td>" + nomInstitucion + "</td>" +
            "<td>" + data[i].nominstitucion + "</td>" +
            "<td>" + descripcion + "</td>" +
            "</tr>");
    }

}



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

        tbody.append("<tr>" +
            "<td>" + data[i].descripcion + "</td>" +
            "<td>" + data[i].titulo + "</td>" +
            "<td>" + data[i].empresa + "</td>" +
            "</tr>");
    }

}


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
        } else if (nivel == 2) {
            descripcion = "Medio";
        } else if (nivel == 3) {
            descripcion = "Experto";
        }

        tbody.append("<tr>" +
            "<td style='text-align:center'>" + data[i].nomprograma + "</td>" +
            "<td style='text-align:center'>" + descripcion + "</td>" +
            "</tr>");
    }

}


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

        tbody.append("<tr>" +
            "<td style='text-align:center'>" + data[i].nom_maquinaria + "</td>" +
            "<td style='text-align:center'>" + descripcion + "</td>" +
            "</tr>");
    }

}


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

        tbody.append("<tr>" +
            "<td style='text-align:center'>" + data[i].nomidioma + "</td>" +
            "<td style='text-align:center'>" + descripcion1 + "</td>" +
            "<td style='text-align:center'>" + descripcion2 + "</td>" +
            "<td style='text-align:center'>" + descripcion3 + "</td>" +
            "</tr>");
    }

}

//Error
function OnError() {
    alert("Error de conexion");
}