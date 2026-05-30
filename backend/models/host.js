const mongoose = require("mongoose");

const hostSchema = new mongoose.Schema({

    hostname: String,
    os: String,
    ipAddress: String,
    
    lastSeen: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Host", hostSchema);