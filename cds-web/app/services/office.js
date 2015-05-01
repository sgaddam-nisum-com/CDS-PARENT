/** 
 * Office Service
 * Module dependencies.
 */

var restService = require('cds-rest-services'),
    restUrls = restService.urls,
    cdsConfig = require('cds-config'),
    requireUtil = require("util"),
    header = cdsConfig.restUrl.contentType,
    log = require('cds-logger').logger("office-service");

exports.VnCVerificationList = function(params, token, callback) {
    log.debug("VnCVerificationList : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    restService.builbArgs(restUrls.office.vnCVerificationList, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.verifyCadre = function(params, token, callback) {
    log.debug("verifyCadre : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    restService.builbArgs(restUrls.office.verifyVnC, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.rejectVnC = function(params, token, callback) {
    log.debug("rejectVnC : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    restService.builbArgs(restUrls.office.rejectVnC, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.viewUserInfo = function(params, token, callback) {
    log.debug("viewUserInfo : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    var path = requireUtil.format(restUrls.office.viewUserInfo.path, params.userId);
    var url = {
        path: path,
        method: restUrls.office.viewUserInfo.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};
