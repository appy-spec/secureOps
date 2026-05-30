const mongoose = require("mongoose");

const cisSchema = new mongoose.Schema({
    
    hostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Host"
    },

    checkName: String,

    status: String,

    evidence: String
});

module.exports = mongoose.model("CISResult", cisSchema);