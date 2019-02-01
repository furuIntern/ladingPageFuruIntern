$(document).ready(function () {


  //Validation form footer
  $("#formFooter").validate({
    errorLabelContainer:"#formFooter+.box-valid",
    rules: {
      email: {
        required: true,
        email: true,
      }
    },
    messages: {
      email: {
        required: "Email is required",
        email: "Email must be like format example@domain.com"
      }
    }
  });

  //Validation form contact
  $("#formContact").validate({
    rules:{
      name:"required",
      email:{
        required: true,
        email: true
      },
      subject:"required",
      message:{
        minlength: 2,
        required:true
      }
    }
  })
  $(window).scroll(function(){
    $('#btb').toggleClass('d-none',$(window).scrollTop() <= 50);
  })
  //Back to top
  $('#btb').click(function(){
    var pos = $(window).scrollTop();

    function back(){
      if(pos <=0){
        clearInterval(scroll)
      }else{
        pos = pos - 50;
        $(window).scrollTop(pos);
      }
    }
    var scroll = setInterval(back,1);
    
  })
})
