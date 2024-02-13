import { Router } from 'express';
const router = Router();

import recipe from '../controllers/recipe/index.js';

// Gets a locale file. Returns default locale if invalid choice.
router.get('/getRecipeFromWebsite/:recipeURL', (req, res) => {
    return recipe.getRecipeFromWebsite(req.params, res)
});

export default router;