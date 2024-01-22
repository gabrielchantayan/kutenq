import { readFile } from 'fs/promises';

export default async function getLocaleFile(locale){
    
    // If there is no locale specified, first try to set it to what the dotenv says.
    // If nothing in dotenv, set to english
    locale = locale || process.env.DEFAULT_LOCALE || "en";

    try {
        const localeFile = await readFile(`./locales/${locale}.json`, 'utf8')
        return JSON.parse(localeFile)
    } catch (error) {
        console.log(error)
        return {}
    }


}


