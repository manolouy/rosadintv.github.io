$(function() {
  
  
$('nav a').click(function() { 
  var $linkClicked = $(this).attr('href');
document.location.hash = $linkClicked;
  if (!$(this).hasClass("active")) {
    $("nav a").removeClass("active");
    $(this).addClass("active");
    $('#ajax-main-content section').hide();
    $($linkClicked).fadeIn();
  
  
  var $nombre_categoria = capitalizeFirstLetter($linkClicked.slice(1))
  document.getElementById("titulo_actual").innerHTML = $nombre_categoria;
  
CerrarBarraNavegacion();
  
    return false;
  }
  else {    
    CerrarBarraNavegacion();
	  return false;
  }
});


var hash = window.location.hash;
hash = hash.replace(/^#/, '');
switch (hash) {
    case 'inicio' :
      $("#" + hash + "-link").trigger("click");
      break;
    case 'descarga' :
      $("#" + hash + "-link").trigger("click");
      break;
    case 'plugins' :
      $("#" + hash + "-link").trigger("click");
      break;
          case 'acerca' :
      $("#" + hash + "-link").trigger("click");
      break;
          case 'ayuda' :
      $("#" + hash + "-link").trigger("click");
      break;
}



 var oldLocation = location.href;
 setInterval(function() {
      if(location.href != oldLocation) {
           oldLocation = location.href
           // CAMBIO LA URL, 
           var hash = window.location.hash;
hash = hash.replace(/^#/, '');
switch (hash) {
    case 'inicio' :
      $("#" + hash + "-link").trigger("click");
      break;
    case 'descarga' :
      $("#" + hash + "-link").trigger("click");
      break;
    case 'plugins' :
      $("#" + hash + "-link").trigger("click");
      break;
          case 'acerca' :
      $("#" + hash + "-link").trigger("click");
      break;
          case 'ayuda' :
      $("#" + hash + "-link").trigger("click");
      break;
}
           //
      }
  }, 100); // TIMER (MS)
  
  
  function CerrarBarraNavegacion() {

    var isMobileVersion = document.getElementsByClassName('mdl-layout__obfuscator is-visible');
if (isMobileVersion.length > 0) {
  var d = document.querySelector('.mdl-layout');
  d.MaterialLayout.toggleDrawer();
}
  
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


});