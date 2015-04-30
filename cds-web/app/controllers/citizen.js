/** 
 * Citizen Controller
 * Module dependencies.
 */
var citizenService = require('../services/citizen'),
    log = require('../util/logger').logger("citizen-controller"),
    imageService = require('../util/image'),
    util = require('../util/util'),
    errors = require('../../config/errors/error'),
    cdsConfig = require('cds-config'),
    async = require("async");

exports.savePersonalInf = function(req, res, next) {
    log.debug("savePersonalInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    async.series({
            imagePath: function(callback) {
                if (Object.keys(req.files).length > 0) {
                    var source = req.files.photograph.path;
                    var target = cdsConfig.image.rootPath + cdsConfig.image.path;
                    var imageName = req.files.photograph.originalFilename;
                    imageService.saveImage(source, target + imageName, function(err, path) {
                        if (err) {
                            err = errors.image.save;
                            util.handleErrors(err, function(resp) {
                                res.json(resp);
                            });
                        } else {
                            //to do
                            callback(null, cdsConfig.image.path + imageName);
                        }
                    });
                } else {
                    callback(null, null);
                }

            },
            dob: function(callback) {
                var dob = params.dateOfBirth;
                if (dob) { //change date format
                    callback(null, util.formatDate(null, dob));
                } else {
                    callback(null, null);
                }
            },
            education: function(callback) {
                var education = params.educationId;
                if (education) {
                    //change date format
                    callback(null, {
                        "educationId": education
                    });
                } else {
                    callback(null, null);
                }
            }
        },
        function(err, results) {
            var imagePath = results.imagePath;
            dob = results.dob;
            education = results.education;
            if (imagePath) {
                params.photograph = imagePath;
            }
            if (dob) {
                params.dateOfBirth = dob;
            }
            if (education) {
                params.education = education;
            }

            citizenService.savePersonalInf(params, token, function(resp) {
                req.resp = resp;
                next();
            });
        });
};

exports.editPersonalInf = function(req, res, next) {
    log.debug("editPersonalInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    async.series({
            imagePath: function(callback) {
                if (Object.keys(req.files).length > 0) {
                    var source = req.files.photograph.path;
                    var target = cdsConfig.image.rootPath + cdsConfig.image.path;
                    var imageName = req.files.photograph.originalFilename;
                    imageService.saveImage(source, target + imageName, function(err, path) {
                        if (err) {
                            err = errors.image.save;
                            util.handleErrors(err, function(resp) {
                                res.json(resp);
                            });
                        } else {
                            //to do
                            callback(null, cdsConfig.image.path + imageName);
                        }
                    });
                } else {
                    callback(null, null);
                }
            },
            dob: function(callback) {
                var dob = params.dateOfBirth;
                if (dob) { //change date format
                    callback(null, util.formatDate(null, dob));
                } else {
                    callback(null, null);
                }
            },
            education: function(callback) {
                var education = params.educationId;
                if (education) {
                    //change date format
                    callback(null, {
                        "educationId": education
                    });
                } else {
                    callback(null, null);
                }
            }
        },
        function(err, results) {
            var imagePath = results.imagePath;
            dob = results.dob;
            education = results.education;
            if (imagePath) {
                //to do
                // params.photograph = imagePath;
            }
            if (dob) {
                params.dateOfBirth = dob;
            }
            if (education) {
                params.education = education;
            }
            citizenService.editPersonalInf(params, token, function(resp) {
                req.resp = resp;
                next();
            });
        });
};

exports.getPersonalInf = function(req, res, next) {
    log.debug("getPersonalInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    citizenService.getPersonalInf({
        userId: userId
    }, token, function(resp) {
        var dob = resp.data.dateOfBirth;
        if (dob) { //change date format
            resp.data.dateOfBirth = util.deFormatDate(null, dob);
        }
        if (resp.data.education && resp.data.education.educationId) {
            resp.data.educationId = resp.data.education.educationId;
        }

        req.resp = resp;
        next();
    });
};

