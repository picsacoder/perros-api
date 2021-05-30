var imagen_opacidad = document.getElementById("imagen_perro").style.opacity = 0 



/*

*/

function ChangeImage() {
  var imagen_opacidad = document.getElementById("imagen_perro").style.opacity = 1

  var id_data = document.getElementById("imagen_perro").src = "./icons/cached_black_48dp.svg"

  const url = "https://dog.ceo/api/breeds/image/random"

  let boton = document.getElementById("SearchDog")

  boton.setAttribute("disabled", "")

  fetch(url)
    .then(response => response.json())
    .then(data => { 

      var id_data = document.getElementById("imagen_perro").src = data.message
      setTimeout(function() 
      {boton.removeAttribute("disabled", "")
  
      }, 1000)
      
    })
  
    .catch(err => console.log(err))
  
  
}
let dark = "dark"

function darkMode(){ 
  if (dark === "dark"){
    dark = "light"
    let imagen = document.getElementById("img_dark").src = "./icons/light_mode_black_48dp.svg"

    let change_Color = document.body.style.backgroundColor = "#201F1E";
    
    
    let change_ColorT = document.getElementById("footer").style.backgroundColor = "#323130";
    let change_ColorTT = document.getElementsByClassName("menu-box")[0].style.backgroundColor = "#323130";


    let change_font_ul = document.getElementsByClassName("enlace")[0].style.color = "#E1DFDD";
    let change_font_ull = document.getElementsByClassName("enlace")[1].style.color = "#E1DFDD"; //Me da flojera usar un for
    
    
    let change_font_color = document.body.style.color = "#E1DFDD";

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

    change_Color = document.body.style.backgroundColor = "#C8C6C4";
    change_ColorT = document.getElementById("footer").style.backgroundColor = "#EDEBE9";
    change_ColorTT = document.getElementsByClassName("menu-box")[0].style.backgroundColor = "#EDEBE9";
    
    change_font_color = document.body.style.color = "#3B3A39";

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


document.getElementById("SearchDog").addEventListener("click", ChangeImage)



document.getElementById("img_dark").addEventListener("click", darkMode)
