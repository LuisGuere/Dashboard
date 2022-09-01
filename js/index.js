//imports
import { drawCardEvent } from './events/event.js';

//Botones
const btnDrawCard = document.getElementById("btnDrawCard");
const btnAllCards = document.getElementById("btnAllCards");
const btnShowCard = document.getElementById("btnShowCard");

//utils

//Buttons 

btnDrawCard.addEventListener('click', drawCardEvent);
//btnAllCards.addEventListener('click', allCardsEvent);
//btnShowCard.addEventListener('click', showCardTestEvent);

console.log('Parece que funciona');

