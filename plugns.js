$(document).ready(function(){



    //loading bage

    $(window).on('load', function(){
        $('.loading').fadeOut(1000);


    })


    //header height
    $(function(){


        $(".header").height($(window).height())

        $(window).resize(function(){

            $(".header").height($(window).height())
        })
    })

    //testimonials
    $(".testimonials .buttons .btn").on('click',function(e){
         

        $(this).addClass('active').siblings().removeClass('active')
        e.preventDefault()

        $('#' + $(this).data('click')).siblings().fadeOut(200,function(){

            $('#' + $(this).data('click')).siblings().removeClass('active')
        })
        $('#' + $(this).data('click')).delay(200).fadeIn(200, function(){

            $('#' + $(this).data('click')).addClass('active')
        })
    })

    $("nav li a").on('click', function(){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        },1000 )
    })

})