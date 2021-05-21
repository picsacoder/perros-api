function ChangeImage() {
  const url = "https://dog.ceo/api/breeds/image/random"

  fetch(url)
    .then(response => response.json())
    .then(data => { 
      
      var id_data = document.getElementById("imagen_perro").src = data.message
      
    })
  
  
    .catch(err => console.log(err))

}


ChangeImage()



function elegirRaza() { 



  let tipo_raza = "Belga-malinois" //variable que cambie cuando se escoge una raza

  const url_razas = {
    "Belga-malinois": "https://dog.ceo/api/breed/malinois/images/random",
    "Boxer": "https://dog.ceo/api/breed/boxer/images/random",
    "Shiba": "https://dog.ceo/api/breed/shiba/images/random",  
    "Chihuahua": "https://dog.ceo/api/breed/chihuahua/images/random",
    "Akita": "https://dog.ceo/api/breed/akita/images/random",
    "Husky": "https://dog.ceo/api/breed/Husky/images/random",
  

  }

  var url_raza = url_razas[tipo_raza]; //Url de la imagen a fetch

  console.log(url_raza)


  fetch(url_raza)
    .then(response => response.json())
    .then(data => { 
      var id_data = document.getElementById("perro_esp").src = data.message
    })


    .catch(err => console.log(err))
}

elegirRaza()