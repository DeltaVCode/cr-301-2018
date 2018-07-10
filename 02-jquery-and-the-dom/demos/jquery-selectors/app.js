$(document).ready(function() {

  //Find by tag and add a class
  $("h1").addClass("NewClass");

  //Find by class and remove a class
  $(".NewClass").removeClass("NewClass");

  $("li").addClass("nav-link");

  //Find by id and remove a class
  $("#home").removeClass("nav-link");

  //Find by parent child selector and change color
  $("#beautiful-list li").css("color","blue");

  //Find by attribute
  $('input[type="text"]').addClass;

  //get text of an element
  var headingText = $("h1").text();

  //set text of an element
  $("h2").text(headingText);

  //remove an element
  //$("button").remove();

  //add a new LI
  var $newListItem = $(".li-template").clone();
  $newListItem.text("And we can clone them");
  $("ul").append($newListItem);

  //get the data- attribute of an element
  var $liDataAtt = $("#home").data();
  console.log($liDataAtt);

  //target element with certain data attribute
  //$("li[data-category='list-item']").hide();

  // .each similar to a for loop
  $("li").each(function() {
    console.log($(this).text());
  })


  /* rewrapping a jQuery object doesn't hurt, however....it's unnecesary */
  var target = $('.target');
  // ... some code here
  var $target = $(target);
  // source: https://css-tricks.com/snippets/jquery/smooth-scrolling/  
});