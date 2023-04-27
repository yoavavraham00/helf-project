import { ComputerFactory } from './addClass.js';
import { ComputerScreen } from './addClass2.js';


let newComputer;
let newComputerScreen;


newComputerScreen = new ComputerScreen();



function saveComputer() {
  newComputer = new ComputerFactory();
  newComputer.saveComputer();
}
function alertComputer() {
  newComputer = new ComputerFactory();
  newComputer.alertComputer();
}
function eraseComputer() {
  let a = document.getElementById('screen1');
  a.innerHTML = "";
  let b = document.getElementById('screen2');
  b.innerHTML = "";
  let c = document.getElementById('screen3');
  c.innerHTML = "";
  newComputer.eraseComputer();
  overAllPrice = 0;
}
function getComputerFromStorage() {
  const computers = JSON.parse(localStorage.getItem("computers"));
  if (computers.length > 0) {
    newComputerScreen.showComputer(computers[0]);
  }
}

function ILoveU() {
  alert('                                       🦁 I - LOVE - U 🦁                         ');
} 

document.getElementById("saveButton").addEventListener("click", function () {
  saveComputer();
});
document.getElementById("alertButton").addEventListener("click", function () {
  alertComputer();
});
document.getElementById("eraseButton").addEventListener("click", function () {
  eraseComputer();
});
document.getElementById("showPictures").addEventListener("click", function () {
  setInterval(getComputerFromStorage, 2000);
  getComputerFromStorage();
});

document.getElementById("p-fixed").addEventListener("click", function () {
  ILoveU();
});































