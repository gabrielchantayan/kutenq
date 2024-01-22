// Module imports
import 'dotenv/config'  // DotEnv
import { readEnvVariable } from '../config/envVariables.js'
import { stringToBool } from './misc.js'

// DotEnvs
const doesLogPrefixes   =  await readEnvVariable('LOG_PREFIXES');
// const doesLogDebug      =  await readEnvVariable('LOG_DEBUG');
const doesLogDebug      =  true;
const doesLogFS         =  await readEnvVariable('LOG_FILESYSTEM');
const doesLogAxios      =  stringToBool(process.env.LOG_AXIOS)
// const doesLogDB         =  stringToBool(process.env.LOG_DB)
const doesLogDB         =  true;
const doesLogInit       =  true;

function logInit(text) {
    if (doesLogInit == true) console.log(genMsg('init', text));
}

function logDebug(text) {
    if (doesLogDebug == true) console.log(genMsg('debug', text));
}

function logAxios(text) {
    if (doesLogAxios == true) console.log(genMsg('axios', text));
}

function logDB(text) {
    if (doesLogDB == true) console.log(genMsg('database', text));
}

function logFS(text) {
    if (doesLogFS == true) console.log(genMsg('i/o', text));
}

function axiosStatus(url, status) {
    if (doesLogAxios == true) console.log(genMsg('axios', `Status ${status} returned from ${url}`));
}


function genMsg(type, text) {
    if (doesLogPrefixes == true){
        return `[${type.toUpperCase()}] ${text}`
    } else { return text }
    return (doesLogPrefixes == true ? `[${type.toUpperCase()}] ${text}` : text)
}

export { logDebug, logAxios, axiosStatus, logDB, logFS, logInit }