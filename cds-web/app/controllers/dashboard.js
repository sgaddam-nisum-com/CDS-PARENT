/** 
 * Dashboard Controller
 * Module dependencies.
 */

var dashboardService = require('../services/dashboard'),
    util = require('cds-util'),
    log = require('cds-logger').logger("dashboard-controller");

exports.viewMessage = function(req, res, next) {
    log.debug("save : logged user - " + req.user.data.user.appUserId);
    var params = req.query.msgId;
    var token = req.user ? req.user.data.token : null;

    dashboardService.viewMessage({
        msgId: msgId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.notifications = function(req, res, next) {
    log.debug("notifications : logged user - " + req.user.data.user.appUserId);
    var token = req.user ? req.user.data.token : null;

    dashboardService.notifications(token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.messageCount = function(req, res, next) {
    log.debug("messageCount : logged user - " + req.user.data.user.appUserId);
    var token = req.user ? req.user.data.token : null;
    var type = req.query.type;

    dashboardService.messageCount({
        type: type
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.tasksByAge = function(req, res, next) {
    log.debug("tasksByAge : logged user - " + req.user.data.user.appUserId);
    var token = req.user ? req.user.data.token : null;
    var userId = req.query.userId || req.user.data.user.appUserId;
    var criteria = req.query.criteria;

    dashboardService.tasksByAge({
        userId: userId,
        criteria: criteria
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.tasksTrendRPerMonth = function(req, res, next) {
    log.debug("tasksTrendRPerMonth : logged user - " + req.user.data.user.appUserId);
    var token = req.user ? req.user.data.token : null;
    var type = req.query.type;

    dashboardService.tasksTrendRPerMonth({
            type: type
        }
        token,
        function(resp) {
            req.resp = resp;
            next();
        });
};

exports.cadresTrendRPerMonth = function(req, res, next) {
    log.debug("cadresTrendRPerMonth : logged user - " + req.user.data.user.appUserId);
    var token = req.user ? req.user.data.token : null;

    dashboardService.cadresTrendRPerMonth(token, function(resp) {
        req.resp = resp;
        next();
    });
};