exports.deletePersonalinf = function(req, res, next) {
    log.debug("deletePersonalinf : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    citizenService.deletePersonalinf({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.saveWorkInf = function(req, res, next) {
    log.debug("saveWorkInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    citizenService.saveWorkInf(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.editWorkInf = function(req, res, next) {
    log.debug("editWorkInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    citizenService.editWorkInf(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getWorkInf = function(req, res, next) {
    log.debug("getWorkInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    citizenService.getWorkInf({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.saveVoterInf = function(req, res, next) {
    log.debug("saveVoterInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;

    citizenService.saveVoterInf(params, null, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.editVoterInf = function(req, res, next) {
    log.debug("editVoterInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    citizenService.editVoterInf(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getVoterInf = function(req, res, next) {
    log.debug("getVoterInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    citizenService.getVoterInf({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.deleteVoterInf = function(req, res, next) {
    log.debug("deleteVoterInf : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    citizenService.deleteVoterInf({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getVoterInfByText = function(req, res, next) {
    log.debug("getVoterInfByText : logged user - " + (req.user ? req.user.data.userName : "") + " q - " + req.query.q);
    var q = req.query.q;

    citizenService.getVoterInfByText({
        q: q
    }, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.saveResidentialAddress = function(req, res, next) {
    log.debug("saveResidentialAddress : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;

    citizenService.saveResidentialAddress(params, null, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.editResidentialAddress = function(req, res, next) {
    log.debug("editResidentialAddress : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    citizenService.editResidentialAddress(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};


exports.getResidentialAddress = function(req, res, next) {
    log.debug("getResidentialAddress : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    citizenService.getResidentialAddress({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.saveFamily = function(req, res, next) {
    log.debug("saveFamily : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;
    var marriageDate = params[1].marriageDate;
    var dateOfBirth = params[1].dateOfBirth;

    if (marriageDate) {
        params[1].marriageDate = util.formatDate(null, marriageDate);
    }
    if (dateOfBirth) {
        params[1].dateOfBirth = util.formatDate(null, dateOfBirth);
    }

    for (var i = 2; i < params.length; i++) {
        if (params[i].dateOfBirth) {
            params[i].dateOfBirth = util.formatDate(null, params[i].dateOfBirth);
        }
    }

    citizenService.saveFamily(params, null, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.editFamily = function(req, res, next) {
    log.debug("editFamily : logged user - " + (req.user ? req.user.data.userName : ""));
    var params = req.body;
    var marriageDate = params[1].marriageDate;
    var dateOfBirth = params[1].dateOfBirth;

    if (marriageDate) {
        params[1].marriageDate = util.formatDate(null, marriageDate);
    }
    if (dateOfBirth) {
        params[1].dateOfBirth = util.formatDate(null, dateOfBirth);
    }

    for (var i = 2; i < params.length; i++) {
        if (params[i].dateOfBirth) {
            params[i].dateOfBirth = util.formatDate(null, params[i].dateOfBirth);
        }
    }

    var token = req.user ? req.user.data.token : null;

    citizenService.editFamily(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getFamily = function(req, res, next) {
    log.debug("getFamily : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    citizenService.getFamily({
        userId: userId
    }, token, function(resp) {

        var marriageDate = resp.data[0].marriageDate;
        if (marriageDate) { //change date format
            resp.data[0].marriageDate = util.deFormatDate(null, marriageDate);
        }
        if (resp.data[0].education && resp.data[0].education.educationId) {
            resp.data[0].educationId = resp.data[0].education.educationId;
        }

        var dateOfBirth = resp.data[0].dateOfBirth;
        if (dateOfBirth) { //change date format
            resp.data[0].dateOfBirth = util.deFormatDate(null, dateOfBirth);
        }

        for (var i = 1; i < resp.data.length; i++) {
            if (resp.data[i].dateOfBirth) {
                resp.data[i].dateOfBirth = util.deFormatDate(null, resp.data[i].dateOfBirth);
            }
            if (resp.data[i].education && resp.data[i].education.educationId) {
                resp.data[i].educationId = resp.data[i].education.educationId;
            }
        }

        req.resp = resp;
        next();
    });
};

exports.deleteFamily = function(req, res, next) {
    log.debug("deleteFamily : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    citizenService.deleteFamily({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.quickRegistration = function(req, res, next) {
    log.debug("quickRegistration : user - ");
    var params = req.body;
    var orgId = req.query.orgId;

    citizenService.quickRegistration(params, orgId, function(resp) {
        res.json(resp);
    });
};

exports.getQualifications = function(req, res, next) {
    log.debug("getQualifications : logged user - " + (req.user ? req.user.data.userName : ""));

    var token = req.user ? req.user.data.token : null;

    citizenService.getQualifications(null, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getAddressByPincode = function(req, res, next) {
    log.debug("getAddressByPincode : logged user - " + (req.user ? req.user.data.userName : "") + " q - " + req.query.q);
    var q = req.query.q;
    var token = req.user ? req.user.data.token : null;

    citizenService.getAddressByPincode({
        q: q
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getOccupations = function(req, res, callback) {
    log.debug("getOccupations : logged user - " + (req.user ? req.user.data.userName : ""));
    var token = req.user ? req.user.data.token : null;

    citizenService.getOccupations(null, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.delete = function(req, res, next) {
    log.debug("delete : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    citizenService.delete({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.viewCitizen = function(req, res, next) {
    log.debug("viewCitizen : logged user - " + (req.user ? req.user.data.userName : ""));
    var userId = req.query.userId;
    var token = req.user ? req.user.data.token : null;

    citizenService.viewCitizen({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.careerAspirations = function(req, res, next) {
    log.debug("careerAspirations : logged user - " + (req.user ? req.user.data.userName : ""));
    var token = req.user ? req.user.data.token : null;

    citizenService.careerAspirations(null, token, function(resp) {
        res.json(resp);
    });
};

exports.skillGaps = function(req, res, next) {
    log.debug("skillGaps : logged user - " + (req.user ? req.user.data.userName : ""));
    var token = req.user ? req.user.data.token : null;

    citizenService.skillGaps(null, token, function(resp) {
        req.resp = resp;
        next();
    });
};
