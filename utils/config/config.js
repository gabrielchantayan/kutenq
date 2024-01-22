import { readJSON } from "../files/json.js";

async function getConfigValue(value){
    const config = await readJSON('config.json');

    return config[value];
}


export { getConfigValue }