$(document).ready(function () {


  //Validation
  $("form").each(function () {
    $(this).validate({
      debug:true,
      rules: {
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        email: {
          required: "Email is required",
          email: "Email must be in the format of name@domain.com"
        }
      }
    });
  })
})
