// Require express
const express = require('express');
const router = express.Router();
const { userSavedMeeting } = require('../controllers/meeting-controller');


//@desc /POST/user-meeting
router.post('/api/whiteboard/user-meeting', userSavedMeeting.createMeeting);

//@desc /GET/user-meeting
router.get('/api/whiteboard/user-meeting', userSavedMeeting.getAllMeetingSaved);

module.exports = router;