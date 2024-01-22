import { CookiesProvider, useCookies } from "react-cookie";

import * as api from './api.js';
import * as utils from './util.js';

const getListOfAllPermissiblePages = async () => {

    let user = utils.getCookie('username');
    let token = utils.getCookie('token')


    const ret = await api.post(['accounts', 'listAllPermissiblePages'], {username : user, token: token});

    return ret;
}

const hasPerms = async (perm) => {

    let user = utils.getCookie('username');
    let token = utils.getCookie('token')


    const ret = await api.post(['accounts', 'getUserPerms'], { username: user, token: token });

    if (ret.includes('Superuser')) return true;

    return (ret.includes(perm));
}

const getAccountDataWithToken = async () => {

    let user = utils.getCookie('username');
    let token = utils.getCookie('token')


    const ret = await api.post(['accounts', 'getAccountDataWithToken'], { username: user, token: token });

    return(ret)

}

export { getListOfAllPermissiblePages, hasPerms, getAccountDataWithToken }