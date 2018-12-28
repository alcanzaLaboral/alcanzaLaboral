$("#Comprar").click(function () {
    var sessionOK = sessionStorage.getItem("idusuario");
    addCarrito();

});

function addCarrito(candidato) {
    debugger;
    var sessionOK = sessionStorage.getItem("idusuario");

    if (sessionOK != '0' && sessionOK != null) {
        AddCarrito(sessionOK);
        swal("Excelente!", "¿Pagar suscripción anual?", "success");
        $('.swal2-confirm').click(function () {

            //setCookie({ name: "idusuario", value: document.getElementById("idusuario").value, minutes: 30 });
            window.location.replace("/CheckOut/Index?s=" + sessionOK);


        });
    }
    else {
        Swal({
            type: 'error',
            title: 'Oops...',
            text: 'Necesitas iniciar sesión para poder continuar.',
            footer: '<a href="~/Inicio/ComoRegistrarse">¿Cómo Registrarse?</a>'
        })
    }
}

function AddCarrito(Candidato) {
    var Carrito = getCookie("carrito");
    var dataJ = JSON.stringify({ candidato: Candidato, carrito: Carrito });


    $.ajax({
        type: "GET",
        url: "../CheckOut/AddCarrito",
        async: false,
        data: { json: dataJ },
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log(data);
            //alert(data);
            setCookie({ name: "carrito", value: data, minutes: 120 });
        },
        failure: function (data) {
            alert(data);
        },
        error: function (data) {
            console.log(data);
        }
    });
}
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