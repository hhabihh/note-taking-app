const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth');
const dashboardController = require('../controller/dashboardController')

/**
 * Dashboard Routes
 */
router.get('/dashboard', isLoggedIn, dashboardController.dashboard);
router.get('/dashboard/item/:id', isLoggedIn, dashboardController.dashboardViewNote);
router.put('/dashboard/item/:id', isLoggedIn, dashboardController.dashboardUpdateNote);
router.delete('/dashboard/note-delete/:id', isLoggedIn, dashboardController.dashboardDeleteNote);
router.get('/dashboard/add', isLoggedIn, dashboardController.dashboardAddNote);
router.post('/dashboard/add', isLoggedIn, dashboardController.dashboardSubmitNote);
router.get('/dashboard/search', isLoggedIn, dashboardController.dashboardSearch);
router.post('/dashboard/search', isLoggedIn, dashboardController.dashboardSubmitSearch);


module.exports = router;