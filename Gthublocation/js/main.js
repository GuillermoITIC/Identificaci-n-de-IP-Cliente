//alert ("Hola mundo");

// Hacer una petición para un usuario con ID especifico
axios.get('la url del trabajo 2.4')
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });