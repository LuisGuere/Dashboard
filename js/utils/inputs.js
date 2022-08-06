const digiName = document.getElementById('digiName');

export const digimonName = () => {
    return digiName.value;
}

export const digiForm = () => {
    return{
        name: digiName.value,
        level: '',
        img: '',
    }
}