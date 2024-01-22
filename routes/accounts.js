import { Router } from 'express';
const router = Router();

import accounts from '../controllers/accounts/index.js';

// Get a report of landing page information
router.post('/createAccount', (req, res) => {
    return accounts.createUserAccount(req.body, res)
});

// Get a report of landing page information
router.post('/login', (req, res) => {
    return accounts.loginUser(req.body, res)
});

// Get a report of landing page information
router.post('/listAllPermissiblePages', (req, res) => {
    return accounts.getListOfAllPermissiblePages(req.body, res)
});

// Get user permissions
router.post('/getUserPerms', (req, res) => {
    return accounts.getUserPerms(req.body, res)
});

// Get user permissions
router.post('/getAccountDataWithToken', (req, res) => {
    return accounts.getAccountDataWithToken(req.body, res)
});

// Get user permissions
router.post('/updateOwnPassword', (req, res) => {
    return accounts.updateOwnPassword(req.body, res)
});


export default router;