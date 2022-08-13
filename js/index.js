//Endpoints

let localDeck = [];

const cards = "https://db.ygoprodeck.com/api/v7/cardinfo.php?";
const darkType = "";
//Inputs
const cardName = document.getElementById('cardName');
const showTakenOut = document.getElementById('showTakenOut');
//Botones
const btnDrawCard = document.getElementById("btnDrawCard");
const btnAllCards = document.getElementById("btnAllCards");
const btnShowCard = document.getElementById("btnShowCard");

//utils

const getCardName = () => {
  return cardName.value;
};


//events

const drawCardEvent = async () => {
  try {
    const { data } = await drawCardApi();
    console.log(data);    
  } catch (error) {
    console.log('No se puede encontrar la carta');
  }
}

const allCardsEvent = async () => {
  try {
    const { data } = await allCardsApi();
    console.log(data);    
  } catch (error) {
    console.log('No se pudieron mostrar las cartas');
  }
}
/*
const showCardEvent = async () => {
  try {
      

    }

  } catch (error) {
    console.log('No se puede invicar esa carta');
  }
 
}
*/



const showCardTest = async () => {

};
//apis

const drawCardApi = async () => {
    return await axios.get(`${cards}name=${getCardName()}`);  
};

const showCardApi = async () => {
  return await axios.get(`${cards}name=${getCardName()}`);
}


const allCardsApi = async () => {
  return await axios.get(`${cards}`);
}

btnDrawCard.addEventListener('click', drawCardEvent);
btnAllCards.addEventListener('click', allCardsEvent);
btnShowCard.addEventListener('click', showCardTest);

console.log('Parece que funciona');

