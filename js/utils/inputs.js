//Endpoints
export const cards = "https://db.ygoprodeck.com/api/v7/cardinfo.php?";
export const darkType = "";
//Inputs
export const cardName = document.getElementById('cardName');
export const showTakenOut = document.getElementById('showTakenOut');


export const getCardName = () => {
    return cardName.value;
  };