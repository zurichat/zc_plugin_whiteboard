const express = require('express');
const router = require ('express').Router();
const InformationController = require('../controllers/sidebar_info');

// Sidebar route
router.get('/sidebar', InformationController.SidebarInformation);

module.exports = router;