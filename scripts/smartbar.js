$(function() {
  
  var $globalBar = $( ".global-bar");
  
  if($globalBar.length > 0) {
    window.globalBar = $globalBar.clone();
    $globalBar.remove();
    addNewStuff();
  } else {
    $('.notification').remove();
    $('body').prepend(window.globalBar);
  }
  
  
  function addNewStuff() {
    $("body").prepend(
     "<div class='notification'a><a class='notification__info' href='#'>Read the ePaper edition. The complete print edition, in its exact layout. Browse the print edition page by page, including stories and ads.</a><button class='notification__toggle'><svg class='icon-close'><use xlink:href='#icon-close' /></svg></button></div>");
  
     $("body").append(
     "<svg display='none' xmlns='http://www.w3.org/2000/svg'><defs><symbol id='icon-close' viewBox='0 0 100 100'><path d='M76.83,32.561L59.392,50L76.83,67.439c2.594,2.594,2.594,6.798,0,9.392 c-1.296,1.296-2.995,1.945-4.694,1.945c-1.7,0-3.399-0.648-4.695-1.945L50,59.391l-17.44,17.44 c-1.296,1.296-2.995,1.945-4.695,1.945c-1.699,0-3.397-0.648-4.694-1.945c-2.594-2.593-2.594-6.797,0-9.392L40.608,50L23.17,32.561 c-2.594-2.594-2.594-6.798,0-9.392c2.593-2.592,6.795-2.592,9.389,0L50,40.609l17.44-17.44c2.594-2.592,6.796-2.592,9.389,0C79.424,25.763,79.424,29.967,76.83,32.561z'></path></symbol></defs></svg>");

   $(".notification")
      .css({
         'position': 'relative',
         'padding' : '1em',
         'box-shadow': '#ccc 0 -7px 9px -7px inset',
         '-webkit-box-shadow': '#ccc 0 -7px 9px -7px inset',
         'font-size': '1.5rem',
         'text-align': 'center'
      });
    
  $("a.notification__info")
      .css({
         'display': 'inline-block',
          'color': '#444444',
          'text-decoration': 'none',
          'line-height': '1.5em',
          'font-family': 'helvetica',
          'font-weight': 'bold',
          'font-size': '0.8em',
          'padding-left': '2em',
          'padding-right': '2em'
      });
  
    $("a.notification__info").mouseenter(function() {
    $(this).css("color", "#9b1418");
}).mouseleave(function() {
     $(this).css("color", "#444444");
});
 
 
  
    $("button.notification__toggle")
      .css({
      'position': 'absolute',
       'right': '0.5em',
        'top': '1em',
        'border': '0',
        'background-color': 'transparent'
      });
  
      $(".icon-close")
      .css({
         'width': '2.5em',
        'height': '2em',
        'fill': '#cccccc',
        'cursor': 'pointer'
      });
  
  $(".icon-close").mouseenter(function() {
    $(this).css("fill", "black");
}).mouseleave(function() {
     $(this).css("fill", "#cccccc");
});
  
  
    $('.notification__toggle').click(function() {

      $('.notification').slideToggle('300');

      return false;

  });
  }
  
   

});