import asyncWrapper from '../../middleware/asyncWrapper.js'
import { getAccountDataWithToken as gad } from '../../utils/accounts/accounts.js';

const getAccountDataWithToken = asyncWrapper(async (req, res) => {

    const accountData = await gad(req.username, req.token);

    res.status(200).json({
        success: true,
        data: accountData,
    });

});

export default getAccountDataWithToken;