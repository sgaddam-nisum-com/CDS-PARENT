/**
 * task.js
 */

var restService = require('cds-rest-services'),
    restUrls = require('cds-rest-services').urls,
    cdsConfig = require('cds-config'),
    header = cdsConfig.restUrl.contentType,
    log = require('cds-logger').logger("cds-task-management");


exports.createTask = function(params, token, callback) {
    log.debug("createTask : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    restService.builbArgs(restUrls.user.createTask, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.editTask = function(params, token, callback) {
    log.debug("editTask : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    restService.builbArgs(restUrls.user.editTask, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.deleteTask = function(params, token, callback) {
    log.debug("deleteTask : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    restService.builbArgs(restUrls.user.deleteTask, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getTask = function(params, token, callback) {
    log.debug("getTask : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    restService.builbArgs(restUrls.user.getTask, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.viewTask = function(params, token, callback) {
    log.debug("viewTask : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    restService.builbArgs(restUrls.user.viewTask, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.viewTasks = function(params, token, callback) {
    log.debug("viewTasks : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    restService.builbArgs(restUrls.user.viewTasks, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};
