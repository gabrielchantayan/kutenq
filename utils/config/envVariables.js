import { getConfigValue } from "./config.js";
import * as envVariables from './../../tools/environmentVariables.json' assert { type: 'json' };

async function readEnvVariable(variable) {
    const dotEnvs = await getConfigValue('environmentVariables');
    const env = await getConfigValue('environment')

    try { 
        return dotEnvs[variable];
    } catch (e) {
        if (envVariables['default'].hasOwnProperty(variable)){
            if (envVariables['default'][variable]['default'].hasOwnProperty(env)) return envVariables['default'][variable]['default'][env];

            else return envVariables['default'][variable]['default']['default'];

        }

        return undefined;
    }

}

export { readEnvVariable }