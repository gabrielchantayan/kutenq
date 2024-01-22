export default function mergeLocales(little, big){

    for (const [key, translation] of Object.entries(big)){
        if (!little.hasOwnProperty(key)) {
            little[key] = big[key];
        }
    }

    return little

}