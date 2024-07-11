import Persona from "./Persona.js";
import Calculador from "./Calculador.js";

let calc = new Calculador();

let mary = new Persona("Mary", 150);
let jose = new Persona("José", 135);
let carlos = new Persona("Carlos", 160);
let pedro = new Persona("Pedro", 75);

calc.procesarPer(mary);
calc.procesarPer(jose);
calc.procesarPer(carlos);
calc.procesarPer(pedro);

let salida = document.getElementById("salida");

salida.innerHTML = "Monto del ingreso menor: " + calc.menor + "$";
salida.innerHTML += "<br>Ingreso promedio: " + calc.promedio();

