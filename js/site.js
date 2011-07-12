$(document).ready(function () {
  /* Apply fancybox to multiple items */
  console.log(">>"+document.title);
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
});

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
