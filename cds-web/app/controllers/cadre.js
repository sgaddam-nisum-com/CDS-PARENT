/** 
 * Cadre Controller
 * Module dependencies.
 */

var cadreService = require('../services/cadre'),
    util = require('../util/util'),
    log = require('cds-logger').logger("cadre-controller");

exports.save = function(req, res, next) {
    log.debug("save : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    cadreService.save(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.edit = function(req, res, next) {
    log.debug("edit : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    cadreService.edit(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.get = function(req, res, next) {
    log.debug("get : logged user - " + req.user.data.userName);
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    cadreService.get({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.delete = function(req, res, next) {
    log.debug("delete : logged user - " + req.user.data.userName);
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    cadreService.delete({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.partyPositions = function(req, res, next) {
    log.debug("partyPositions : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;

    cadreService.partyPositions(null, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.bloodGroups = function(req, res, next) {
    log.debug("bloodGroups : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;
    
    cadreService.bloodGroups(null, token, function(resp) {
        res.json(resp);
    });
};

exports.isPartyMemberShipIdExist = function(req, res, next) {
    log.debug("isPartyMemberShipIdExist : logged user - " + req.user.data.userName);
    var partyMemberShipId = req.query.partyMemberShipId;
    var token = req.user ? req.user.data.token : null;

    cadreService.isPartyMemberShipIdExist({
        partyMemberShipId: partyMemberShipId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.cadreWorksheet = function(req, res, next) {
    log.debug("cadreWorksheet : logged user - " + req.user.data.userName + " cadre id - " + req.query.userId);
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    cadreService.cadreWorksheet({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};
