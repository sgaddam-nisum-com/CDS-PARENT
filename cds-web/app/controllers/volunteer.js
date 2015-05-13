/** 
 * Volunteer Controller
 * Module dependencies.
 */

var volunteerService = require('../services/volunteer'),
    cdsRegistration = require('cds-registration'),
    log = require('cds-logger').logger("volunteer-controller");


exports.save = function(req, res, next) {
    log.debug("save : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;
    var params = req.body;

    cdsRegistration.saveVolunteer(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.edit = function(req, res, next) {
    log.debug("edit : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;
    var params = req.body;

    cdsRegistration.editVolunteer(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.get = function(req, res, next) {
    log.debug("get : logged user - " + req.user.data.userName);
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    cdsRegistration.getVolunteer(userId, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.delete = function(req, res, next) {
    log.debug("delete : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;

    volunteerService.delete({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.areasIntrestedToVolunteer = function(req, res, next) {
    log.debug("areasIntrestedToVolunteer :" );
    var orgId = req.query.orgId;

    volunteerService.areasIntrestedToVolunteer(orgId, function(resp) {
		res.json(resp);
    });
};

exports.volunteerCategory = function(req, res, next) {
    log.debug("volunteerCategory : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;

    volunteerService.volunteerCategory(null, token, function(resp) {
        res.json(resp);
    });
};

exports.volunteerLeads = function(req, res, next) {
    log.debug("volunteerLeads : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;

    volunteerService.volunteerLeads(null, token, function(resp) {
        res.json(resp);
    });
};

exports.isVolunteerIdExist = function(req, res, next) {
    log.debug("isVolunteerIdExist : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;

    volunteerService.isVolunteerIdExist({
        volunteerId: volunteerId
    }, token, function(resp) {
        res.json(resp);
    });
};

exports.performanceGrades = function(req, res, next) {
    log.debug("performanceGrades : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;

    volunteerService.performanceGrades(null, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.volunteerSheet = function(req, res, next) {
    log.debug("volunteerSheet : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;
    var volunteerId = req.query.volunteerId;

    volunteerService.volunteerSheet({
        volunteerId: volunteerId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};
