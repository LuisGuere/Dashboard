import { digimonName } from "../utils/inputs";

const digiApi = "https://digimon-api.vercel.app/api/digimon";

 export const digiCallApi = async () => {
    return await axios.get(`${digiApi}/${digimonName()}`)
}