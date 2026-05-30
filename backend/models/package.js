const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
    
    hostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Host"
    },

    name: String,
    version: String
});

module.exports = mongoose.model("Package", packageSchema);