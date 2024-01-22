import { readFile } from 'fs/promises';
import mergeLocales from './mergeLocales.js';

// Fill in fallback messages for locales
export default async function fixFallbackMessages(locale){
    
    // Get the locale file and parse it
    const rawLocaleFile = await readFile(`locales/originals/${locale}`, 'utf8');
    let localeFile = JSON.parse(rawLocaleFile);

    // Check if the locale file has any fallbacks
    if (localeFile['fallbacks'].length > 0){
        
        // If so, iterate through fallbacks
        for (let i in localeFile['fallbacks']) {

            // Recurse to fill in fallbacks for the fallback file
            let fallbackFile = await fixFallbackMessages(localeFile['fallbacks'][i])

            // Merge the two files
            localeFile = mergeLocales(localeFile, fallbackFile)
        }

    }

    // Return the locale
    return localeFile
}


