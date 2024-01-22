import asyncWrapper from '../../middleware/asyncWrapper.js'
import { listAllPermissiblePages } from '../../utils/accounts/permissions.js';

const getListOfAllPermissiblePages = asyncWrapper(async (req, res) => {

    const pageList = await listAllPermissiblePages(req.username, req.token);

    res.status(200).json({
        success: true,
        data: pageList,
    });

});

export default getListOfAllPermissiblePages;