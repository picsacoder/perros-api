
function a(){ 
    
    var img_src = new XMLHttpRequest()
    img_src.addEventListener("load", reqListener);
    img_src.open("GET", "https://dog.ceo/api/breeds/image/random")
    
    var x = document.getElementById("perro").src = x
}

function reqListener () {
    console.log(this.responseText);
  }
  
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://dog.ceo/api/breeds/image/random");
oReq.send();