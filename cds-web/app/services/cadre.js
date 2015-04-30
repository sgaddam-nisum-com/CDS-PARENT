/** 
 * Citizen Service
 * Module dependencies.
 */

var restService = require('cds-rest-services'),
    restUrls = require('cds-rest-services'),
    cdsConfig = require('cds-config'),
    header = cdsConfig.restUrl.contentType,
    requireUtil = require("util"),
    properties = require("../controllers/properties"),
    log = require('cds-logger').logger("cadre-service");

exports.save = function(params, token, callback) {
    log.debug("save : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path    
    var url = {
        path: requireUtil.format(restUrls.cadre.save.path, params.userId),
        method: restUrls.cadre.save.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.edit = function(params, token, callback) {
    log.debug("edit : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.cadre.edit.path, params.userId),
        method: restUrls.cadre.edit.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.get = function(params, token, callback) {
    log.debug("get : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.cadre.get.path, params.userId),
        method: restUrls.cadre.get.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.delete = function(params, token, callback) {
    log.debug("delete : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.cadre.delete.path, params.userId),
        method: restUrls.cadre.delete.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.partyPositions = function(params, token, callback) {
    log.debug("partyPositions : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    restService.builbArgs(restUrls.cadre.partyPositions, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.bloodGroups = function(params, token, callback) {
    log.debug("bloodGroups : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    restService.builbArgs(restUrls.cadre.bloodGroups, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.isPartyMemberShipIdExist = function(params, token, callback) {
    log.debug("isPartyMemberShipIdExist : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.cadre.isPartyMemberShipIdExist.path, params.partyMemberShipId),
        method: restUrls.cadre.isPartyMemberShipIdExist.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.cadreWorksheet = function(params, token, callback) {
    log.debug("cadreWorksheet : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.cadre.cadreWorksheet.path, params.userId),
        method: restUrls.cadre.cadreWorksheet.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};
