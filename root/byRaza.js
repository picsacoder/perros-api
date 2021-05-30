function DesactivarBoton() { 
  let botones = document.getElementsByClassName("")
}



const url_razas = {
  "Belga_malinois": "https://dog.ceo/api/breed/malinois/images/random",
  "Boxer": "https://dog.ceo/api/breed/boxer/images/random",
  "Shiba": "https://dog.ceo/api/breed/shiba/images/random",  
  "Akita": "https://dog.ceo/api/breed/akita/images/random",
  "Husky": "https://dog.ceo/api/breed/husky/images/random",
}

var url_perro = document.getElementsByClassName("perro");

var indexButton;
//La cosa mas desoptimizado que he hecho XD... No lo veas D:

function BelgaMalinois() { 
  indexButton = 0

  var id_data = document.getElementById("perros").src = "./icons/cached_black_48dp.svg"


  const coso = url_razas[url_perro[indexButton].id]

  fetch(coso)
  .then(response => response.json())
  .then(data => { 

    var id_data = document.getElementById("perros").src = data.message    
  })

  .catch(err => console.log(err))

}


function boxer() { 
  indexButton = 1

  var id_data = document.getElementById("perros").src = "./icons/cached_black_48dp.svg"

  const coso = url_razas[url_perro[indexButton].id]

  fetch(coso)
  .then(response => response.json())
  .then(data => { 

    var id_data = document.getElementById("perros").src = data.message    
  })

  .catch(err => console.log(err))

}


function shiba() { 
  indexButton = 2

  var id_data = document.getElementById("perros").src = "./icons/cached_black_48dp.svg"

  const coso = url_razas[url_perro[indexButton].id]

  fetch(coso)
  .then(response => response.json())
  .then(data => { 

    var id_data = document.getElementById("perros").src = data.message    
  })

  .catch(err => console.log(err))

  
}


function akita() { 
  indexButton = 3

  var id_data = document.getElementById("perros").src = "./icons/cached_black_48dp.svg"

  const coso = url_razas[url_perro[indexButton].id]

  fetch(coso)
  .then(response => response.json())
  .then(data => { 

    var id_data = document.getElementById("perros").src = data.message    
  })

  .catch(err => console.log(err))

  
}

function husky() { 
  indexButton = 4

  var id_data = document.getElementById("perros").src = "./icons/cached_black_48dp.svg"

  const coso = url_razas[url_perro[indexButton].id]

  fetch(coso)
  .then(response => response.json())
  .then(data => { 

    var id_data = document.getElementById("perros").src = data.message    
  })

  .catch(err => console.log(err))
}




let dark = "dark"

function darkMode(){ 
  if (dark === "dark"){
    dark = "light"
    let change_ColorTT = document.getElementsByClassName("menu-box")[0].style.backgroundColor = "#323130";
    let imagen = document.getElementById("img_dark").src = "./icons/light_mode_black_48dp.svg"
    let change_ColorT = document.getElementById("footer").style.backgroundColor = "#323130";
    let change_Color = document.body.style.backgroundColor = "#201F1E";
    let change_font_color = document.body.style.color = "#E1DFDD";
    let change_font_ul = document.getElementsByClassName("enlace")[0].style.color = "#E1DFDD";
    let change_font_ull = document.getElementsByClassName("enlace")[1].style.color = "#E1DFDD";


    let css = "li a:hover:not(.active) {background-color: #201F1E}"

    var style = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } 
    else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByClassName('enlace')[0].appendChild(style);

  }

  else { 
    dark = "dark"
    imagen = document.getElementById("img_dark").src = "./icons/dark_mode_black_48dp.svg"
    change_font_color = document.body.style.color = "#3B3A39";
    change_Color = document.body.style.backgroundColor = "#C8C6C4";
    change_ColorT = document.getElementById("footer").style.backgroundColor = "#EDEBE9";
    change_ColorTT = document.getElementsByClassName("menu-box")[0].style.backgroundColor = "#EDEBE9";
    change_font_ul = document.getElementsByClassName("enlace")[0].style.color = "#3B3A39";
    change_font_ull = document.getElementsByClassName("enlace")[1].style.color = "#3B3A39";
  
    let css = "li a:hover:not(.active) {background-color: #C9C9C9}"

    var style = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } 
    else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByClassName('enlace')[0].appendChild(style);

  
  }
}

document.getElementById("img_dark").addEventListener("click", darkMode)