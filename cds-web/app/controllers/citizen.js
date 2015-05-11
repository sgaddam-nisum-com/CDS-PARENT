/** 
 * Citizen Controller
 * Module dependencies.
 */
var citizenService = require('../services/citizen'),
    cdsRegistration = require('cds-registration'),
    log = require('cds-logger').logger("citizen-controller"),
    util = require('cds-util'),
    cdsConfig = require('cds-config'),
    async = require("async");

exports.savePersonalInf = function(req, res, next) {
    log.debug("savePersonalInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    cdsRegistration.savePersonalInf(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.editPersonalInf = function(req, res, next) {
    log.debug("editPersonalInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    cdsRegistration.editPersonalInf(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getPersonalInf = function(req, res, next) {
    log.debug("getPersonalInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    cdsRegistration.getPersonalInf(userId, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.deletePersonalinf = function(req, res, next) {
    log.debug("deletePersonalinf : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    citizenService.deletePersonalinf({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.saveWorkInf = function(req, res, next) {
    log.debug("saveWorkInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    cdsRegistration.saveWorkInf(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.editWorkInf = function(req, res, next) {
    log.debug("editWorkInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;
    var token = req.user ? req.user.data.token : null;


    cdsRegistration.editWorkInf(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getWorkInf = function(req, res, next) {
    log.debug("getWorkInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    cdsRegistration.getWorkInf(userId, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.saveVoterInf = function(req, res, next) {
    log.debug("saveVoterInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    cdsRegistration.saveVoterInf(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.editVoterInf = function(req, res, next) {
    log.debug("editVoterInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    cdsRegistration.editVoterInf(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getVoterInf = function(req, res, next) {
    log.debug("getVoterInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    cdsRegistration.getVoterInf(userId, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.deleteVoterInf = function(req, res, next) {
    log.debug("deleteVoterInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    citizenService.deleteVoterInf({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getVoterInfByText = function(req, res, next) {
    log.debug("getVoterInfByText : logged user - " + (req.user ? req.user.data.userName : "") + " q - " + req.query.q);
    var q = req.query.q;

    citizenService.getVoterInfByText({
        q: q
    }, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.saveResidentialAddress = function(req, res, next) {
    log.debug("saveResidentialAddress : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;

    cdsRegistration.saveResidentialAddress(params, null, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.editResidentialAddress = function(req, res, next) {
    log.debug("editResidentialAddress : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    cdsRegistration.editResidentialAddress(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};


exports.getResidentialAddress = function(req, res, next) {
    log.debug("getResidentialAddress : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    cdsRegistration.getResidentialAddress(userId, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.saveFamily = function(req, res, next) {
    log.debug("saveFamily : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;

    cdsRegistration.saveFamily(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.editFamily = function(req, res, next) {
    log.debug("editFamily : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    cdsRegistration.editFamily(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getFamily = function(req, res, next) {
    log.debug("getFamily : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    cdsRegistration.getFamily(userId, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.deleteFamily = function(req, res, next) {
    log.debug("deleteFamily : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    citizenService.deleteFamily({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.quickRegistration = function(req, res, next) {
    log.debug("quickRegistration : user - ");
    var params = req.body;
    var orgId = req.body.orgId;

    cdsRegistration.quickRegistration(params, req.files, orgId, function(resp) {
        res.json(resp);
    });
};

exports.getQualifications = function(req, res, next) {
    log.debug("getQualifications : logged user - " + (req.user ? req.user.data.userName : ""));

    var token = req.user ? req.user.data.token : null;

    citizenService.getQualifications(null, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getAddressByPincode = function(req, res, next) {
    log.debug("getAddressByPincode : logged user - " + (req.user ? req.user.data.userName : "") + " q - " + req.query.q);
    var q = req.query.q;
    var token = req.user ? req.user.data.token : null;

    citizenService.getAddressByPincode({
        q: q
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getOccupations = function(req, res, callback) {
    log.debug("getOccupations : logged user - " + (req.user ? req.user.data.userName : ""));
    var token = req.user ? req.user.data.token : null;

    citizenService.getOccupations(null, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.delete = function(req, res, next) {
    log.debug("delete : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    citizenService.delete({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.viewCitizen = function(req, res, next) {
    log.debug("viewCitizen : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    citizenService.viewCitizen({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.careerAspirations = function(req, res, next) {
    log.debug("careerAspirations : logged user - " + (req.user ? req.user.data.userName : ""));
    var token = req.user ? req.user.data.token : null;

    citizenService.careerAspirations(null, token, function(resp) {
        res.json(resp);
    });
};

exports.skillGaps = function(req, res, next) {
    log.debug("skillGaps : logged user - " + (req.user ? req.user.data.userName : ""));
    var token = req.user ? req.user.data.token : null;

    citizenService.skillGaps(null, token, function(resp) {
        req.resp = resp;
        next();
    });
};
