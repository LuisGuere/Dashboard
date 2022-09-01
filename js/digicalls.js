/*
const btnAllDigimons = document.getElementById('btnAllDigimons');
const btnDigiCall = document.getElementById('btnDigiCall');
*/
/*
const digiCall = async (name, img, level) => {
    const resp = await axios.get(`${digiApi}/name/${digiName}`);
    return{

        name: resp.name,
        level: resp.level,
        img: resp.img
    }
}
*/
/*
async function simpleDigimon() {
    console.log(`${digiName.value}`)
    try {
      const response = await axios.get(`${digiApi}/name/${digiName.value}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }



// sintaxis par ala rúbrica
  const summonAll = async () => {
    try {
        const summonDigimon = await axios.get(`${digiApi}`)
        return console.log(summonDigimon.data);
        
    } catch (error) {
        console.log(error);        
    }
  }


  const showDigimons = async () => {
    const respuesta = await axios.get(`${digiApi}`);
    return respuesta.data
  }

  const printDigimon = () => {
    digimons.map(digiApi)
  }

//console.log(digiCall());


/*
const showCardEvent = async () => {
  try {
      

    }

  } catch (error) {
    console.log('No se puede invicar esa carta');
  }
 
}
*/






/*
const peticionFetch = async () => {
   await fetch(`${cards}name=${getCardName()}`)
  .then((res) => res.ok ? res.json(res) : Promise.reject(res))
  .then((json) => {
    console.log(json);
    json.forEach((el) => {
      showTakenOut.innerHTML = `${el}`
    })
  }).catch((err) => {
    console.log(err);
    let message = err.statusText || "Ocurrio un error";
    showTakenOut.innerHTML = `Error ${err.status}: ${message}`
  })
  .finally(
    console.log('Esto se va a ejecutar independientemente de si sucede o no')
  );
}
*/
//apis



/*
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
.then((respuesta)=>{
  console.log(respuesta.data); 
console.log("Nombre: ", respuesta.data.name, "Abilities: ", respuesta.data.abilities[0].ability.name, "Number: ", respuesta.data.id, "Estadísticas: ", respuesta.data.stats, "Tipo: ", respuesta.data.types)},

)

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
.then((respuesta)=>{ 
console.log(respuesta.data.name)}
);
*/
/*
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
.then((respuesta)=>{ 
console.log(respuesta.data)}
);

axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%20Magician')
.then((respuesta)=>{ 
console.log(respuesta.data)}
);
axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%20Magician')
.then((respuesta)=>{ 
console.log("Nombre: ", respuesta.data.data[0].name, "ID: ", respuesta.data.data[0].id, "IMG: ", respuesta.data.data[0].card_images[5].image_url, "Descripción: ", respuesta.data.data[0].desc, "Tipo: ", respuesta.data.data[0].type, "Raza: ", respuesta.data.data[0].race)}
);





//https://digimon-api.vercel.app/
console.log('parece que funciona');

btnDigiCall.addEventListener('click', simpleDigimon);
btnAllDigimons.addEventListener('click', summonAll);
*/


import {darkMagician} from './apis/api.js';

const imprimirMago = async () => {
  const datos = await darkMagician();
  try {
    console.log(datos);
    
  } catch (error) {
    
  }
}
imprimirMago();



const darkMonsterName = async () => {
  const theName = await obtainDarkMonster();
  return theName.map((card, index) => {
    const nameMonster = {
      Nombre: card.name
    }

  })
}



const darkMonsterAtk = async () => {  
  const theAtk = await obtainDarkMonster();
  return theAtk.map((card, index) => {
    const atkMonster = {
      Atk: card.atk
    }

})
}



console.log('parece que funciona')
