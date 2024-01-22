import asyncWrapper from '../../middleware/asyncWrapper.js'
import { createAccount } from '../../utils/accounts/accounts.js';

const createUserAccount = asyncWrapper(async (req, res) => {

    const accountData = await createAccount(req);

    res.status(200).json({
        success: true,
        data: accountData,
    });

});

export default createUserAccount;