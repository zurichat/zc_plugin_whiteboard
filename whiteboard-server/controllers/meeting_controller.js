const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Meeting = require('../models/meeting_model');

exports.createMeeting = async(req, res) => {
    try {
        const { anchor, participants, attachments, host, comments } = req.body;

        const meeting = new Meeting({
            anchor,
            participants,
            attachments,
            host,
            comments
        });
        const createdMeeting = await meeting.save();
        return res.status(200).json({
            status: "Success, Created successfully",
            data: {
                meeting_details: createdMeeting

            },
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: error,
            data: {
                message: "Server Error",
            },
        });
    }
}


exports.getAllMeetingSaved = async(req, res) => {
    try {
        const savedMeeting = await Meeting.find({});
        return res.status(200).json({
            status: "Meeting details gotten successfully",
            data: {
                savedMeeting
            },
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: error,
            data: {
                message: "Server Error",
            },
        });
    }
}