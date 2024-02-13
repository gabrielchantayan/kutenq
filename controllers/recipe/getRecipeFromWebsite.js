import asyncWrapper from '../../middleware/asyncWrapper.js'
import { r } from '../../utils/misc/return.js';
import { getRecipeFromWebsite as grfw } from '../../utils/recipe/import.js';

const getRecipeFromWebsite = asyncWrapper(async (req, res) => {

    const ret = await grfw(req.recipeURL);

    res.status(200).json(r(true,null,ret));

});

export default getRecipeFromWebsite;