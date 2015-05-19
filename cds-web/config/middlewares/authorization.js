/**
 * Generic require login routing middleware
 */
var cdsConfig = require('cds-config'),
    util = require('cds-util');

exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        util.handleErrors(cdsConfig.errors.session.expired, function(resp) {
            return res.json(resp);
        });
    } else {
        next();
    }
};

exports.requiresLoginForPage = function(req, res, next) {
    if (!req.isAuthenticated()) {
        res.redirect('/signin');
    } else {
        next();
    }
};

/**
 * User authorizations routing middleware
 */
exports.user = {
    hasAuthorization: function(req, res, next) {
        next();
    }
};

/**
 *  filter  the response b4 sending to user
 */
exports.filterResponse = function(req, res) {
    var resp = req.resp;
    req.resp = null;
    if (resp.data.errorCode === '40105') {
        util.handleErrors(cdsConfig.errors.session.expired, function(resp) {
            return res.json(resp);
        });
    } else {
        res.json(resp);
    }

};
