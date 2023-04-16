let seleccionaDigimon = () => {
    let opcionDigimon = document.getElementById("eligeDigimon");
    let nombreDig = opcionDigimon.value;
    let endpoint = 'https://digimon-api.vercel.app/api/digimon/name/'+nombreDig;
    fetch(endpoint)
    .then(response => response.json())
    .then(datos => {
        console.log(datos)
        let nombreDigimon = datos[0].name;
        let nivelDigimon = datos[0].level;
        let imagenDigimon = datos[0].img;

        let elNombr = document.getElementById("nombreDigimon");
        elNombr.innerHTML = nombreDigimon;
        let level = document.getElementById("levelDigimon");
        level.innerHTML = nivelDigimon;
        let imagen = document.getElementById("imagenDeDigimon");
        imagen.src = imagenDigimon;
    })
}

function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
      text = "Cookies are enabled.";
    } else {
      text = "Cookies are not enabled.";
    }
    document.getElementById("demo").innerHTML = text;
  }