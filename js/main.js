//URL

const CardApi = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

//Inputs
const nameCard = document.getElementById('nameCard');


//Buttons
const btnGetCard = document.getElementById('btnGetCard');


//Events

const showCard = async () => {

}

const getCardEvent = async () => {
    const { data } = await getCardApi();
    console.log(data);
}

const getCardApi = async () => {
    return await axios.get(`${CardApi}/?name=/${getCard()}`)
}

btnGetCard.addEventListener("click", getCardEvent)

const getCard = async () => {
    return nameCard.value;
}

const getDescription = async () => {
    return {
        body
    }
}

console.log(btnGetCard)

console.log(nameCard);

console.log("Esto funciona correctamente");

