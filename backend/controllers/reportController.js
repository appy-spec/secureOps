const Host = require("../models/host.js");
const Package = require("../models/package.js");
const CISResult = require("../models/cisResult.js");

exports.submitReport = async (req, res) => {
    try {

        const data = req.body;

        const host = new Host({
            hostname: data.hostname,
            os: data.os,
            ipAddress: data.ipAddress
        });

        const addedHost=await host.save();

        // Save packages
        const packageDocs = data.packages.map((pkg) => ({
            hostId: addedHost._id,
            name: pkg.name,
            version: pkg.version
        }));

        await Package.insertMany(packageDocs);

        // Save CIS checks
        const cisDocs = data.checks.map((check) => ({
            hostId: addedHost._id,
            checkName: check.checkName,
            status: check.status,
            evidence: check.evidence
        }));

        await CISResult.insertMany(cisDocs);

        res.status(200).json({
            message: "Report saved successfully"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            error: err.message
        });
    }
};

exports.getHosts = async (req, res) => {

    const hosts = await Host.find();

    res.json(hosts);
};

exports.getPackages = async (req, res) => {

    // const packages = await Package.find({
    //     hostId: req.params.hostId
    // });

    // res.json(packages);

    const packages = await Package.find();

    res.json(packages);
};

exports.getCISResults = async (req, res) => {

    // const results = await CISResult.find({
    //     hostId: req.params.hostId
    // });

    // res.json(results);

    const results = await CISResult.find();

    res.json(results);
};

exports.getDashboardStats = async (req, res) => {

    try {

        const hosts = await Host.countDocuments();

        const packages = await Package.countDocuments();

        const passedChecks = await CISResult.countDocuments({
            status: "PASS"
        });

        const failedChecks = await CISResult.countDocuments({
            status: "FAIL"
        });

        res.json({
            hosts,
            packages,
            passedChecks,
            failedChecks
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }
};