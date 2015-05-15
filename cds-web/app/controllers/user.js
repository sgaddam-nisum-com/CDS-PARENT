/** 
 * User Controller
 * Module dependencies.
 */
var userService = require('../services/user'),
    taskMgmt = require('cds-task-management'),
    roleMgmt = require('cds-role-management'),
    log = require('cds-logger').logger("user-controller");

exports.signin = function(req, res, next) {
    log.debug("signin");
    if (!req.user) {
        res.render('index.html', {
            title: 'Login'
        });
    } else {
        res.redirect('/success');
    }
};

exports.myProfile = function(req, res, next) {
    log.debug("myProfile : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    userService.myProfile(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.updateProfile = function(req, res, next) {
    log.debug("updateProfile : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    userService.updateProfile(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.authenticate = function(params, callback) {
    log.debug("authenticate : logging user : " + params.loginId);
    userService.authenticate(params, callback);
};

exports.resetPassword = function(req, res, next) {
    log.debug("resetPassword : logged user - " + req.user);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    userService.resetPassword(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.viewUser = function(req, res, next) {
    log.debug("viewUser : logged user - " + req.user.data.userName);
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    userService.viewUser({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};


exports.getUserToken = function(user) {
    return user ? user.token : null;
};

exports.isUserExist = function(req, res, next) {
    log.debug("isUserExist : userName - " + req.query.userName);

    var userName = req.query.userName;
    var orgId = req.query.orgId;

    userService.isUserExist({
        userId: userName
    }, orgId, function(resp) {
        res.json(resp);
    });
};

exports.isMobileExist = function(req, res, next) {
    log.debug("isMobileExist : mobileNumber - " + req.query.mobileNumber);

    var mobileNumber = req.query.mobileNumber;
    var orgId = req.query.orgId;

    userService.isMobileExist({
        mobileNo: mobileNumber
    }, orgId, function(resp) {
        res.json(resp);
    });
};

exports.isMailExist = function(req, res, next) {
    log.debug("isMailExist : email - " + req.query.email);

    var email = req.query.email;
    var orgId = req.query.orgId;

    userService.isMailExist({
        mail: email
    }, orgId, function(resp) {
        res.json(resp);
    });
};

exports.userTypes = function(req, res, next) {
    log.debug("userTypes : orgId - " + req.query.orgId);
    var orgId = req.query.orgId;

    userService.userTypes(null, orgId, function(resp) {
        res.json(resp);
    });
};

exports.usersList = function(req, res, next) {
    log.debug("usersList : logged user - " + req.user.data.userName);
    var params = req.query;
    params.limit = req.query.limit;

    var token = req.user ? req.user.data.token : null;

    userService.usersList(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.createTask = function(req, res, next) {
    log.debug("createTask : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    taskMgmt.createTask(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.editTask = function(req, res, next) {
    log.debug("editTask : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    taskMgmt.editTask(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.deleteTask = function(req, res, next) {
    log.debug("deleteTask : logged user - " + req.user.data.userName);
    var tid = req.query.id;
    var token = req.user ? req.user.data.token : null;

    taskMgmt.deleteTask({
        id: tid
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.addAttachmentToTask = function(req, res, next) {
    log.debug("addAttachmentToTask : logged user - " + req.user.data.userName);
    var tid = req.query.id;
    var token = req.user ? req.user.data.token : null;

    taskMgmt.addAttachmentToTask({
        id: tid
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.deleteAttachmentFromTask = function(req, res, next) {
    log.debug("deleteAttachmentFromTask : logged user - " + req.user.data.userName);
    var tid = req.query.id;
    var token = req.user ? req.user.data.token : null;

    taskMgmt.deleteAttachmentFromTask({
        id: tid
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.addCommentToTask = function(req, res, next) {
    log.debug("addCommentToTask : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    taskMgmt.addCommentToTask(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.updateCommentToTask = function(req, res, next) {
    log.debug("updateCommentToTask : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    taskMgmt.updateCommentToTask(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.deleteCommentToTask = function(req, res, next) {
    log.debug("deleteCommentToTask : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    taskMgmt.deleteCommentToTask(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getStatuses = function(req, res, next) {
    log.debug("getStatuses : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    taskMgmt.getStatuses(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};


exports.getTaskDetails = function(req, res, next) {
    log.debug("getTaskDetails : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    taskMgmt.getTaskDetails(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getTasks = function(req, res, next) {
    log.debug("getTasks : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    taskMgmt.getTasks(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getMyTasks = function(req, res, next) {
    log.debug("getMyTasks : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    taskMgmt.getMyTasks(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.requestTypes = function(req, res, next) {
    log.debug("requestTypes : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    taskMgmt.requestTypes(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.taskCategories = function(req, res, next) {
    log.debug("taskCategories : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    taskMgmt.taskCategories(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.taskPriority = function(req, res, next) {
    log.debug("taskPriority : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    taskMgmt.taskPriority(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

//roles
exports.getRole = function(req, res, next) {
    log.debug("getRole : logged user - " + req.user.data.userName);
    var id = req.query.id;
    var token = req.user ? req.user.data.token : null;

    roleMgmt.getRole({
        id: id
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.deactivateRole = function(req, res, next) {
    log.debug("deactivateRole : logged user - " + req.user.data.userName);
    var id = req.query.id;
    var token = req.user ? req.user.data.token : null;

    roleMgmt.deactivateRole({
        id: id
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getRoles = function(req, res, next) {
    log.debug("getRoles : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;

    roleMgmt.getRoles(null, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.saveRole = function(req, res, next) {
    log.debug("saveRole : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    roleMgmt.saveRole(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.updateRole = function(req, res, next) {
    log.debug("updateRole : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    roleMgmt.updateRole(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getPrivileges = function(req, res, next) {
    log.debug("getPrivileges : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;

    userService.getPrivileges(token, function(resp) {
        req.resp = resp;
        next();
    });
};

/**
 * Logout
 */
exports.signout = function(req, res, next) {
    req.logout();
    res.redirect('/');
};

/**
 * User Data
 */
exports.getUserFromSession = function(req, res, next) {
    var user = req.user;

    //remove non accesible data for browser
    delete user.token;
    res.json(user);
};
