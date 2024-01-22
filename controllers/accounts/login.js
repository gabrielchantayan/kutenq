import asyncWrapper from '../../middleware/asyncWrapper.js'
import { login } from '../../utils/accounts/accounts.js';

const loginUser = asyncWrapper(async (req, res) => {

    const loginData = await login(req);

    res.status(200).json({
        success: true,
        data: loginData,
    });

});

export default loginUser;