import { readFile } from 'fs/promises';


const initializeLocale = async (locale) => {

    // Read the locale file
    const rawLocaleFile = await readFile(`locales/raw/${locale}`, 'utf8');

    // Parse the JSON
    let rawLocale = JSON.parse(rawLocaleFile);


    

}

const mergeWithFallbacks = (locale, fallback) => {

}