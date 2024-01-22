// Import dayjs for date manipulation
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween.js';
dayjs.extend(isBetween)


/**
 * Check is a date is in between ranges
 * @param {String} start The start date
 * @param {String} end The end date
 * @param {String} check The date to check
 * @returns
 */
const checkDate = (start, end, check) => {
    // Check if a date is in a range of dates using dayjs
    // Using "day" granularity
    // The fourth parameter "[]" means inclusive on start and end date
    return (dayjs(check).isBetween(dayjs(start), dayjs(end), 'day', '[]'))
};




/**
 * Check if a date is valid against an array of dates and return if it is valid and the date range
 * @param {String} dateString The date to check
 * @param {Array} dates Pairs of valid date ranges
 *
 * It is structured as follows:
 *
 * [ [start, end], [start, end], ...]
 * @returns Object { valid: Bool; start: Date String; end: Date String; rangeString: String; }
 */
const checkDateAgainstDatesAndReturnPairing = (dateString, dates) => {

    // For whatever reason unbeknownst to mankind,
    // For some fucking dumbass reason,
    // You can't break out of a forEach()
    // So instead
    // I need to do this
    // So the function will actually terminate and 
    // My code will continue as normal
    // God will smite us for our sins
    for (let i = 0; i < dates.length; i++) {

        // If it is a valid date, then return true
        if (checkDate(dates[i][0], dates[i][1], dateString) == true) return ({
            "valid" : true,
            "start" : dates[i][0],
            "end" : dates[i][1],
            "rangeString": `${dates[i][0]} — ${dates[i][1]}`
        });
        
    }

    // If it is not a valid date and all pairs are exhausted,
    // return false
    return ({ "valid" : false });
};

/**
 * Check if a date is valid against an array of dates
 * @param {String} dateString The date to check
 * @param {Array} dates Pairs of valid date ranges
 *
 * It is structured as follows:
 *
 * [ [start, end], [start, end], ...]
 * @returns True or False
 */
const checkDateAgainstDates = (dateString, dates) => {

    // For whatever reason unbeknownst to mankind,
    // For some fucking dumbass reason,
    // You can't break out of a forEach()
    // So instead
    // I need to do this
    // So the function will actually terminate and 
    // My code will continue as normal
    // God will smite us for our sins
    for (let i = 0; i < dates.length; i++) {

        // If it is a valid date, then return true
        if (checkDate(dates[i][0], dates[i][1], dateString) == true) return true;

    }

    // If it is not a valid date and all pairs are exhausted,
    // return false
    return false;
};

/**
 * Returns a date pairing
 * @param {String} dateString The date to check
 * @param {Array} dates Pairs of valid date ranges
 *
 * It is structured as follows:
 *
 * [ [start, end], [start, end], ...]
 * @returns String
 */
const returnDatePairing = (dateString, dates) => {

    // For whatever reason unbeknownst to mankind,
    // For some fucking dumbass reason,
    // You can't break out of a forEach()
    // So instead
    // I need to do this
    // So the function will actually terminate and 
    // My code will continue as normal
    // God will smite us for our sins
    for (let i = 0; i < dates.length; i++) {

        // If it is a valid date, then return true
        if (checkDate(dates[i][0], dates[i][1], dateString) == true) return [dates[i][0], dates[i][1]];

    }

    // If it is not a valid date and all pairs are exhausted,
    // return false
    return false;
};


/**
 * Transmute a date
 * @param {String} start The start date
 * @param {String} end The end date
 * @param {String} period What period you are transmuting (month, day, period [compare against prev. periods])
 * @param {Integer} amount The amount of time you would like to transmute
 * @returns
 */
const transmuteDates = (start, end, period, amount) => {

    // Create the date objects to manipulate
    let startDate = dayjs(start);
    let endDate = dayjs(end);

    switch (period) {

        // Since both month and year are available units in dayjs,
        // we can just subtract by those
        case 'month':
        case 'year':
            startDate = startDate.subtract(amount, period);
            endDate = endDate.subtract(amount, period);
            break;

        // Previous period(s)
        case 'period':
            // Get the difference between dates in days
            // So that the dates don't overlap, add one to the date diff
            let dateDiff = endDate.diff(startDate, 'day') + 1;

            // Subtract it from start and end dates.
            startDate = startDate.subtract((dateDiff * amount), 'day');
            endDate = endDate.subtract((dateDiff * amount), 'day');
            break;
    }

    // Return as object
    return ({ 'start': startDate.format('YYYY-MM-DD'), 'end': endDate.format('YYYY-MM-DD') });
};


export { checkDate, transmuteDates, checkDateAgainstDates, returnDatePairing, checkDateAgainstDatesAndReturnPairing }