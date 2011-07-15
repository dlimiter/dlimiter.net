---
---

$(document).ready(function () {
  /* Apply fancybox to multiple items */
  if (document.title.search('Portfolio') != -1) {
    $("a.folio-image-wrapper").fancybox({
     'transitionIn'   : 'elastic',
     'transitionOut'  : 'elastic',
     'titleShow'      : true,
     'titlePosition' 	: 'inside',
     'cyclic'         : true,
     'showCloseButton': false,
     'showNavArrows'  : true,
     'titleFormat'    : formatTitle
    });
  }
    
  $('.error').hide();      
  // Hide any validation error elements
  
  $("input#submit-btn").click(function() {
    // Rehide error messages
    $('.error').hide();  
    var name = $("input#name").val();  
    if (name == "") {  
      $("#name-error").show();  
      $("input#name").focus();  
      return false;  
    }  
    var email = $("input#email").val();  
    if (!isValidEmail(email)) {  
      $("#email-error").show();  
      $("input#email").focus();  
      return false;  
    }  
    var message = $("textarea#message").val();  
    if (message == "") {  
      $("#message-error").show();  
      $("input#message").focus();  
      return false;  
    }
    
    // Send
    var dataString = 'name='+ name + '&email=' + email + '&message=' + message;
    //alert (dataString);return false;
    $.ajax({
      type: "POST",
      url: "/bin/mail.php",
      data: dataString,
      success: function() {
        $('#contact-form').html("<div id='success-message'></div>");
        $('#success-message').html("<p>Hey, thanks for the message!</p>").append("<p>I'll be in touch soon.</p>").hide().fadeIn(1500, function() {
          $('#message').append("Zark");
        });
      } 
    });
    return false;
  });    
    
});

function isValidEmail(email) { 
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
 return email.match(re) 
}

function formatTitle(title, currentArray, currentIndex, currentOpts) {
    return '<div id="fancybox-title"><span id="closer"><a href="javascript:;" onclick="$.fancybox.close();"><img src="/js/fancybox/closelabel.gif" /></a></span>' + (title && title.length ? '<span id="title-label">' + title + '</span>' : '' ) +  '</div>';
}

function initArchive() {
  // get querystring as an array split on "&"
  var querystring = location.search.replace( '?', '' ).split( '&' );
  // declare object
  var queryObj = {};
  // loop through each name-value pair and populate object
  for ( var i = 0; i<querystring.length; i++ ) { 
    // get name and value
    var name = querystring[i].split('=')[0];
    var value = querystring[i].split('=')[1];
    // populate object
    queryObj[name] = value;
  }
  category = queryObj[ "cat" ];
  if ( category != undefined && category.length > 0 ) {    
    filterByCategory(category);      
  }
}

function filterByCategory(className) {
  if (className === 'reset' || $("nav#post-archive-list li."+className).length == 0 ) {
    $("#post-archive-category-list a").removeClass("selected");
    $("nav#post-archive-list li").slideDown("fast");    
    $("#post-archive-category-list a."+className).addClass("selected");
  } else {
    $("#post-archive-category-list a").removeClass("selected");
    $("nav#post-archive-list li."+className).slideDown("fast");
    $("nav#post-archive-list li:not(."+className+")").slideUp("fast");
    $("#post-archive-category-list a."+className).addClass("selected");
  }  
  //
  window.location.hash="archive";
}

function toggleComments() {
  if ($("#comments").is(":visible")) {
    $("a#comment-toggle").html("Show Comments");
  } else {
    $("a#comment-toggle").html("Hide Comments");  
  }
  $("#comments").slideToggle();
}
