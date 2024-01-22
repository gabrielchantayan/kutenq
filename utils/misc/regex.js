// Name validation RegEx
//                  Begin check at start of new line
//                  │Check for any char a-z, plus whitespace
//                  ││     Sometimes TAs have notes in parenthesis, check for this
//                  │├────┐├───┐
const nameRegex = /^[a-z\s\(\)]*/gmi

// Phone number validation RegEx
// It's funny because I need to strip every non-numeric char after this
//                  Capture group 1
//                  Check any string of 0-9 and "-" between 9 and 12 chars
//                  │
//                  │               Capture group 2
//                  │               Check for 3 digits encased in a parenthesis
//                  │               │         Check for any possible single whitespace
//                  │               │         │  Check for 6 to 8 characters, including whitespace and dashes
//                  ├─────────────┐ ├────────┐├─┐├────────────┐
const phoneRegex = /([0-9\-]{9,12})|(\(\d{3}\)\s?[0-9\-\w]{6,8})/gmi

// Email validation regex
//                  Username
//                  Check 0-9, a-z, periods, and underscore
//                  │            Seperator
//                  │            │ Domain checking
//                  │            │ Check for 0-9, a-z, and periods (TLD and Subdomain seperation)
//                  ├──────────┐ │ ├───────┐
const emailRegex = /([0-9a-z\._]*@[0-9a-z\.]*)/gmi



// Validate a regex
function validateText(text, regex) {
    // console.log(`Testing "${text}" against ${regex}`)
    return regex.test(text);
}

// Get a Regex Match
function getRegexMatch(text, regex){
    // console.log(`Matching "${text}" against ${regex}`)
    return text.match(regex)
}

// Strip non-numeric
function stripNonNumeric(text){
    return text.replace(/\D/g, '');
}


export { nameRegex, phoneRegex, emailRegex, validateText, getRegexMatch, stripNonNumeric }