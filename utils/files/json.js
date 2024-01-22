import { readFile, writeFile } from 'fs/promises';
import { logFS } from '../misc/logger.js';


// Check if a directory exists and if not then create it
async function readJSON(directory) {

    try { logFS(`Reading JSON at ${directory}`) } catch (e){}

    try {
        const localeFile = await readFile(directory, 'utf8');
        return JSON.parse(localeFile);
    } catch (error) {
        console.log(error)
        return {}
    }
}

// Check if a directory exists and if not then create it
async function writeJSON(json, directory) {
    
    try {
        logFS(`Writing JSON to ${directory}`)
        writeFile(`${directory}`, JSON.stringify(json), 'utf8')
    } catch (error) {
        console.log(error);
        return {}
    }
}



export { readJSON, writeJSON };