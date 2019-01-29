
$(document).ready(function(){
    if($(window).width() < 992){
        $('#logo').attr('src','./vendors/images/logo.png');
    }else{
        $('#logo').attr('src','./vendors/images/logo-white.png');
        $(window).scroll(function(){
            var conditionNav = $(window).scrollTop() <= 50;
            if(!conditionNav && $(window).width() >= 992){
                $('#logo').attr('src','./vendors/images/logo.png');
                $('#navbar').toggleClass('bg-navbar-default',conditionNav);
            }else if($(window).width() >= 992){
                $('#logo').attr('src','./vendors/images/logo-white.png');
                $('#navbar').toggleClass('bg-navbar-default',conditionNav);
            }
        })
    }
})
$(window).resize(function(){
    if($(window).width() < 992){
        $('#logo').attr('src','./vendors/images/logo.png');
    }else if($(window).scrollTop() <= 50){
        $('#logo').attr('src','./vendors/images/logo-white.png');
        $('#navbar').addClass('bg-navbar-default');
        $(window).scroll(function(){
            var conditionNav = $(window).scrollTop() <= 50;
            if(!conditionNav && $(window).width() >= 992){
                $('#logo').attr('src','./vendors/images/logo.png');
                $('#navbar').toggleClass('bg-navbar-default',conditionNav);
            }else if($(window).width() >= 992){
                $('#logo').attr('src','./vendors/images/logo-white.png');
                $('#navbar').toggleClass('bg-navbar-default',conditionNav);
            }
        })
    }
})