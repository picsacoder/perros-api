var imagen_opacidad = document.getElementById("imagen_perro").style.opacity = 0

function downloadImage(url_image) { 

}
/*

*/

function ChangeImage() {
  var imagen_opacidad = document.getElementById("imagen_perro").style.opacity = 1

  var id_data = document.getElementById("imagen_perro").src = "https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"

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



document.getElementById("SearchDog").addEventListener("click", ChangeImage)

function elegirRaza() { 

  

  let tipo_raza = "Boxer" //variable que cambie cuando se escoge una raza

  const url_razas = {
    "Belga-malinois": "https://dog.ceo/api/breed/malinois/images/random",
    "Boxer": "https://dog.ceo/api/breed/boxer/images/random",
    "Shiba": "https://dog.ceo/api/breed/shiba/images/random",  
    "Chihuahua": "https://dog.ceo/api/breed/chihuahua/images/random",
    "Akita": "https://dog.ceo/api/breed/akita/images/random",
    "Husky": "https://dog.ceo/api/breed/husky/images/random",
  }

  var url_raza = url_razas[tipo_raza]; //Url de la imagen a fetch



  fetch(url_raza)
    .then(response => response.json())
    .then(data => { 
      var id_data = document.getElementById("perro_esp").src = data.message
    })

    .catch(err => console.log(err))
}

elegirRaza()

var imagen = "to_oscuro"

function darkMode() {

  if (imagen == "to_oscuro") { 
    var img_ = document.getElementById("img_dark").src = "";
  }

  else { 
    
  }

}