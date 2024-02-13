/**
 * Creates a return
 * @param {boolean} success Was it a success?
 * @param {string} message The locale message to return, if any
 * @param {*} data Whatever data to send back
 * @returns {object}
 */
const r = (success, message, data) => {

    let ret = {};

    ret['success'] = success;

    if (message) ret['message'] = `IMPLEMENT LOCALE HERE ${message}`;

    if (data) ret['data'] = data;

    return (ret)
}

export {r}