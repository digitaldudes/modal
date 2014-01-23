$(document).ready(function(){
  $(".client").click(function(){
    $("#fb-login, .client-login").fadeIn(600);
    $(".new-password-sucess, .registration-sucess, .lost-password, .client-registration, #landlord-account").fadeOut(1);
  });
  $(".new-account").click(function(){
    $("#fb-login, .client-login").fadeOut(100);
    $(".client-registration").fadeIn(600);
  });
  /*$("#register").click(function(){
    $(".client-registration").fadeOut(100);
    $(".registration-sucess").fadeIn(600);
  });*/
  $(".new-password").click(function(){
    $("#fb-login, .client-login, #landlord-account").fadeOut(100);
    $(".lost-password").fadeIn(600);
  });
  /*$("#send-password").click(function(){
    $(".lost-password").fadeOut(100);
    $(".new-password-sucess").fadeIn(600);
  });*/
});

$(document).ready(function(){
  $(".landlord").click(function(){
    $("#landlord-account").fadeIn(600);
    $("#fb-login, .client-login, .client-registration, .lost-password").fadeOut(100);
  });
});  