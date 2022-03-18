// Import stylesheets
import './style.css';
import "@fortawesome/fontawesome-free/css/all.css";


// Write TypeScript code!
let nombre:string="Pili";
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Hola ${nombre}</h1>
<i class="fa-solid fa-user"></i>
<span style="font-size: 3em; color: Tomato;">
<i class="fas fa-camera"></i>
</span>
<div class="fa-3x">
  <i class="fa-solid fa-circle-plus fa-beat"></i>
  <i class="fa-solid fa-heart fa-beat"></i>
  <i class="fa-solid fa-heart fa-beat" style="--fa-animation-duration: 0.5s;" ></i>
  <i class="fa-solid fa-heart fa-beat" style="--fa-animation-duration: 2s;"></i>
  <i class="fa-solid fa-heart fa-beat" style="--fa-beat-scale: 2.0;"></i>
</div>`;