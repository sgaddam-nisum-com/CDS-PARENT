/**
 * role.js
 */

var restService = require('cds-rest-services'),
    restUrls = require('cds-rest-services').urls,
    cdsConfig = require('cds-config'),
    header = cdsConfig.restUrl.contentType,
    requireUtil = require("util"),
    log = require('cds-logger').logger("cds-role-management");


exports.getRole = function(params, token, callback) {
    log.debug("getRole : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.user.getRole.path, params.id);
    var url = {
        path: path,
        method: restUrls.user.getRole.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.deactivateRole = function(params, token, callback) {
    log.debug("deactivateRole : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.user.deactivateRole.path, params.id);
    var url = {
        path: path,
        method: restUrls.user.deactivateRole.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getRoles = function(params, token, callback) {
    log.debug("getRoles : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    restService.builbArgs(restUrls.user.getRoles, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.saveRole = function(params, token, callback) {
    log.debug("saveRole : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    restService.builbArgs(restUrls.user.saveRole, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.updateRole = function(params, token, callback) {
    log.debug("updateRole : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    restService.builbArgs(restUrls.user.updateRole, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};
