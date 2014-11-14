$(function() {
	var $globalBar = $( ".global-bar");
  var $smartBar = $(".notification");

	if($globalBar.length > 0) {
	    window.globalBar = $globalBar.clone();
	    $globalBar.remove();
    	newbar();
      $smartBar.addClass('white');
  }

  else if(($smartBar).hasClass('white')) {
      $smartBar.addClass('tan');
    }

  else if(($smartBar).hasClass('tan')) {
      $smartBar.addClass('sky');
    }
  
  else {
    $('.notification').remove();
    $('body').prepend(window.globalBar);
  }


function newbar() {
    $("body").prepend(
     "<div class='notification'><a class='notification__info' href='#'>Read the ePaper edition. The complete print edition, in its exact layout. Browse the print edition page by page, including stories and ads.</a><button class='notification__toggle'><svg class='icon-close'><use xlink:href='#icon-close' /></svg></button></div>");
     $("body").append(
     "<svg display='none' xmlns='http://www.w3.org/2000/svg'><defs><symbol id='icon-close' viewBox='0 0 100 100'><path d='M76.83,32.561L59.392,50L76.83,67.439c2.594,2.594,2.594,6.798,0,9.392 c-1.296,1.296-2.995,1.945-4.694,1.945c-1.7,0-3.399-0.648-4.695-1.945L50,59.391l-17.44,17.44 c-1.296,1.296-2.995,1.945-4.695,1.945c-1.699,0-3.397-0.648-4.694-1.945c-2.594-2.593-2.594-6.797,0-9.392L40.608,50L23.17,32.561 c-2.594-2.594-2.594-6.798,0-9.392c2.593-2.592,6.795-2.592,9.389,0L50,40.609l17.44-17.44c2.594-2.592,6.796-2.592,9.389,0C79.424,25.763,79.424,29.967,76.83,32.561z'></path></symbol></defs></svg>")
  
    $('.notification__toggle').click(function() {

      $('.notification').slideToggle('300');

      return false;

  });
  }
  
   

});