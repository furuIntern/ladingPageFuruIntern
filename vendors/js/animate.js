
AOS.init({
    once: true,
    duration: 1000
})

document.addEventListener('aos:in:line-code', ({detail}) => {
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