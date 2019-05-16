$(document).ready(function() {
  $(".header").height($(window).height());
});

$("#moreInfo").on("click", alertUser);
$("#submit").on("click", alertUser);

function alertUser() {
  event.preventDefault();
  alert(
    "Oops! This page is just a demo. But if you look in the footer, I have attached some ways to get ahold of me :)"
  );
}
