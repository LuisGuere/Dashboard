import { drawCardApi, allCardsApi, obtainDarkMonster} from '../apis/api.js';
import { showTakenOut } from '../utils/inputs.js';




export const drawCardEvent = async () => {
    const datos  = await drawCardApi();
    try {
        const imprimir = () => {
            showTakenOut.innerHTML += `
            <div class="col-4 pt-3 pb-2">
            <div class="card bg-dark text-light" style="width: 18rem;">
                <img src="${datos.data.data[0].card_images[0].image_url}" class="card-img-top" alt="...">   
                <div class="card-body bg-dark text-light">
                    <h5 class="card-title">${datos.data.data[0].name}</h5>
                    <p class="card-text">${datos.data.data[0].desc}</p>
                </div>
                <ul class="list-group list-group-flush bg-dark text-light">
                    <li class="list-group-item bg-dark text-light">ID: ${datos.data.data[0].id}</li>
                    <li class="list-group-item bg-dark text-light">Level: ${datos.data.data[0].level}</li>
                    <li class="list-group-item bg-dark text-light">Attribute: ${datos.data.data[0].attribute}</li>
                    <li class="list-group-item bg-dark text-light">Race: ${datos.data.data[0].race}</li>
                    <li class="list-group-item bg-dark text-light">Type: ${datos.data.data[0].type}</li>
                    <div class="row">
                    <div class="col">
                    <li class="list-group-item bg-dark text-light">Atk: ${datos.data.data[0].atk}</li>
                    </div>
                    <div class="col">
                    <li class="list-group-item bg-dark text-light">Def: ${datos.data.data[0].def}</li>
                    </div>
                    </div>
                </ul>
                </div>
                </div>
            `;
        }
        imprimir();
      console.log(datos.data.data[0]);    
    } catch (error) {
      console.log('No se puede encontrar la carta');
    }
  };
  
  export const allCardsEvent = async () => {
    try {
      const { data } = await allCardsApi();
      console.log(data);    
    } catch (error) {
      console.log('No se pudieron mostrar las cartas');
    }
  };

obtainDarkMonster();

/*
  export const showValuesTest = async () => {
 
};
*/

/*
const getMonedaUsa = async() => {
    valores = [];
    const { data: { usd }, } = await usdPeticion();
    valores.push(usd);
    datasets[0].data = valores
    myChart.update();
}
*/


