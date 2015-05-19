/** 
 * Cadre Controller
 * Module dependencies.
 */

var cadreService = require('../services/cadre'),
    cdsRegistration = require('cds-registration'),
    util = require('cds-util'),
    log = require('cds-logger').logger("cadre-controller");

exports.save = function(req, res, next) {
    log.debug("save : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    cdsRegistration.saveCadre(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.edit = function(req, res, next) {
    log.debug("edit : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    cdsRegistration.editCadre(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.get = function(req, res, next) {
    log.debug("get : logged user - " + req.user.data.userName);
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    cdsRegistration.getCadre(userId, token, function(resp) {
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
    log.debug("partyPositions");
    var orgId = req.body.orgId;

    cadreService.partyPositions(orgId, function(resp) {
        res.json(resp);
    });
};

exports.bloodGroups = function(req, res, next) {
    log.debug("bloodGroups");
    var orgId = req.body.orgId;

    cadreService.bloodGroups(orgId, function(resp) {
        res.json(resp);
    });
};

exports.isPartyMemberShipIdExist = function(req, res, next) {
    log.debug("isPartyMemberShipIdExist");
    var partyMemberShipId = req.query.partyMemberShipId;
    var orgId = req.body.orgId;

    cadreService.isPartyMemberShipIdExist({
        partyMemberShipId: partyMemberShipId
    }, orgId, function(resp) {
        res.json(resp);
    });
};

exports.getCadreWorksheet = function(req, res, next) {
    log.debug("getCadreWorksheet : logged user - " + req.user.data.userName + " cadre id - " + req.query.userId);
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    cadreService.getCadreWorksheet({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getCadreLeads = function(req, res, next) {
    log.debug("getCadreLeads : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;

    cadreService.getCadreLeads(token, function(resp) {
        req.resp = resp;
        next();
    });
};
