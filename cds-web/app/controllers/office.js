/** 
 * Office Controller
 * Module dependencies.
 */
var officeService = require('../services/office'),
    log = require('cds-logger').logger("office-controller");

var citizenController = require('./citizen'),
    volunteerController = require('./volunteer'),
    cadreController = require('./cadre');

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

exports.viewUserInfo = function(req, res, next) {
    log.debug("rejectVnC : logged user - " + req.user.data.userName + " selected user - " + req.query.userId);
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    officeService.viewUserInfo({
        citizenId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};
