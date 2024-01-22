import asyncWrapper from '../../middleware/asyncWrapper.js'
import { updateOwnPassword as uop } from '../../utils/accounts/accounts.js';

const updateOwnPassword = asyncWrapper(async (req, res) => {

    const accountData = await uop(req);

    res.status(200).json({
        success: true,
        data: accountData,
    });

});

export default updateOwnPassword;