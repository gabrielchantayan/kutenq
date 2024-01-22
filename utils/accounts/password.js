import * as bcrypt from 'bcrypt';

const saltRounds = 10;

/**
 * Hash a password
 * @param {String} password Plaintext password
 * @returns {String} Hashed Password 
 */
const hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, saltRounds)
    return(hash)
}

/**
 * Compare a hashed password
 * @param {String} password Plaintext password
 * @param {String} hashedPassword Hashed password from the DB
 * @returns {Boolean} True if matched, false if not
 */
const checkMatchingHash = async (password, hashedPassword) => {
    const match = await bcrypt.compare(password, hashedPassword);
    return match
}

export { hashPassword, checkMatchingHash };