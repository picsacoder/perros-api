function fetchh(url) {
    fetch(url)
    .then(response => response.json)
    .then(data => { 
        var id_data = document.getElementById("perros").src = data.message
      })
  
      .catch(err => console.log(err))
}



function elegirRaza() { 

  

    let tipo_raza = "" //variable que cambie cuando se escoge una raza
  
    const url_razas = {
      "Belga_malinois": "https://dog.ceo/api/breed/malinois/images/random",
      "Boxer": "https://dog.ceo/api/breed/boxer/images/random",
      "Shiba": "https://dog.ceo/api/breed/shiba/images/random",  
      "Chihuahua": "https://dog.ceo/api/breed/chihuahua/images/random",
      "Akita": "https://dog.ceo/api/breed/akita/images/random",
      "Husky": "https://dog.ceo/api/breed/husky/images/random",
    }
  
    
  

  
    var perrosRazas = []
  
    var check = document.getElementById("Belga_malinois")
  
    check.addEventListener("change", function() { 
      if (this.checked) { 
        let a = check.name
        tipo_raza = check.name
        console.log(url_razas[tipo_raza])
      }
    });
  
    let url_raza = url_razas[tipo_raza]

    console.log(url_raza)

    fetchh(url_raza)
}
  
var boton = document.getElementById("buscar")

boton.addEventListener("click", elegirRaza)