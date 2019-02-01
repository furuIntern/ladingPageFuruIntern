
AOS.init({
    once: true,
    duration: 1000
})
AOS.refresh();

//Use aos library
document.addEventListener('aos:in:line-code', ({detail}) => {

    //Animation increase code line
    var x=0;
    var icrease = setInterval(increaseX,1);
    function increaseX(){
        
        if(x == 2468){
            clearInterval(icrease);
        }else{
            x=x+4;
            $(detail).children("h3").text(x);
        }
    }
  });

  //Animation increas progress bar
  document.addEventListener('aos:in:achieved',function({detail}){
      var x = 0;
      var icrease = setInterval(increaseX,10);
      function increaseX(){
          if(x == 75){
              clearInterval(icrease);
          }else{
              x=x+1;
              $('#achieved').children('.progress').each(function(){
                  $(this).children('.progress-bar').css('width',x +'%');
              })
          }
      }x
  })


$(document).ready(function () {
    var timeDelay = 0;
    $(".linecode").each(function(){
    $(this).children("h3").text(0);
    $(this).attr('data-aos-delay',timeDelay*50);
    timeDelay++;
    })

    //Hover img
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 1500,
        autoplayHoverPause:true,
        responsiveClass:true,
        loop:true,
        dots:false,
        responsive:{
            0:{
                items:2 ,
            },
            992:{
                items:5,
            }
        }
    });

    //Animation navbar
    //Set default
    function setDefault(){
        //Set navbar
        if($(window).width() >= 992){
            $('#space').addClass('d-none');
            if($(window).scrollTop() < 45 ){
                $('#navbar').addClass('navbar-default');
            }else{
                $('#navbar').removeClass('navbar-default')
            }
        }else{
            $('#space').removeClass('d-none');
            $('#navbar').removeClass('navbar-default')
        }

        //Set logo
        if($('#navbar').hasClass('navbar-default')){
            $('#logo').attr('src','./vendors/images/logo-white.png');
        }else{
            $('#logo').attr('src','./vendors/images/logo.png')
        }
    }
    setDefault();
    $(window).resize(function(){
        setDefault();
    });        

    //Set when sroll
    $(window).scroll(function(){
        setDefault();
    })

    
    //Linkscroll
    $("#navbar a").click(function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 56,
        }, 500);
    })
})

