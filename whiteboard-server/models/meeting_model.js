const mongoose = require('mongoose');
const { Schema } = mongoose;

const meetingSchema = new Schema({
    anchor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    participants: {
        type: String,
        required: true,
        default: ''
    },
    attachments: {
        type: String
    },
    host: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    },
})

// Exports schemas
module.exports = mongoose.model("Meeting", meetingSchema);