/**
 * Module dependencies.
 */

exports.render = function(req, res, next) {
    res.render('index.html', {
        msg: "Welcome"
    });
};

exports.home = function(req, res, next) {
    res.json(req.user);
};

exports.postrequest = function(req, res, next) {
    res.render('external/post-request.html', {});
};
exports.register = function(req, res, next) {
    res.render('index.html', {});
};
exports.dashboard = function(req, res, next) {
    res.render('index.html', {});
};
exports.forgotpwd = function(req, res, next) {
    res.render('external/forgot-password.html', {});
};
exports.calendar = function(req, res, next) {
    res.render('index.html', {});
};

exports.inbox = function(req, res, next) {
    res.render('index.html', {});
};

exports.tasks = function(req, res, next) {
    res.render('index.html', {});
};

exports.profile = function(req, res, next) {
    res.render('index.html', {});
};
