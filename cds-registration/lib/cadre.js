/** 
 * Cadre Controller
 * Module dependencies.
 */

var cadreService = require('./services/cadre'),
    log = require('cds-logger').logger("cds-registration : cadre-controller");

exports = module.exports = require("./volunteer");

exports.saveCadre = function(params, token, callback) {
    log.debug("saveCadre  ");
    cadreService.save(params, token, function(resp) {
        callback(resp);
    });
};

exports.editCadre = function(params, token, callback) {
    log.debug("editCadre");

    cadreService.edit(params, token, function(resp) {
        callback(resp);
    });
};

exports.getCadre = function(userId, token, callback) {
    log.debug("getCadre : user id - " + userId);

    cadreService.get({
        userId: userId
    }, token, function(resp) {
        callback(resp);
    });
};
