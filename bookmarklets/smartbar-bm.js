var scriptElement = document.createElement("script");
// Enter remote js source
scriptElement.src = "";
document.body.appendChild(scriptElement);

var scriptElement = document.createElement("script");
// Jquery
scriptElement.src = "http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js";
document.body.appendChild(scriptElement);
 
linkElement = document.createElement("link");

// Enter remote css source
linkElement.href = "";

linkElement.type = "text/css";
linkElement.rel = "stylesheet";
linkElement.media = "screen";
document.getElementsByTagName("head")[0].appendChild(linkElement);