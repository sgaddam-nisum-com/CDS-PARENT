/** 
 * Volunteer Controller
 * Module dependencies.
 */

var volunteerService = require('./services/volunteer'),
    log = require('cds-logger').logger("cds-registration : volunteer-controller");

exports = module.exports = require("./citizen");

exports.saveVolunteer = function(params, token, callback) {
    log.debug("saveVolunteer");

    volunteerService.save(params, token, function(resp) {
        callback(resp);
    });
};

exports.editVolunteer = function(params, token, callback) {
    log.debug("editVolunteer");

    volunteerService.edit(params, token, function(resp) {
        callback(resp);
    });
};

exports.getVolunteer = function(userId, token, callback) {
    log.debug("getVolunteer : user id - " + userId);

    volunteerService.get({
        userId: userId
    }, token, function(resp) {
        callback(resp);
    });
};
