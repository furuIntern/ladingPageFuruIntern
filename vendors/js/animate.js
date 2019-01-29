
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