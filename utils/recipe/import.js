import { r } from "../misc/return.js"
import { testAndFixURL } from "../web/web.js"


const getRecipeFromWebsite = async (rawURL) => {

    // Axios likes to shit the bed if you don't include the protocol, so include the protocol.
    let url = testAndFixURL(rawURL);
}