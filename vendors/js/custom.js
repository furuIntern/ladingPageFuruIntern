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
})
