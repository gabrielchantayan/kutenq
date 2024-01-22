import * as regex from './regex.js'

// Reformat phone number
// Strips all misc symbols from a phone number,
// then formats it in (123) 456-7890
function formatPhoneNumber(number) {

    // Strip non-numeric
    number = regex.stripNonNumeric(number);

    // Reformat
    return `(${number.substring(0,3)}) ${number.substring(3,6)}-${number.substring(6)}`;
}





console.log(formatPhoneNumber('0123456789'))