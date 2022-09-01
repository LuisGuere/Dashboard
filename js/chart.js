import {drawCardApi, darkMagician, obtainDarkMonster, allowNames} from './apis/api.js';
import {getDataColors, getDarkMonsters} from './chartC/chartcolors.js'
import { showTakenOut } from './utils/inputs.js';

let valuesN = [];
let valuesA = [];

/*
const printCharts = () => {
    
    renderModelsChart();
}

const renderModelsChart =() => {
    
    const data = {
        label: ['uno', 'dos', 'tres'],
        datasets: [{
            data: [10, 20, 30], 
            borderColor: getDataColors(),
            backgroundColor: []
        }]
    }
    
    const options = {
        plugins: {
            legend: {position: 'left'}
        }
    }

    new Chart('modelsChart', {type: 'doughnut', data});
}

printCharts();
*/


const ctx = document.getElementById('myChart').getContext('2d');

const labelsM = [];

const datasetsM = [];


const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labelsM,
        datasetsM
    },
    options: {
        plugins: {
            legend: {
                position: 'left'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }

    }
});

console.log(labelsM);
console.log(datasetsM);




const showNames = async () => {
    const response = await allowNames();
    console.log(response);   
}

//obtainDarkMonster();

const descMago = async () => {
    const desc = await darkMagician();
    try {
        let descMag = {
            Name: desc.data.data[0].name,
            Atk: desc.data.data[0].atk,
            Def: desc.data.data[0].def,
        };
        
        console.log(descMag)
    } catch (error) {
        
    }
}
 

export const darkMonsterName = async () => {
    let valuesN = [];
    const theName = await obtainDarkMonster();
    return theName.map((card, index) => {
      const nameMonster = {
        Nombre: card.name
      }
      valuesN.push(nameMonster);
      labelsM.data = valuesN,
      myChart.update();      
  
    })
  }
  
  darkMonsterName();
  
  export const darkMonsterAtk = async () => {
    let valuesA = []  ;
    const theAtk = await obtainDarkMonster();
    return theAtk.map((card, index) => {
      const atkMonster = {
        Atk: card.atk
      }
      valuesA.push(atkMonster);
      datasetsM.data = valuesA;
      myChart.update();      
  
  })
  }

darkMonsterAtk();
  







console.log('Parece que funciona');