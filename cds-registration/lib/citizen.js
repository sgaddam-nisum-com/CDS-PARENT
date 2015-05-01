/** 
 * Citizen Controller
 * Module dependencies.
 */
var log = require('cds-logger').logger("cds-registration : citizen-controller"),
    util = require('cds-util'),
    cdsConfig = require('cds-config'),
    async = require("async"),
    citizenService = require('./services/citizen');

exports.savePersonalInf = function(params, files, token, fCallback) {
    log.debug("savePersonalInf");

    async.series({
            imagePath: function(callback) {
                if (files != null && Object.keys(files).length > 0) {
                    var source = files.photograph.path;
                    var target = cdsConfig.image.rootPath + cdsConfig.image.path;
                    var imageName = files.photograph.originalFilename;
                    util.image.save(source, target + imageName, function(err, path) {
                        if (err) {
                            err = cdsConfig.errors.image.save;
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
                fCallback(resp);
            });
        });
};

exports.editPersonalInf = function(params, files, token, fCallback) {
    log.debug("editPersonalInf ");

    async.series({
            imagePath: function(callback) {
                if (files != null && Object.keys(files).length > 0) {
                    var source = files.photograph.path;
                    var target = cdsConfig.image.rootPath + cdsConfig.image.path;
                    var imageName = files.photograph.originalFilename;
                    util.image.save(source, target + imageName, function(err, path) {
                        if (err) {
                            err = cdsConfig.errors.image.save;
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
                fCallback(resp);
            });
        });
};

exports.getPersonalInf = function(userId, token, callback) {
    log.debug("getPersonalInf");

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

        callback(resp);
    });
};

exports.saveWorkInf = function(params, token, callback) {
    log.debug("saveWorkInf ");

    citizenService.saveWorkInf(params, token, function(resp) {
        callback(resp);
    });
};

exports.editWorkInf = function(params, token, callback) {
    log.debug("editWorkInf");

    citizenService.editWorkInf(params, token, function(resp) {
        callback(resp);
    });
};

exports.getWorkInf = function(userId, token, callback) {
    log.debug("getWorkInf : user id - " + userId);
    citizenService.getWorkInf({
        userId: userId
    }, token, function(resp) {
        callback(resp);
    });
};

exports.saveVoterInf = function(params, token, callback) {
    log.debug("saveVoterInf ");

    citizenService.saveVoterInf(params, token, function(resp) {
        callback(resp);
    });
};

exports.editVoterInf = function(params, token, callback) {
    log.debug("editVoterInf");

    citizenService.editVoterInf(params, token, function(resp) {
        callback(resp);
    });
};

exports.getVoterInf = function(userId, token, callback) {
    log.debug("getVoterInf : user id - " + userId);

    citizenService.getVoterInf({
        userId: userId
    }, token, function(resp) {
        callback(resp);
    });
};

exports.saveResidentialAddress = function(params, token, callback) {
    log.debug("saveResidentialAddress");

    citizenService.saveResidentialAddress(params, token, function(resp) {
        callback(resp);
    });
};

exports.editResidentialAddress = function(params, token, callback) {
    log.debug("editResidentialAddress");

    citizenService.editResidentialAddress(params, token, function(resp) {
        callback(resp);
    });
};


exports.getResidentialAddress = function(userId, token, callback) {
    log.debug("getResidentialAddress : user id - " + userId);

    citizenService.getResidentialAddress({
        userId: userId
    }, token, function(resp) {
        callback(resp);
    });
};

exports.saveFamily = function(params, token, callback) {
    log.debug("saveFamily");
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

    citizenService.saveFamily(params, token, function(resp) {
        callback(resp);
    });
};

exports.editFamily = function(params, token, callback) {
    log.debug("editFamily");
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

    citizenService.editFamily(params, token, function(resp) {
        callback(resp);
    });
};

exports.getFamily = function(userId, token, callback) {
    log.debug("getFamily : user id - " + (userId));

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

        callback(resp);
    });
};

exports.quickRegistration = function(params, orgId, callback) {
    log.debug("quickRegistration");
    citizenService.quickRegistration(params, orgId, function(resp) {
        callback(resp);
    });
};
