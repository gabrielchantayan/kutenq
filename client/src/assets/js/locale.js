import * as api from './api.js'
import config from "../../config.json";


async function getLocale(){
    return api.get(['locale', 'getLocale', 'fr'])
}


/**
 * Reads a locale
 * @param {Object} locale 
 * @param {String} text 
 * @returns 
 */
function readLocale(locale, text){
    
    // If the locale is empty return the locale string
    // if (Object.keys(locale).length == 0) return text;

    if (locale.hasOwnProperty(text)) return locale[text];
    else if (config["BLANK_INVALID_LOCALE"]) return '';
    else return text;


}


export { getLocale, readLocale }