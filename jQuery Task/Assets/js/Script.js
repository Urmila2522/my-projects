$(document).ready(function() {
  $('#usernamecheck').hide();
  $('#mailcheck').hide();
  $('#phonenocheck').hide();
  $('#addresscheck').hide();

  var user_err = true;
  var mail_err = true;
  var phone_err = true;
  var add_err = true;

  //username validation start
  $('#your-name').keyup(function() {
      username_check();

  })

  function username_check() {
      var user_val = $('#your-name').val();

      if (user_val.length == '') {
          $('#usernamecheck').show();
          $('#usernamecheck').html("Please fill the username");
          $('#usernamecheck').focus();
          $('#usernamecheck').css("color", "red");
          user_err = false;
          return false;
      } else {
          $('#usernamecheck').hide();
      }

      if ((user_val.length < 3) || (user_val.length > 30)) {
          $('#usernamecheck').show();
          $('#usernamecheck').html("user length must be between 3 to 10");
          $('#usernamecheck').focus();
          $('#usernamecheck').css("color", "red");
          user_err = false;
          return false;
      } else {
          $('#usernamecheck').hide();
      }
  }
  //username validation End

  //E-mail validation strat
  $('#your-mailid').keyup(function() {
      usermail_check();
  })

  function usermail_check() {
      var email_val = $('#your-mailid').val();


      if (email_val.length == '') {
          $('#mailcheck').show();
          $('#mailcheck').html("Please fill the user mail-id");
          $('#mailcheck').focus();
          $('#mailcheck').css("color", "red");
          mail_err = false;
          return false;
      } else {
          $('#mailcheck').hide();
      }

      if ((email_val.length < 3) || (email_val.length > 30)) {
          $('#mailcheck').show();
          $('#mailcheck').html("Please fill the currect mail-id");
          $('#mailcheck').focus();
          $('#mailcheck').css("color", "red");
          mail_err = false;
          return false;
      } else {
          $('#mailcheck').hide();
      }
  }
  //E-mail validation End

  //Phone no. validation start
  $('#contact-no').keyup(function() {
      userphoneno_check();
  })

  function  userphoneno_check() {
      var phone_val = $('#contact-no').val();


      if (phone_val.length == '') {
          $('#phonenocheck').show();
          $('#phonenocheck').html("Please fill the Phone no.");
          $('#phonenocheck').focus();
          $('#phonenocheck').css("color", "red");
          phone_err = false;
          return false;
      } else {
          $('#phonenocheck').hide();
      }

      if ((phone_val.length < 10) || (phone_val.length > 10)) {
          $('#phonenocheck').show();
          $('#phonenocheck').html("Please check the no.");
          $('#phonenocheck').focus();
          $('#phonenocheck').css("color", "red");
          phone_err = false;
          return false;
      } else {
          $('#phonenocheck').hide();
      }
  }
  //Phone no. validation End

  //Address validation start     
  $('#your-address').keyup(function() {
    useraddress_check();

})

function useraddress_check() {
    var address_val = $('#your-address').val();

    if (address_val.length == '') {
        $('#addresscheck').show();
        $('#addresscheck').html("Please Fill your Address");
        $('#addresscheck').focus();
        $('#addresscheck').css("color", "red");
        add_err = false;
        return false;
    } else {
        $('#addresscheck').hide();
    }

    if ((address_val.length < 10) || (address_val.length > 100)) {
        $('#addresscheck').show();
        $('#addresscheck').html("Address length must be between 10 to 100");
        $('#addresscheck').focus();
        $('#addresscheck').css("color", "red");
        add_err = false;
        return false;
    } else {
        $('#addresscheck').hide();
    }
}
  //Address validation End

  //button validation start
  
     $('#btn-ton').click(function(){
        //$("form").append();

       user_err = true;
      mail_err = true;
       phone_err = true;
       add_err = true;

       username_check();
       usermail_check();
       userphoneno_check();
       useraddress_check();

      if((user_err == true) && (mail_err == true) && (phone_err == true) && (add_err == true) ){
        return true;

      }else{
        return false;
      }
          
    });

  //button validation end

  //Add button validatioin

//   $('#add-btn').click(function(){
//   var formNum = 10;

//   for (var i=0; i<formNum ;i++){
//     var inputSet =$('.duplicate-row:first').clone();

//     inputSet.find ('.duplicate-row').val('');

//     inputSet.insertAfter('.duplicate-row:last');
//   }
//   });

$('#add-btn').click(function(){

    // Create clone of <div class='input-form'>
    var newel = $('.duplicate-row:last').clone();

    // Add after last <div class='input-form'>
    $(newel).insertAfter(".duplicate-row:last");
});

});
