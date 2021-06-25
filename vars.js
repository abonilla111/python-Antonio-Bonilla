var nombre = "abonilla"
var email = "zS180213556@estudiantes.uv.mx"
var edad = 21

function getNombre() {
   console.log (nombre);
   // accesamos al DOM
   var myNameElement = document.getElementById ("nombre");
   // myNameElement es un div
   myNameElement.innerHTML = '<b>' + nombre + '</b>';
}

function getEmail() {
   console.log (email);
   // accesamos al DOM
   var myEmailElement = document.getElementById ("email");
   // myEmailElement es un div
   myEmailElement.innerHTML = '<H3>' + email + '</H3>';
   
}

function getEdad() {
   console.log (edad);
   // accesamos al DOM
   var myEdadElement = document.getElementById ("edad");
   // myEdadElement es un div
   myEdadElement.innerHTML = '<H1>' + edad + '</H1>';
   // RGB Red Green Blue (RRGGBB)
   myEdadElement.style.color = "#FF00FF";
}
