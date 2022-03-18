// Import stylesheets
import './style.css';
import "@fortawesome/fontawesome-free/css/all.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Hola</h1>
<i class="fa-solid fa-user"></i>
<span style="font-size: 3em; color: Tomato;">
<i class="fas fa-camera"></i>
</span>
`;