const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController.js");

router.post("/agent/report", reportController.submitReport);

router.get("/hosts", reportController.getHosts);

router.get("/packages",
    // "/packages/:hostId"
    reportController.getPackages
);

router.get("/cis-results",
    // "/cis-results/:hostId"
    reportController.getCISResults
);

router.get("/dashboard", reportController.getDashboardStats);

module.exports = router;