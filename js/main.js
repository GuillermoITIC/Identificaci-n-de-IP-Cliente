//alert ("Hola mundo");
let IP=document.getElementById("IP");
let Pais=document.getElementById("Pais");
let Continente=document.getElementById("Continente");
let zona_horaria=document.getElementById("zona_horaria");


// Hacer una petición para un usuario con ID especifico
const SolicitudAPI = () => {
  console.log('La página se ha cargado o actualizado.');
  
  // Tu código aquí
};
axios.get('la url del trabajo 2.4')
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response.data);
    IP.innerHTML = response.data.IP;
    Pais.innerHTML = response.data.Pais;
    Continente.innerHTML = response.data.Continente;
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
