// Require express
const express = require('express');
const router = require ("express").Router();


const userSavedMeeting  = require('../controllers/meeting_controller');


//@desc /POST/user-meeting
router.post('/whiteboard/user-meeting', userSavedMeeting.createMeeting);

//@desc /GET/user-meeting
router.get('/whiteboard/user-meeting', userSavedMeeting.getAllMeetingSaved);

module.exports = router;