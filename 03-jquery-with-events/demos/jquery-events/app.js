'use strict';

/* CODE REVIEW: Implement forEach! */

Array.prototype.forEach2 = function(callback) {
  var currentArray = this;

  for (let i = 0; i < currentArray.length; i++) {
    let currentElement = currentArray[i];

    callback(currentElement);
  }
};

[1,2,3].forEach2(function (n) {
  console.log(n);
});

$(document).ready(function() {
  // TAB BEHAVIOR

  // Hide Tab Content At Start
  $(".tab-content").hide();

  var tabCount = $(".tab-content").length; // number

  // Show correct tab on nav click
  $("nav a").on("click", function() {
    //Hide Tab content again so that we don't show everything if click both tabs
    //$(".tab-content").hide();
    
    //SlideUp tab content rather than just hide
    //$(".tab-content").slideUp();
    
    //FadeOut tab content rather that just hide
    $(".tab-content").fadeOut();
    
    // Slide toggle all tab-content sections
    //$(".tab-content").slideToggle();

    //Grab value of data-tab from clicked link
    let $clickedTab = $(this);
    let activeTab = $clickedTab.data("tab");

    //Find ELement with ID of activeTab and show it
    //$("#" + activeTab).show();

    //SlideDown tab content
    //$("#" + activeTab).slideDown();

    //Fade In tab content
    $("#" + activeTab).fadeIn();

  })
  
  //Select Box Image - OnChange handler
  $("select[name='icecream']").on("change", function() {
    // Get flavor name by grabbing value of selected option
    let flavor = $(this).val();

    $("img").hide();
    //Show image based on data-flavor attribute
    // $("img[data-flavor='" + flavor + "']").show();
    $(`img[data-flavor='${flavor}']`).show();
  })

  // Menu item cloned and appended on click 
  $('button[name="adder1"]').on('click', function(event) {
    event.preventDefault();

    // Grab and clone first menu item
    let $newMenu1 = $('#menu1 li:first').clone();

    // Appending new menu item to the end of the menu
    $('#menu1').append($newMenu1);
  })

  //Checkbox handler change event
  $('input[name="check"]').on('change', function() {
    let $checkbox = $(this);
    $("#checked-state").html(".attr('checked'): " + $checkbox.attr('checked') + "<br />.prop('checked'): " + $checkbox.prop('checked'));
  })

  //Animate
  $(".trigger-animate").on("click", function() {
    $(".animated-box").animate({
      left: "+=50",
      top: "+=20",
      opacity: "0.5"
    }, 2500, function() {
      //Animation Complete
      console.log("finished!");
    });
  })
})



