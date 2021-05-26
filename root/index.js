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



document.getElementById("SearchDog").addEventListener("click", ChangeImage)



document.getElementById("img_dark").addEventListener("click", darkMode)
