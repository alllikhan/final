$(document).ready(function() {
$("#register").click(function() {
var name = $("#name").val();
var password = $("#password").val();
var cpassword = $("#cpassword").val();
if (name == '') {
$("#error").html("The username can not be empty.");
}
 if ((password.length) > 15) {
alert("Too long password");
}
 if (!(password).match(cpassword)) {
$("#error1").html("Password is not confirmed.");
} else {
$.post("register.php", {
name1: name,
password1: password
}, function(data) {
if (data == 'You have Successfully Registered.....') {
$("form")[0].reset();
}
alert(data);
});
}
});
});
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$('body').on('click', '.password-checkbox', function(){
	if ($(this).is(':checked')){
		$('#password').attr('type', 'text');
	} else {
		$('#password').attr('type', 'password');
	}
	if ($(this).is(':checked')){
		$('#cpassword').attr('type', 'text');
	} else {
		$('#cpassword').attr('type', 'password');
	}
});
$( "#btn1" ).click(function() {
  $( "#registrate" ).animate({
   width: "1000px",
   height: "700px",
    }, 1500 );
});

$( "#btn2" ).click(function() {
  $( "#registrate" ).animate({
   width: "320px",
   height: "610px",
    }, 1500 );
});
document.getElementById("music").addEventListener("mouseover", function() {
  var audio = new Audio();
  audio.src = 'Soul Of Water.mp3';
  audio.autoplay = true;
});
