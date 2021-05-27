function fetchh(url) {
    fetch(url)
    .then(response => response.json)
    .then(data => { 
        var id_data = document.getElementById("perros").src = data.message
      })
  
      .catch(err => console.log(err))
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
// La cosa mas desoptimizado que he hecho XD... No lo veas D:

function BelgaMalinois() { 
  indexButton = 0
  console.log(url_perro[indexButton].id)

}


function boxer() { 
  indexButton = 1
  console.log(url_perro[indexButton].id)

}


function shiba() { 
  indexButton = 2
  console.log(url_perro[indexButton].id)

  
}


function akita() { 
  indexButton = 3
  console.log(url_perro[indexButton].id)

  
}

function husky() { 
  indexButton = 4
  console.log(url_perro[indexButton].id)
}

function elegirRaza() { 



    let tipo_raza = "" //variable que cambie cuando se escoge una raza
  

    
    
    console.log(indexButton)

   
}




