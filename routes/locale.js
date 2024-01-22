import { Router } from 'express';
const router = Router();

import locale from '../controllers/locale/index.js';

// Gets a locale file. Returns default locale if invalid choice.
router.get('/getLocale/:locale', (req, res) => {
    return locale.getLocale(req.params, res)
});

export default router;