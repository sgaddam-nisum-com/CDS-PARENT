/** 
 * Office Controller
 * Module dependencies.
 */
var officeService = require('../services/office'),
    log = require('cds-logger').logger("office-controller");

exports.VnCVerificationList = function(req, res, next) {
    log.debug("VnCVerificationList : logged user - " + req.user.data.userName + " selected user - " + req.query.userId + " type : " + req.query.type);
    var userId = req.query.userId;
    var type = req.query.type;
    var token = req.user ? req.user.data.token : null;

    officeService.VnCVerificationList({
        citizenId: userId,
        approvalType: type
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.assignCadreForApproval = function(req, res, next) {
    log.debug("assignCadreForApproval : logged user - " + req.user.data.userName + " selected user - " + req.query.userId + " type : " + req.query.type);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    officeService.assignCadreForApproval(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.verifyVnC = function(req, res, next) {
    log.debug("verifyVnC : logged user - " + req.user.data.userName + " selected user - " + req.query.userId + " type : " + req.query.type);
    var userId = req.query.userId;
    var type = req.query.type;
    var token = req.user ? req.user.data.token : null;

    officeService.verifyVnC({
        citizenId: userId,
        approvalType: type
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.rejectVnC = function(req, res, next) {
    log.debug("rejectVnC : logged user - " + req.user.data.userName + " selected user - " + req.query.userId);
    var userId = req.query.userId;
    var type = req.query.type;
    var token = req.user ? req.user.data.token : null;

    officeService.rejectVnC({
        citizenId: userId,
        approvalType: type
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.holdVnC = function(req, res, next) {
    log.debug("holdVnC : logged user - " + req.user.data.userName + " selected user - " + req.query.userId);
    var userId = req.query.userId;
    var type = req.query.type;
    var token = req.user ? req.user.data.token : null;

    officeService.holdVnC({
        citizenId: userId,
        approvalType: type
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getServiceCentreEmployeeDetails = function(req, res, next) {
    log.debug("getServiceCentreEmployeeDetails : logged user - " + req.user.data.userName);
    var sId = req.query.sId;
    var token = req.user ? req.user.data.token : null;

    officeService.getServiceCentreEmployeeDetails({
        sId: sId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getServiceCentreDetails = function(req, res, next) {
    log.debug("getServiceCentreDetails : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;

    officeService.getServiceCentreDetails(token, function(resp) {
        req.resp = resp;
        next();
    });
};
