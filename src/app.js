/* eslint-disable */
/*import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/


/*function Excuse (who, action, what, when) {
  //for (let i = 0; i < 5; i ++) 
  return (who + " " + action + " " + what + " " + when);  

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

console.log(Excuse);

}*/

function generadorExcusas() {

  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action = ['ate', 'peed', 'crushed', 'broke'];
  const what = ['my homework', 'my phone', 'the car'];
  const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  function posicionAleatoria(arrayLongitud) {

    const NumberRandom = Math.floor(Math.random() * arrayLongitud.length);
    return NumberRandom;
  }

  const posicionWho = posicionAleatoria(who);
  const posicionAction = posicionAleatoria(action);
  const posicionWhat = posicionAleatoria(what);
  const posicionWhen = posicionAleatoria(when);

  return (
    who[posicionWho] + " " + action[posicionAction] + what[posicionWhat] + when[posicionWhen]
  );

}

console.log(generadorExcusas());

window.onload = function () {
  document. getElementById("excuse").innerHTML=generadorExcusas()
  console.log("Lo logre!");
};