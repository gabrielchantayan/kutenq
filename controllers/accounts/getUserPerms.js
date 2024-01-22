import asyncWrapper from '../../middleware/asyncWrapper.js'
import { getUserPermissions } from '../../utils/accounts/permissions.js';

const getUserPerms = asyncWrapper(async (req, res) => {

    const accountData = await getUserPermissions(req.username, req.token);

    res.status(200).json({
        success: true,
        data: accountData,
    });

});

export default getUserPerms;