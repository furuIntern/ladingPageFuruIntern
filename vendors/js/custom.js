
$(document).ready(function(){
    if($(window).width() < 992){
        $('#logo').attr('src','./vendors/images/logo.png');
    }else{
        $('#logo').attr('src','./vendors/images/logo-white.png');
        $(window).scroll(function(){
            var conditionNav = $(window).scrollTop() <= 50;
            $('#navbar').toggleClass('bg-navbar-default',conditionNav);
            if(!conditionNav){
                $('#logo').attr('src','./vendors/images/logo.png');
            }else{
                $('#logo').attr('src','./vendors/images/logo-white.png');
            }
        })
    }
})
