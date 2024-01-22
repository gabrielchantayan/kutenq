import * as db from '../db/mongo.js';
import { getAccountDataWithToken } from './accounts.js';

/**
 * Check an account permission
 * @param {String} wanted The wanted permission 
 * @param {String} username 
 * @param {String} token 
 * @returns Bool
 */
const checkPermission = async (wanted, username, token) => {

    // Get the account data
    const account = await getAccountDataWithToken(username, token);

    // Return if the user has the wanted permission
    return (account.data.permissions.includes(wanted)) 

}


/**
 * Check if a user has permissions to access a page
 * @param {String} pageURL The url of the wanted page
 * @param {String} username 
 * @param {String} token 
 * @returns Bool
 */
const checkPagePermission = async (pageURL, username, token) => {

    // Get the account data
    const account = await getAccountDataWithToken(username, token);

    // Get the page data
    const page = await db.findOne('pages', { url: pageURL });

    // Return if user has permissions to access
    return (account.data.permissions.includes(page['permissions'])) 

}

const listAllPermissiblePages = async (username, token) => {

    // Get the account data
    const account = await getAccountDataWithToken(username, token);

    if (account.success == false){ return [] }

    // Get all the pages
    const pages = await db.find('pages');

    console.log(account)

    // Give them all the pages if theyre a superuser
    if (account.data.permissions.includes('Superuser')) return pages;


    let accessiblePages = []

    pages.forEach((page) => {
        
        
        if (account.data.permissions.includes(page['permissions'])) accessiblePages.push(page)


    })

    return accessiblePages;

}

const getUserPermissions = async (username, token) => {
    // Get the account data
    const account = await getAccountDataWithToken(username, token);

    if (account.success) return account.data.permissions;
    else return [];
    

}




export { checkPermission, checkPagePermission, listAllPermissiblePages, getUserPermissions }