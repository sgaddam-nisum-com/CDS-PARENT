/** 
 * Dashboard Service
 * Module dependencies.
 */

var restService = require('cds-rest-services'),
    restUrls = restService.urls,
    cdsConfig = require('cds-config'),
    header = cdsConfig.restUrl.contentType,
    requireUtil = require("util"),
    log = require('cds-logger').logger("dashboard-service");

exports.viewMessage = function(params, token, callback) {
    log.debug("viewMessage : " + (JSON.stringify(params)));
    var headers = header;
    headers[cdsConfig.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.dashboard.viewMessage.path, params.msgId),
        method: restUrls.dashboard.viewMessage.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.notifications = function(token, callback) {
    log.debug("notifications : " + (JSON.stringify(params)));
    var headers = header;
    headers[cdsConfig.token] = token;

    restService.builbArgs(restUrls.dashboard.notifications, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.messageCount = function(params, token, callback) {
    log.debug("messageCount : " + (JSON.stringify(params)));
    var headers = header;
    headers[cdsConfig.token] = token;

    var url = {
        path: requireUtil.format(restUrls.dashboard.messageCount.path, params.type),
        method: restUrls.dashboard.messageCount.method
    };

    restService.builbArgs(restUrls.dashboard.messageCount, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.tasksByAge = function(params, token, callback) {
    log.debug("tasksByAge : " + (JSON.stringify(params)));
    var headers = header;
    headers[cdsConfig.token] = token;

    var url = {
        path: requireUtil.format(restUrls.dashboard.tasksByAge.path, params.userId),
        method: restUrls.dashboard.tasksByAge.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.tasksTrendRPerMonth = function(params, token, callback) {
    log.debug("tasksTrendRPerMonth : " + (JSON.stringify(params)));
    var headers = header;
    headers[cdsConfig.token] = token;

    var url = {
        path: requireUtil.format(restUrls.dashboard.tasksTrendRPerMonth.path, params.type),
        method: restUrls.dashboard.tasksTrendRPerMonth.method
    };

    restService.builbArgs(restUrls.dashboard.tasksTrendRPerMonth, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.cadresTrendRPerMonth = function(token, callback) {
    log.debug("cadresTrendRPerMonth : " + (JSON.stringify(params)));
    var headers = header;
    headers[cdsConfig.token] = token;

    restService.builbArgs(restUrls.dashboard.cadresTrendRPerMonth, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};
