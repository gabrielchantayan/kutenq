import * as cheerio from 'cheerio';


/**
 * Test if a string is a URL
 * @param  {string} url
 * @return  {boolean} TRUE if is url, FALSE if not
 */
const isURL = (url) => {
    return urlRegex.test(url)
}

/**
 * Test if a given string is a URL and if not, turn it in to one
 * @param {string} url
 * @param {string} protocol
 * @return {string} 
 */
const testAndFixURL = (url, protocol) => {
    return (isURL(url) ? url : `${protocol || 'https://'}://${url}`)
}


/**
 * Function to get a webpage from a given URL
 * @param {string} url The URL of the webpage to get
 * @return {string} The HTML of the webpage in a string 
 */
const getWebpage = async (url) => {

    // Parse the URL
    let parsedUrl = testAndFixURL(url)

    // Axios request
    const res = await axios.get(parsedUrl);

    // Return
    return res;
}

/**
 * Function to get LD+JSON schemas from a page
 * @param  {string} url The URL of the webpage to get schemas from
 * @return {JSON} The LD+JSON of the webpage
 */
const getSchemas = async (url) => {

    // Get the webpage
    const webpage = await getWebpage(url);

    // Parse the webpage
    const $ = cheerio.load(webpage);

    return JSON.parse($('*[type="application/ld+json"]').html())
}


export { isURL, testAndFixURL, getSchemas, getWebpage }