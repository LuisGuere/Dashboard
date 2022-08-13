const digiApi = "https://digimon-api.vercel.app/api/digimon";

const digiName = document.getElementById('digiName');


const btnAllDigimons = document.getElementById('btnAllDigimons');
const btnDigiCall = document.getElementById('btnDigiCall');

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

//https://digimon-api.vercel.app/
console.log('parece que funciona');

btnDigiCall.addEventListener('click', simpleDigimon);
btnAllDigimons.addEventListener('click', summonAll);

