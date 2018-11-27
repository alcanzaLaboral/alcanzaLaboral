

window.onload = function () {
    


    Spinner_ListarCategoria();
    Spinner_ListarSubCategoria(1);
    Spinner_ListarPaises();

   

    $("select[name=combo_cate]").change(function () {
        idcategoria = $("#combo_cate").val();
        Spinner_ListarSubCategoria(idcategoria);


    });

    ListarGrilla();
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

//Lista candidatos
function ListarGrilla(Profesion, Subprofesion, Tipo, Nacionalidad, Sexo) {

    var Profesion = $("#combo_cate").val();
    var Subprofesion = $("#combo_subcate").val();
    var Tipo = $("#tipo").val();
    var Nacionalidad = $("#combo_nacionalidad").val();
    var Sexo = $("#sexo").val();

    alert("Profesion" + Profesion);

    $.ajax({
        type: "POST",
        url: "../Services/ListarCandidatos",
        data: "{Profesion:'" + Profesion + "', Subprofesion:'" + Subprofesion + "', Tipo:'" + Tipo + "', Nacionalidad:'" + Nacionalidad + "', Sexo:'" + Sexo  + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ListarGrillaCandidatos,
        failure: function (response) {
            alert(response.d);
        },
        error: OnError
    });

}

function ListarGrillaCandidatos(data) {
    //alert(1);

    //var pagina = $("#Pagina").val();
    //var select = $("#Pagina");
    //var regporpag = "10";
    //var TotalRegistros = "1";
    //var i = 1;

    //select.empty();

    //if (data.length > 1) {
    //    if (parseInt(data[1].TotalRegistros) > parseInt(regporpag)) {

    //        for (i = 1; i <= Math.ceil(parseInt(data[1].TotalRegistros) / parseInt(regporpag)); i++) {
    //            select.append("<option value = " + i + ">" + i + "</option>");
    //        }
    //    }
    //    else {
    //        select.append("<option value = '1'> 1</option>");
    //    }
    //}
    //else {
    //    select.append("<option value = '1'> 1</option>");
    //}


    //$("#Pagina").val(pagina);

    //var tabla = $("#GridListar");
    //tabla.empty();
    //tabla.append("<thead class=bg-blues>" +
    //    "<tr>" +
    //    "<td>Nro. Inspección</td>" +
    //    "<td>Nro. Poli</td>" +
    //    "<td>Contratante</td>" +
    //    "<td>Placa</td>" +
    //    "<td>Fecha Registro</td>" +
    //    "<td>Fecha Programación</td>" +
    //    "<td>Marca</td>" +
    //    "<td>Modelo</td>" +
    //    "<td>Estado</td>" +
    //    "<td></td>" +
    //    "<td></td>" +
    //    "</tr>" +
    //    "</thead>");


    if (data.length > 0) {
        //tabla.append("<tbody>")
        for (i = 0; i < data.length; i++) {
            var Nombres = data[i].Nombres;
            var Profesion = data[i].Profesion;
            var Especialidad = data[i].Subprofesion;
            var Nacionalidad = data[i].Nacionalidad;
            var Sexo = data[i].Sexo;
            var Edad = data[i].Edad;
            var Tipo = data[i].Tipo;
            $("#nombre").val(Nombres);
            $("#profesion").val(Profesion);
            $("#especialidad").val(Especialidad);
            $("#nacionalidad").val(Nacionalidad);
            $("#sexo").val(Sexo);
            $("#edad").val(Edad);
            $("#tipo").val(Tipo);
            
            //tabla.append(
            //    "<tr>" +
            //    "<td>" + data[i].iidinspeccion + "</td>" +
            //    "<td>" + data[i].idpoliza + "</td>" +
            //    "<td>" + data[i].Persona + "</td>" +
            //    "<td>" + data[i].vplaca + "</td>" +
            //    "<td>" + data[i].Emision + "</td>" +
            //    "<td>" + data[i].dtfec_hora_registro + "</td>" +
            //    //"<td>" + data[i].dfecha + "</td>" +
            //    "<td>" + data[i].Marca + "</td>" +
            //    "<td>" + data[i].Modelo + "</td>" +
            //    "<td>" + data[i].Estado + "</td>" +
            //    "<td><input type=button onclick = Link('" + data[i].iidinspeccion + "','ver')  value=Ver style=width:70px class=btn_customer btn-secondary/></td>" +
            //    "<td><input type=button onclick = Link('" + data[i].iidinspeccion + "','editar')  value=Editar style=width:70px class=btn_customer btn-secondary/></td>" +
            //    "</tr>");
        }
        //tabla.append("</tbody>")

    }
    else {
        tabla.append("<tbody>")
        tabla.append(
            "<center>" +
            "No hay registro(s) selecionado(s) por los criterios de busqueda" +
            "</center>");
        tabla.append("</tbody>")
    }

}

//function ListarGrilla() {
//    //alert("prueba");

//    var Profesion = $("#combo_cate").val();
//    var Subprofesion = $("#combo_subcate").val();
//    var Tipo = $("#tipo").val();
//    var Nacionalidad = $("#combo_nacionalidad").val();
//    var Sexo = $("#sexo").val();
//    //var pagina = $("#Pagina").val();
//    //var regporpag = "10";



//    ListarInspeccion(Profesion, Subprofesion, Tipo, Nacionalidad, Sexo);

//}
function buscarCandidatos() {

    ListarGrilla();

};



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

function TerminosCondiciones() {
    sessionStorage.setItem("idusuario", idusuarioPost);
    window.location = "../Inicio/TerminosCondiciones";
}

function Salir() {
    sessionStorage.setItem("idusuario", null);
    window.location = "../Inicio/Inicio";
}


//Error
function OnError() {
    alert("Error de conexion");
}