import {logInit} from '../misc/logger.js'
import * as path from 'path';
import { copyFile, readFile, writeFile, mkdir, readdir } from 'fs/promises';    // Filesystem promises
import { readdirSync, statSync } from 'fs';                                     // For logging file tree
import fixFallbackMessages from '../locale/fixFallbackMessages.js';
import { readJSON, writeJSON } from '../files/json.js';

import * as db from '../db/mongo.js'

import 'dotenv/config'  // DotEnv

const doesLogInit       =  true;


//// 
//// Initialization
////
const initialize = async () => {
    console.log("[INIT] Initializing server...");

    // await config();

    await initDB()

    console.log("[INIT] Finished initializing.");
}


// Create database
const initDB = async () => {
    db.createCollection('commissions');
    db.createCollection('discounts');
    db.createCollection('landing_pages');
    db.createCollection('pages');
    db.createCollection('units');
    db.createCollection('users');
}



// 
// Config
// 
// async function config() {
//     logInit('Generating config files');

//     // Read the config file
//     let config = await readJSON('config.json');

//     let clientConfig = {};


//     //// ENVIRONMENT VARIABLES
//     const defaultEnvVariables = await readJSON('./tools/environmentVariables.json');
    
//     config['environmentVariables'] = {} 

//     for (const [variable, data] of Object.entries(defaultEnvVariables)){
//         if (data['scope'].includes('server')) config['environmentVariables'][variable] = setDEnv(data, config['environment'])
//         if (data['scope'].includes('client')) clientConfig[variable] = setDEnv(data, config['environment'])
//     }



//     await writeJSON(config, 'config.json')
//     // await writeJSON(clientConfig, './client/src/config.json')
    
// }

// function setDEnv(data, env){
//     if (data['default'].hasOwnProperty(env)) return data['default'][env];
//     else return data['default']['default']
// }

export default initialize