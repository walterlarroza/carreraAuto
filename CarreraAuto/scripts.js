/*
// Paso 1
var car1 = document.querySelector("#car1");
var car2 = document.querySelector("#car2");

// Paso 2
var car1Distance = 0;
var car2Distance = 0;

// Paso 3
window.addEventListener("keyup", function(event) {
  // Paso 4a
  if (event.key === "ArrowRight") {
    car1Distance += 10;
    car1.style.marginLeft = car1Distance + "px";

    // Paso 4c
    if (car1Distance >= (800 - 100)) {
      alert("¡El vehículo 1 ha ganado la carrera!");
    }
  } else if (event.key === "ArrowLeft") {
    car2Distance += 10;
    car2.style.marginLeft = car2Distance + "px";

    // Paso 4c
    if (car2Distance >= (800 - 100)) {
      alert("¡El vehículo 2 ha ganado la carrera!");
    }
  }
});
*/
// Paso 1
var car1 = document.querySelector("#car1");
var car2 = document.querySelector("#car2");

// Paso 2
var car1Distance = 0;
var car2Distance = 10; // Ajusta la distancia inicial del segundo auto para separarlos

// Paso 3
window.addEventListener("keyup", function(event) {
  // Paso 4a
  if (event.key === "ArrowRight") {
    car1Distance += 10;
    car1.style.marginLeft = car1Distance + "px";

    // Paso 4c
    if (car1Distance >= (800 - 100)) {
      alert("¡El vehículo 1 ha ganado la carrera!");
    }
  } else if (event.key === "ArrowLeft") {
    car2Distance += 10;
    car2.style.marginLeft = car2Distance + "px";

    // Paso 4c
    if (car2Distance >= (800 - 100)) {
      alert("¡El vehículo 2 ha ganado la carrera!");
    }
  }
});
