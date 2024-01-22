import { readFile, writeFile } from 'fs/promises';
import { checkAndCreateDir } from '../../utils/files/fileExists.js'


// Router file header template
const header = 
`import { Router } from 'express';
const router = Router();`


// Generate the routes
async function generateRoutes(){

    // Load the API routes
    const routesFileRAW = await readFile('./tools/api/api.json');
    const routesFile = JSON.parse(routesFileRAW);

    // routes directory index.js
    let indexText = ''

    // Code to add to server.js
    let serverCode = ''

    // Iterate through resources
    for (const [resource, resourceData] of Object.entries(routesFile)){

        // Add the resource to the index file
        indexText += `import ${resource} from './${resource}.js';\n`

        // Add to the server code
        serverCode += `\napp.use('/api/${resource}', routes.${resource});`


        // Create the resource text
        let resourceText = 
`${header}\n
import ${resource} from '../controllers/${resource}/index.js';`;


        // Iterate through API calls
        for (const [call, callData] of Object.entries(resourceData)) {

            // Add to the resource text
            resourceText += 
`\n\n// ${callData['description']}
router.${callData['type'].toLowerCase()}('/${call}${makePaths(callData['params'])}', (req, res) => {
    return ${resource}.${call}(${makeParams(callData['reqArgs'])}, res)
});`

        }

        // Add the footer
        resourceText += '\n\nexport default router;'

        // Write the file
        await writeFile(`./routes/${resource}.js`, resourceText);

    }

    // Add the export defaults to index.js
    indexText += 
`\nexport default {
    ${Object.keys(routesFile).join(',\n\t')}
}`

    // Write the index file
    await writeFile('./routes/index.js', indexText);


    console.log('\n\n\n\n\n\n\n\n')
    console.log('Please add the following code to server.js\n\n')
    console.log(serverCode)

}


// Make paths for router
//             v-------------------v
// router.get('/getRecipe/:recipeID', (req, res) => {
function makePaths(path){

    // If no path is specified, return an empty path
    if (path === undefined) return '/';

    // If a path is specified
    else {
        // Split the paths
        let paths = path.split(', ')
        let txt = ''

        // Then add each path in sequence 
        for (let p in paths){
            txt += `/:${paths[p]}`
        }

        // Return paths
        return txt;
    }
}


// Make the parameters passthrough
//                           v--------v
// return recipe.parseRecipe(req.params, res)
function makeParams(params){

    // If no specific passthrough is specified, return with all params
    if (params === undefined || params === '') return 'req.params';

    // If a specific passthrough is specified:
    else {
        // Split params and make empty text
        let param = params.split(', ')
        let txt = '{'

        // Iterate through parameters
        for (let p in param){

            // Remove spaces and split by either : or = 
            let splitParams = param[p].replaceAll(' ','').split(/[:=]+/)

            // Add to params
            txt += `${splitParams[0]}: ${splitParams[1]}`
        }

        // Return parameter list
        return (txt + '}');
    }
}



generateRoutes()