var scriptElement = document.createElement("script");
// Enter remote js source
scriptElement.src = "";
document.body.appendChild(scriptElement);
 
linkElement = document.createElement("link");

// Enter remote css source
linkElement.href = "";

linkElement.type = "text/css";
linkElement.rel = "stylesheet";
linkElement.media = "screen";
document.getElementsByTagName("head")[0].appendChild(linkElement);