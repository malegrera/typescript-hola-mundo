// Import stylesheets
import './style.css';
import "@fortawesome/fontawesome-free/css/all.css";


// Write TypeScript code!
const usuario:string="palegre";
const rana:string = `<div class="fa-3x">
<i class="fa-solid fa-frog fa-bounce" style=" --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; " ></i>
</div>`;
const appFooter: HTMLElement = document.querySelector('footer');
appFooter.innerHTML=rana;
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1><i class="fa-solid fa-user"></i> ${usuario} </h1>

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

