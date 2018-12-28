
$(window).on('load', function () {
    $(".appLoad").fadeIn();
    ListarCarrito();
    $(".appLoad").fadeOut();
});

$("#numberCard").keypress(function (e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
});
$("#ownerTelf").keypress(function (e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
});
$("#codeCard").keypress(function (e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
});
//$('.list-payment li.active').click(function () {
//    var mediopago = $('.list-payment li.active').attr("data-name");
//    if (mediopago == 'AMEX') {
//        document.getElementById('codeCard').value = "";
//        $("#codeCard").attr('maxlength', '4');
//    } else {
//        document.getElementById('codeCard').value = "";
//        $("#codeCard").attr('maxlength', '3');
//    }
//});
$("#ownerCard").keyup(function (e) {
    var regex = /^[a-zA-Z]+$/;
    //if (regex.test(this.value) !== true)
        this.value = this.value.replace(/[^a-zA-Z @]+/, '');
});




$("#regresar").on("click", function () {
    window.location.replace("/Inicio/BuscarCandidatos");
});
$("#comprar").on("click", function () {

    $(".appLoad").fadeIn();

    var carrito = getCookie('carrito');
    var mediopago = $('.list-payment li.active').attr("data-name");
    var tipomedio = $('.list-payment li.active').attr("data-type");
    var sessionOK = sessionStorage.getItem("idusuario");

    if(tipomedio == 0 ){
        var dataJ = JSON.stringify({ session: sessionOK, medio: mediopago, tipomedio: tipomedio, carrito: carrito });

        $.ajax({
            url: '/CheckOut/ValidatePay',
            dataType: "json",
            type: "GET",
            contentType: 'application/json; charset=utf-8', 
            cache: false,
            data: { json: dataJ },
            success: function (data) {
                if (data == "ERROR") {
                    deleteCookie('carrito');
                    window.location.replace("/CheckOut/ErrorShop");
                }
                else {
                    deleteCookie('carrito');
                //window.open(data, 'Pago En Efectivo', '');
                    //window.location.replace("/CheckOut/EndTrans");
                    window.location.replace(data);
                }
            },
            error: function (xhr) {
                window.location.replace("/CheckOut/ErrorShop");
            }
        });
    }
    if (tipomedio == 1) {

        debugger;
        var creditCard = $("#numberCard").val();
        var payerName = $("#ownerCard").val();
        var securityCode = $("#codeCard").val();
        var expirationCard = $("#dateExpirateCard").val();

        var telefono = $("#ownerTelf").val();
        var mail = $("#ownerEmail").val();




        if (creditCard == null || creditCard == "") {
            document.getElementById("numberCard").focus();
            swal("Datos Incompletos!", "Falta un dato obligatorio", "error");
            $(".appLoad").fadeOut();
        }
        else if (payerName == null || payerName == "") {
            document.getElementById("ownerCard").focus();
            swal("Datos Incompletos!", "Falta un dato obligatorio", "error");
            $(".appLoad").fadeOut();
        }
        else if (securityCode == null || securityCode == "") {
            document.getElementById("codeCard").focus();
            swal("Datos Incompletos!", "Falta un dato obligatorio", "error");
            $(".appLoad").fadeOut();
        }
        else if (expirationCard == null || expirationCard == "") {
            document.getElementById("dateExpirateCard").focus();
            swal("Datos Incompletos!", "Falta un dato obligatorio", "error");
            $(".appLoad").fadeOut();
        }
        else if (telefono == null || telefono == "") {
            document.getElementById("ownerTelf").focus();
            swal("Datos Incompletos!", "Falta un dato obligatorio", "error");
            $(".appLoad").fadeOut();
        }
        else if ((mail == null || mail == "") || !validar_email(mail)) {
            document.getElementById("ownerEmail").focus();
            swal("Datos Incompletos!", "El email no es válido", "error");
            $(".appLoad").fadeOut();
        }
        else {
            var x = valid_credit_card(creditCard);

            if (x) {
                var dataJ = JSON.stringify({
                    session: sessionOK, carrito: carrito, medio: mediopago, tipomedio: tipomedio,
                    card: creditCard, securityCode: securityCode, expirationCard: expirationCard, payerName: payerName
                });
                $.ajax({
                    url: '/CheckOut/ValidatePay',
                    dataType: "json",
                    type: "GET",
                    contentType: 'application/json; charset=utf-8',
                    cache: false,
                    data: { json: dataJ },
                    success: function (data) {
                        //alert(data);
                        if (data == "APPROVED"){
                            deleteCookie('carrito');
                            window.location.replace("/CheckOut/EndTrans");
                        }
                        else{
                            deleteCookie('carrito');
                            window.location.replace("/CheckOut/ErrorShop");
                        }
                    },
                    error: function (xhr) {
                        deleteCookie('carrito');
                        window.location.replace("/CheckOut/ErrorShop");
                    }
                });
            }
            else {
                $(".appLoad").fadeOut();
                swal("Error!", "El dato de tu tarjeta no es válido", "error");
                document.getElementById("numberCard").focus();
            }
          
        }
    }
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
                _marcas += '<div id="' + data[i].idDetalle + '" class="form-group boxProductCart "><div class="boxTexto"><span class="descripcion">' + data[i].Descripcion + '</span><div class="dataValores"><div class="data"><div class="groupCont"></div> </div> <div class="pSubTotal"><div class="titulo">Precio</div><div class="valor" id="divCostoParcial1">S/'+data[i].Total+' </div></div> </div> <div class="deleteProduct"><a class="deleProduct" data-id="' + data[i].idDetalle + '" data-msg="Desea Eliminar el producto." data-funcion="EliminarItemCarrito" onclick="eliminarItem(this);"><span class="glyphicon far fa-trash-alt"></span></a></div></div><div class="fondoEspera" style="display: none;"></div></div>';
                totalSuma = data[i].Total;
            }
            var span = document.getElementById('spanTotalPagar');
            while (span.firstChild) {
                span.removeChild(span.firstChild);
            }
            span.appendChild(document.createTextNode(totalSuma));

            var spanTotal = document.getElementById('txtCCTotal');
            while (spanTotal.firstChild) {
                spanTotal.removeChild(spanTotal.firstChild);
            }
            spanTotal.appendChild(document.createTextNode(totalSuma));

            var spanTotal = document.getElementById('txtCCIGV');
            while (spanTotal.firstChild) {
                spanTotal.removeChild(spanTotal.firstChild);
            }
            spanTotal.appendChild(document.createTextNode(((totalSuma / 1.18) * 0.18).toFixed(2)));

            var spanTotal = document.getElementById('txtCCSubtotal');
            while (spanTotal.firstChild) {
                spanTotal.removeChild(spanTotal.firstChild);
            }
            spanTotal.appendChild(document.createTextNode(((totalSuma / 1.18)).toFixed(2)));




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
function valid_credit_card(value) {
    // accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;

    // The Luhn Algorithm. It's so pretty.
    var nCheck = 0, nDigit = 0, bEven = false;
    value = value.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) == 0;
}
function validar_email( email ) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}