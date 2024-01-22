import createUserAccount from './createAccount.js'
import loginUser from './login.js';
import getListOfAllPermissiblePages from './listAllPermissiblePages.js';
import getUserPerms from './getUserPerms.js';
import getAccountDataWithToken from './getAccountDataWithToken.js';
import updateOwnPassword from './updateOwnPassword.js';

export default {
    createUserAccount,
    loginUser,
    getListOfAllPermissiblePages,
    getUserPerms,
    getAccountDataWithToken,
    updateOwnPassword
};