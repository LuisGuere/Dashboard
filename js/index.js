const digiApi = "https://digimon-api.vercel.app/api/digimon"

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
    try {
      const response = await axios.get(`${digiApi}/name/${digiName}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }


  const summonAll = async () => {
    const summonDigimon = await axios.get(`${digiApi}`)
    return console.log(summonDigimon.data);
  }

  const showDigimons = async () => {
    
  }

  const printDigimon = () => {
    digimons.map(digiApi)
  }

//console.log(digiCall());

//https://digimon-api.vercel.app/
console.log('parece que funciona');

btnDigiCall.addEventListener('click', simpleDigimon);
btnAllDigimons.addEventListener('click', summonAll);

