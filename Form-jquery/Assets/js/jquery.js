$(document).ready(function() {

    $('.namecheck').hide();
    $('.emailcheck').hide();
    $('.phonecheck').hide();
    $('.addresscheck').hide();

    var user_err = true;
    var mail_err = true;
    var phone_err = true;
    var add_err = true;


    //username validation start
    $('.form-name').keyup(function() {
        username_check();

    })

    function username_check() {
        var user_val = $('.form-name').val();

        if (user_val.length == '') {
            $('.namecheck').show();
            $('.namecheck').html("Please fill the username");
            $('.namecheck').focus();
            $('.namecheck').css("color", "red");
            user_err = false;
            return false;
        } else {
            $('.namecheck').hide();
        }

        if ((user_val.length < 3) || (user_val.length > 30)) {
            $('.namecheck').show();
            $('.namecheck').html("user length must be between 3 to 10");
            $('.namecheck').focus();
            $('.namecheck').css("color", "red");
            user_err = false;
            return false;
        } else {
            $('.namecheck').hide();
        }
    }
    //username validation End

    //E-mail validation strat
    $('.form-mailid').keyup(function() {
        usermail_check();
    })

    function usermail_check() {
        var email_val = $('.form-mailid').val();


        if (email_val.length == '') {
            $('.emailcheck').show();
            $('.emailcheck').html("Please fill the user mail-id");
            $('.emailcheck').focus();
            $('.emailcheck').css("color", "red");
            mail_err = false;
            return false;
        } else {
            $('.emailcheck').hide();
        }

        if ((email_val.length < 3) || (email_val.length > 30)) {
            $('.emailcheck').show();
            $('.emailcheck').html("Please fill the currect mail-id");
            $('.emailcheck').focus();
            $('.emailcheck').css("color", "red");
            mail_err = false;
            return false;
        } else {
            $('.emailcheck').hide();
        }
    }
    //E-mail validation End

    //Phone no. validation start
    $('.form-contact-no').keyup(function() {
        userphoneno_check();
    })

    function userphoneno_check() {
        var phone_val = $('.form-contact-no').val();


        if (phone_val.length == '') {
            $('.phonecheck').show();
            $('.phonecheck').html("Please fill the Phone no.");
            $('.phonecheck').focus();
            $('.phonecheck').css("color", "red");
            phone_err = false;
            return false;
        } else {
            $('.phonecheck').hide();
        }

        if ((phone_val.length < 10) || (phone_val.length > 10)) {
            $('.phonecheck').show();
            $('.phonecheck').html("Please check the no.");
            $('.phonecheck').focus();
            $('.phonecheck').css("color", "red");
            phone_err = false;
            return false;
        } else {
            $('.phonecheck').hide();
        }
    }
    //Phone no. validation End

    //Address validation start     
    $('.form-address').keyup(function() {
        useraddress_check();

    })

    function useraddress_check() {
        var address_val = $('.form-address').val();

        if (address_val.length == '') {
            $('.addresscheck').show();
            $('.addresscheck').html("Please Fill your Address");
            $('.addresscheck').focus();
            $('.addresscheck').css("color", "red");
            add_err = false;
            return false;
        } else {
            $('.addresscheck').hide();
        }

        if ((address_val.length < 10) || (address_val.length > 100)) {
            $('.addresscheck').show();
            $('.addresscheck').html("Address length must be between 10 to 100");
            $('.addresscheck').focus();
            $('.addresscheck').css("color", "red");
            add_err = false;
            return false;
        } else {
            $('.addresscheck').hide();
        }
    }
    //Address validation End

    //button validation start

    $('#btn-ton').click(function() {
    console.log("hello");
        //$("form").append();

        user_err = true;
        mail_err = true;
        phone_err = true;
        add_err = true;

        username_check();
        usermail_check();
        userphoneno_check();
        useraddress_check();

        if ((user_err == true) && (mail_err == true) && (phone_err == true) && (add_err == true)) {
            return true;

        } else {
            return false;
        }

    });

    //button validation end


    var maxGroup = 10;

    $(".addMore").click(function() {
        if ($('body').find('.fieldGroup').length < maxGroup) {
            var fieldHTML = '<div class="form-group fieldGroup">' + $(".fieldGroupCopy").html() + '</div>';
            $('body').find('.fieldGroup:last').after(fieldHTML);
        } else {
            alert('Maximum ' + maxGroup + ' groups are allowed.');
        }
    });

    $("body").on("click", ".remove", function() {
        $(this).parents(".fieldGroup").remove();
    });
});