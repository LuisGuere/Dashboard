//URL

const cardApi = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

//Inputs
const cardType = document.getElementById('cardType');
const cardId = document.getElementById('cardId');


//Buttons
const btnGetCard = document.getElementById('btnGetCard');
const btnGetAllCards = document.getElementById('btnGetAllCards');



//Apis

const getAllCardsApi = async () => {
    return await axios.get(`${cardApi()}`);
};

//Events

const getAllCardsEvent = async () => {
    const { data } = await getAllCardsApi();
    console.log(data);
};

//actions

btnGetAllCards.addEventListener('click', getAllCardsEvent);


//return await axios.get(`${cardApi}`);
console.log("Esto funciona correctamente");

