import { digiCallApi } from '../apis/api.js';

export const digiCallEvent = async () => {
    const { data } = await digiCallApi();
    console.log(data);
}