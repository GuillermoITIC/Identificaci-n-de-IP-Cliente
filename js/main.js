//alert ("Hola mundo");
let ip=document.getElementById("ip");
let pais=document.getElementById("pais");
let continente=document.getElementById("continente");
let zona_horaria=document.getElementById("zona_horaria");


// Hacer una petición para un usuario con ID especifico
const SolicitudAPI = () => {
  console.log('La página se ha cargado o actualizado.');
  
  // Tu código aquí
};
axios.get('https://iot-mhag-01.000webhostapp.com/php-geoip-api/index.php')
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response.data);
    ip.innerHTML = response.data.ip;
    pais.innerHTML = response.data.pais;
    continente.innerHTML = response.data.continente;
    zona_horaria.innerHTML = response.data.zona_horaria;
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });

  // Llama al enevento LOAD cada vez que se refesca o se actualiza la página
  // Y llama a la función SolicitudAPI que tiene la rutina de llamar a la API
  // desde Axios
  window.addEventListener('load', SolicitudAPI);
