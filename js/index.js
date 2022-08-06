import { digiCallEvent } from './events/event.js';
import { digiForm } from './utils/inputs';

const btnDigiCall = document.getElementById('btnDigiCall');
const btnAllDigimons = document.getElementById('btnAllDigimons');




const saludo = () => {
    return "Hola, parece que esta funcionando"
}
/*
const digiCall = async () => {
    return await axios.get(`${digiApi}/name/${digiName}`);
}
*/
const allDigimons = async () => {
    return await axios.get(`${digiApi}`);
}

btnAllDigimons.addEventListener('click', allDigimons);
btnDigiCall.addEventListener('click', digiCallEvent);

console.log(saludo());
