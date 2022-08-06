

console.log("Esto está funcionando");

let digivice = 'https://digimon-api.vercel.app/api/digimon/name/agumon';
let digivice2 = 'https://digimon-api.vercel.app/api/digimon/name/gabumon';
let digivice3 = 'https://digimon-api.vercel.app/api/digimon/name/tentomon';


fetch(digivice)
    .then(Response => Response.json())
    .then(data => console.log(data))


const digiCall = async () => {
    const responder = await fetch(digivice2);
    const datos = await responder.json();
    console.log(datos);
}

console.log(digiCall());


//Axios Response

const peticionAxios = async () => {
    const { data } = await axios.get(`${digivice3}`);
    console.log(data);    
}


