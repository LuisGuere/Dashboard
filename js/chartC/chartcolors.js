const darkMonsters = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&attribute=dark';

export const getDarkMonsters = async () => {
    return await axios.get(`${darkMonsters}`);
    
};




export const getDataColors = opacity => {
    const colors = ['#7448c2', '#21c0d7', '#d99e2b', '#cd3a81', '#9c99cc', '#e14eca', '#ffffff', 'ff0000', '#d6ff00'];
    return colors.map(color => opacity ? `${color + opacity}` : color)
}


