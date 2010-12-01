$(document).ready(function () {
  
});

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
  if ( category == undefined || category.length > 0 ) {
        filterByCategory(category);      
  }
}

function filterByCategory(className) {
  if (className === 'reset' || $("nav#post-archive-list li."+className).length == 0 ) {
    $("nav#post-archive-list li").slideDown("fast");    
  } else {
    $("nav#post-archive-list li."+className).slideDown("fast");
    $("nav#post-archive-list li:not(."+className+")").slideUp("fast");
  }  
}

function toggleComments() {
  if ($("#comments").is(":visible")) {
    $("a#comment-toggle").text("Show Comments");
  } else {
    $("a#comment-toggle").text("Hide Comments");  
  }
  $("#comments").slideToggle();
}
