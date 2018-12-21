/*----------------------------------------------------------------------------------*/
/* Ajax Modal - Zona de envío y horario
/*----------------------------------------------------------------------------------*/
var $zonaEnvio = $('.btn-callzone');
var $userLogin=0; //1 Usuario logeado 0 no logeado
var $listPayment = $('.list-payment');
var paymentStatus=0;
var cardStatus=0;
var id_btn=0;


  $(".check-box").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
       
    })   

    
    

    /*-----------------------------------------------------------------------------------*/
    /* Credit Payment
    /*-----------------------------------------------------------------------------------*/

    $listPayment.find('li').on('click', function(event){
        event.preventDefault();

        var $this = $(this);
        $('.checkout-data .list-payment li').removeClass('active');

        if($this.attr("data-status")==0){
            $this.addClass('active');

            $('.checkout-data .list-payment li').attr("data-status",0);
            $this.attr("data-status",1);

            if ($this.attr("data-type")==1) {
                $(".checkout-data .new_card").removeClass("none");
                $("#nameCard").val($this.attr("data-name"));
                if($(".device-mobile").length != 0) {
                    setTimeout(function(){ downNewCard(); }, 100);
                }
            }else{
                $(".checkout-data .new_card").addClass("none");
            }
            paymentStatus=1;
        }else{


            $this.attr("data-status",0);
            $(".checkout-data .new_card").addClass("none");
            paymentStatus=0;
        }
        if (paymentStatus==1) {
            //box de tarjetas guardadas
            $(".checkout-data .card-save").addClass("none");
            $(".save_card").addClass("none");

        }else{
            $(".checkout-data .card-save").removeClass("none");

        }
        closeCardSave();
    });


    function downNewCard(){
        var seccionNewCard=$(".new_card").position().top;
        console.log(seccionNewCard);
        $('body, html').animate({
            scrollTop: seccionNewCard-70
        }, 800);

    }



    

    /*-----------------------------------------------------------------------------------*/
    /* Botones de Seleccion de tipo de Tarjeta
    /*-----------------------------------------------------------------------------------*/
    $(".typeCard .check-box").click(function(){
        type=$(this).attr("data-type");
        $("#typeCard").val(type);
        if(type=="Credito"){
            $("#duesNumber").removeClass("none");
        }else{
            $("#duesNumber").addClass("none");
        }
    })


    /*-----------------------------------------------------------------------------------*/
    /* Botones de Seleccion de tipo de Tarjeta
    /*-----------------------------------------------------------------------------------*/
    $(".card-save .card").click(function(){
        //Aca deberia de agregarse el pais
        //pais=
        $this=$(this);
        $(".card-save .card").removeClass("active");

        status=$this.attr("data-status");
        if (status==0) {
            $(".card-save .card").attr("data-status",0);
            $this.attr("data-status",1);
            cardStatus=1;
            $this.addClass("active");
        }else{
            $this.attr("data-status",0);
            cardStatus=0;
            $this.removeClass("active");
        }

        pais="cl";
        if (pais=="cl") {
            //si es chile
            if (cardStatus==1) {
                $(".save_card").removeClass("none");
            }else{
                $(".save_card").addClass("none");
            }
        }else if (pais=="mx") {
            //Si es Mexico
            typeCard=$this.attr("data-type");

            if (typeCard=="amex") {
                if (cardStatus==1) {
                    $(".save_card").removeClass("none");
                }else{
                    $(".save_card").addClass("none");
                }
            }else{
                $(".save_card").addClass("none");
            }
        }
    })


    /*----------------------------------------------------------------------------------*/
    /* SAVE STEPS - CUSTOMER AND INVOICE
    /*----------------------------------------------------------------------------------*/
    function save(){
        console.log("adjComplement");
        $(".owl-carousel .owl-stage-outer .owl-stage").css({"transform":"translate3d(0px, 0px, 0px)"});
    }




// Cerrar formulario de tarjetas guardadas y deseleccionar tarjeta guardada
function closeCardSave(){
    $(".card-save .card").attr("data-status",0);
    $(".card-save .card").removeClass("active");
    $(".save_card").addClass("none");
    cardStatus=0;
}

/*----------------------------------------------------------------------------------*/
/* Ajustes de box en complementos*/
/*----------------------------------------------------------------------------------*/
function adjComplement(){
    console.log("adjComplement");
    $(".owl-carousel .owl-stage-outer .owl-stage").css({"transform":"translate3d(0px, 0px, 0px)"});
}



