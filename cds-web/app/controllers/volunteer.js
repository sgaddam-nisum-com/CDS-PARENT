/** 
 * Volunteer Controller
 * Module dependencies.
 */

var volunteerService = require('../services/volunteer'),
    log = require('cds-logger').logger("volunteer-controller");


exports.save = function(req, res, next) {
    log.debug("save : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;
    var params = req.body;

    volunteerService.save(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.edit = function(req, res, next) {
    log.debug("edit : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;
    var params = req.body;

    volunteerService.edit(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.get = function(req, res, next) {
    log.debug("get : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;

    volunteerService.get({
        userId: userId
    }, token, function(resp) {
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
    log.debug("areasIntrestedToVolunteer : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;

    volunteerService.areasIntrestedToVolunteer(null, token, function(resp) {
        req.resp = resp;
        next();
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
