import { cards, getCardName, showTakenOut } from '../utils/inputs.js';
import { getDarkMonsters } from '../chartC/chartcolors.js';

export const drawCardApi = async () => {
    return await axios.get(`${cards}name=${getCardName()}`)  
};

export const showCardApi = async () => {
  return await axios.get(`${cards}name=${getCardName()}`);
};

export const obtainDarkMonster = async () => {
  const { data: { data } } = await getDarkMonsters();
  return data;
}

export const allowNames = async () => {
  const showNames = await obtainDarkMonster();
  await showNames.map((card, index) => {
    const nameGroup = {
      Nombre: card.name,
      Ataque: card.atk
    }
    //console.log(nameGroup);
  })
}
//allowNames();




/*
const printDarkMonsters = async () => {
  const print = await allowNames();
  return print.map((card, index) => {
    
  })
    
}*/



export const allCardsApi = async () => {
  return await axios.get(`${cards}`);
};

export const darkMagician = async () => {
  return await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%Magician');
};

