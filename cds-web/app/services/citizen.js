/** 
 * Citizen Service
 * Module dependencies.
 */

var restService = require('cds-rest-services'),
    restUrls = restService.urls,
    requireUtil = require("util"),
    cdsConfig = require('cds-config'),
    header = cdsConfig.restUrl.contentType,
    properties = require("../controllers/properties"),
    log = require('cds-logger').logger("citizen-service");

exports.savePersonalInf = function(params, token, callback) {
    log.debug("savePersonalInf : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    restService.builbArgs(restUrls.citizen.savePersonalInf, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.editPersonalInf = function(params, token, callback) {
    log.debug("editPersonalInf : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.citizen.editPersonalInf.path, params.loginId),
        method: restUrls.citizen.editPersonalInf.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getPersonalInf = function(params, token, callback) {
    log.debug("getPersonalInf : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.citizen.getPersonalInf.path, params.loginId),
        method: restUrls.citizen.getPersonalInf.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.deletePersonalinf = function(params, token, callback) {
    log.debug("deletePersonalinf : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.citizen.deletePersonalinf.path, params.userId);
    var url = {
        path: path,
        method: restUrls.citizen.deletePersonalinf.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.saveWorkInf = function(params, token, callback) {
    log.debug("saveWorkInf : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.citizen.saveWorkInf.path, params.userId),
        method: restUrls.citizen.saveWorkInf.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.editWorkInf = function(params, token, callback) {
    log.debug("editWorkInf : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.citizen.editWorkInf.path, params.userId),
        method: restUrls.citizen.editWorkInf.method
    };

    //remove userId from params
    delete params.userId;

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getWorkInf = function(params, token, callback) {
    log.debug("getWorkInf : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.citizen.getWorkInf.path, params.userId),
        method: restUrls.citizen.getWorkInf.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.saveVoterInf = function(params, token, callback) {
    log.debug("saveVoterInf : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path    
    var url = {
        path: requireUtil.format(restUrls.citizen.saveVoterInf.path, params.userId),
        method: restUrls.citizen.saveVoterInf.method
    };

    //remove userId from params
    delete params.userId;

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.editVoterInf = function(params, token, callback) {
    log.debug("editVoterInf : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path    
    var url = {
        path: requireUtil.format(restUrls.citizen.editVoterInf.path, params.userId),
        method: restUrls.citizen.editVoterInf.method
    };

    //remove userid from params
    delete params.userId;

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getVoterInf = function(params, token, callback) {
    log.debug("getVoterInf : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path    
    var url = {
        path: requireUtil.format(restUrls.citizen.getVoterInf.path, params.userId),
        method: restUrls.citizen.getVoterInf.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};


exports.getVoterInfByText = function(params, token, callback) {
    log.debug("getVoterInfByText : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.citizen.getVoterInfByText.path, params.q),
        method: restUrls.citizen.getVoterInfByText.method
    };


    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.deleteVoterInf = function(params, token, callback) {
    log.debug("deleteVoterInf : " + (JSON.stringify(params)));
    var headers = header;

    headers[properties.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.citizen.deleteVoterInf.path, params.userId),
        method: restUrls.citizen.deleteVoterInf.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.saveResidentialAddress = function(params, token, callback) {
    log.debug("saveResidentialAddress : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path    
    var url = {
        path: requireUtil.format(restUrls.citizen.saveResidentialAddress.path, params[0].userId),
        method: restUrls.citizen.saveResidentialAddress.method
    };

    //remove userid from params
    params.splice(0, 1);

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.editResidentialAddress = function(params, token, callback) {
    log.debug("editResidentialAddress : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path    
    var url = {
        path: requireUtil.format(restUrls.citizen.saveResidentialAddress.path, params[0].userId),
        method: restUrls.citizen.saveResidentialAddress.method
    };

    //remove userid from params
    params.splice(0, 1);

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getResidentialAddress = function(params, token, callback) {
    log.debug("getResidentialAddress : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path    
    var url = {
        path: requireUtil.format(restUrls.citizen.getResidentialAddress.path, params[0].userId),
        method: restUrls.citizen.getResidentialAddress.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getAddressByPincode = function(params, token, callback) {
    log.debug("getAddressByPincode : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.citizen.addressByPincode.path, params.q),
        method: restUrls.citizen.addressByPincode.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.saveFamily = function(params, token, callback) {
    log.debug("saveFamily : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path    
    var url = {
        path: requireUtil.format(restUrls.citizen.saveFamily.path, params[0].userId),
        method: restUrls.citizen.saveFamily.method
    };

    //remove userid from params
    params.splice(0, 1);

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.editFamily = function(params, token, callback) {
    log.debug("editFamily : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path    
    var url = {
        path: requireUtil.format(restUrls.citizen.editFamily.path, params[0].userId),
        method: restUrls.citizen.editFamily.method
    };

    //remove userid from params
    params.splice(0, 1);

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getFamily = function(params, token, callback) {
    log.debug("getFamily : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path    
    var url = {
        path: requireUtil.format(restUrls.citizen.getFamily.path, params[0].userId),
        method: restUrls.citizen.getFamily.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.deleteFamily = function(params, token, callback) {
    log.debug("deleteFamily : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.citizen.deleteFamily.path, params.userId),
        method: restUrls.citizen.deleteFamily.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.quickRegistration = function(params, orgId, callback) {
    log.debug("quickRegistration : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    restService.builbArgs(restUrls.citizen.quickRegistration, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};
exports.getQualifications = function(params, token, callback) {
    log.debug("getQualifications : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    restService.builbArgs(restUrls.citizen.qualifications, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getOccupations = function(params, token, callback) {
    log.debug("getOccupations : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    restService.builbArgs(restUrls.citizen.occupations, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

//delete citizen
exports.delete = function(params, token, callback) {
    log.debug("delete : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.citizen.delete.path, params.userId);
    var url = {
        path: path,
        method: restUrls.citizen.delete.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

//view citizen
exports.viewCitizen = function(params, token, callback) {
    log.debug("viewCitizen : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.citizen.viewCitizen.path, params.userId),
        method: restUrls.citizen.viewCitizen.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.careerAspirations = function(params, token, callback) {
    log.debug("careerAspirations : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    restService.builbArgs(restUrls.citizen.careerAspirations, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.skillGaps = function(params, token, callback) {
    log.debug("skillGaps : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    restService.builbArgs(restUrls.citizen.skillGaps, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};
