import * as db from '../db/mongo.js';
import * as password from './password.js';
import { genToken } from './tokens.js';

/**
 * Create an account
 * @param {Object} data The data to be updated. Typically includes fields: username, password, firstName, lastName, email, permissions[], active (bool)
 * @returns {Object} {success: bool, reason: string}
 */
const createAccount = async (data) => {

    console.log(data)

    // Verify that the username doesn't already exist in the system
    let existingAccount = await db.checkIfExists('users', { username: data['username'] });

    // If it doesnt
    if (existingAccount == 0) {

        // Hash and salt the password
        let hashedPassword = await password.hashPassword(data['password'])
    
        // Insert the stuff into the database
        await db.insert('users', {
            username: data['username'],
            password: hashedPassword,
            firstName: data['firstName'],
            lastName: data['lastName'],
            email: data['email'],
            permissions: data['permissions'],
            active: true
        })

        // Return true
        return ({
            'success': true,
            'reason' : `Successfully created ${data['firstName']} ${data['lastName']}! (${data['username']})`
        })

    }

    // If the user already exists return false
    else { 
        console.log('Exists!')
        return ({
            'success' : false,
            'reason' : `User "${data['username']}" already exists!`
    }) }

}

/**
 * Log in a user and return their token
 * @param {Object} data {username: string, password: string}
 * @returns {Object} {success: bool, reason: string, token: string, fullName: string}
 */
const login = async (data) => {

    console.log(data)

    // Verify that the username doesn't already exist in the system
    let existingAccount = await db.checkIfExists('users', { username: data['username'] });

    // If the account does not exist, return with an error message
    if (existingAccount == 0) {

        console.log('User does not exist!')
        return ({
            'success': false,
            'reason': `Incorrect username or password!`
        })

    }

    else {
        console.log('Exists!')

        // Grab the user's data
        const userData = await db.findOne('users', { username: data['username']});

        // Check if the password matches
        const passwordMatches = await password.checkMatchingHash(data['password'], userData['password'])

        // If it does...
        if (passwordMatches) {

            // Generate a token
            let token = genToken();

            const setNewLogin = await db.update('users', {username: data['username']}, {
                'token' : token,
                'lastLogin' : Date.now()
            })

            return ({
                'success' : true,
                'token' : token,
                'fullName': `${userData['firstName']} ${userData['lastName']}`,
                'reason' : 'You may now close this page'
            })
        }

        // Otherwise, return false with an error message
        else {
            return ({
                'success': false,
                'reason': `Incorrect username or password!`
            })
        }
    }

}


const getAccountDataWithToken = async (username, token) => {
    let existingAccount = await db.checkIfExists('users', { username: username, token: token });


    // If the account does not exist, return with an error message
    if (existingAccount == 0) {
        return ({
            'success': false,
            'reason': `Invalid session!`
        })
    } 
    else {
        const userData = await db.findOne('users', { username: username, token: token });

        return ({
            'success' : true,
            'data' : userData
        })
    }
}

const updateOwnPassword = async (data) => {
    const hashedPassword = await password.hashPassword(data['password']);

    const setNewPassword = await db.update('users', { username: data['username'], token: data['token'] }, {
        'password': hashedPassword,
        'lastChangedPassword': Date.now()
    })

    return ({
        'success': true,
        'reason': 'Updated password'
    })
}

export { createAccount, login, getAccountDataWithToken, updateOwnPassword }