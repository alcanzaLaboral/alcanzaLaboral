
$(window).on('load', function () {
    ListarCarrito();
   

});

//$(document).on('click', '.boxProductCart .boxTexto .deleteProduct .deleProduct', function (e) {
    
//    $n = $(this);
//    iddetalle = $n.parent().attr("data-id");
//    alert(iddetalle);
//    //codigo = $n.parent().attr("data-codigo");
//    //eliminarItem(codigo, secuencia);

//});

$("#regresar").on("click", function () {


    window.location.replace("/Inicio/BuscarCandidatos");

});

function eliminarItem(identifier) {

    $n = $(this);
    iddetalle = $(identifier).data('id');
    EliminarCarrito(iddetalle);
    ListarCarrito();
};

function EliminarCarrito(secuencia) {
    var dataJ = JSON.stringify({ carrito: getCookie('carrito'),secuencia : secuencia });

    $.ajax({
        url: '/CheckOut/EliminarCarrito',
        dataType: "json",
        type: "GET",
        contentType: 'application/json; charset=utf-8', //define a contentType of your request
        cache: false,
        data: { json: dataJ },
        success: function (data) {
            console.log(data);
          
        },
        error: function (xhr) {
            alert('error');
        }
    });


}
function ListarCarrito() {

    var dataJ = JSON.stringify({ carrito: getCookie('carrito') });

    $.ajax({
        url: '/CheckOut/ListarCarrito',
        dataType: "json",
        type: "GET",
        contentType: 'application/json; charset=utf-8', //define a contentType of your request
        cache: false,
        data: { json: dataJ },
        success: function (data) {
            console.log(data);
            
            if(data.length != 0){
            _marcas = "";
            for (let i = 0; i < data.length; i++) {
                _marcas += '<div id="' + data[i].idDetalle + '" class="form-group boxProductCart "><div class="boxTexto"><span class="descripcion">' + data[i].Descripcion + '</span><div class="dataValores"><div class="data"><div class="groupCont"></div> </div> <div class="pSubTotal"><div class="titulo">SubTotal</div><div class="valor" id="divCostoParcial1">S/ 120.00</div></div> </div> <div class="deleteProduct"><a class="deleProduct" data-id="' + data[i].idDetalle + '" data-msg="Desea Eliminar el producto." data-funcion="EliminarItemCarrito" onclick="eliminarItem(this);"><span class="glyphicon far fa-trash-alt"></span></a></div></div><div class="fondoEspera" style="display: none;"></div></div>';
                totalSuma = data[i].Total;
            }
            var span = document.getElementById('spanTotalPagar');
            while (span.firstChild) {
                span.removeChild(span.firstChild);
            }
            span.appendChild(document.createTextNode(totalSuma));
            var span = document.getElementById('txtCCTotal');
            while (span.firstChild) {
                span.removeChild(span.firstChild);
            }
            span.appendChild(document.createTextNode(totalSuma));
            $('#divListadoProductos').html(_marcas);
            }
            else {
                window.location.replace("/CheckOut/OutShop");
            }
        },
        error: function (xhr) {
            alert('error');
        }
    });

};

function setCookie(params) {
    var name = params.name,
        value = params.value,
        expireDays = params.days,
        expireHours = params.hours,
        expireMinutes = params.minutes,
        expireSeconds = params.seconds;

    var expireDate = new Date();
    if (expireDays) {
        expireDate.setDate(expireDate.getDate() + expireDays);
    }
    if (expireHours) {
        expireDate.setHours(expireDate.getHours() + expireHours);
    }
    if (expireMinutes) {
        expireDate.setMinutes(expireDate.getMinutes() + expireMinutes);
    }
    if (expireSeconds) {
        expireDate.setSeconds(expireDate.getSeconds() + expireSeconds);
    }

    document.cookie = name + "=" + escape(value) +
        ";domain=" + window.location.hostname +
        ";path=/" +
        ";expires=" + expireDate.toUTCString();
}
function deleteCookie(name) {
    setCookie({ name: name, value: "", seconds: 1 });
}
function getCookie(name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(name + "=");
        if (c_start != -1) {
            c_start = c_start + name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
