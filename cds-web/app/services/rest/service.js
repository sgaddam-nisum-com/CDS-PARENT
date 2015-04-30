/**
 * Common rest service call
 */

var Client = require('node-rest-client').Client,
    client = new Client(),
    cdsConfig = require('cds-config').restUrl,
    log = require('cds-logger').logger("resr-service"),
    util = require('../../util/util'),
    errors = require('../../../config/errors/error');

// set content-type header and data as json in args parameter
exports.builbArgs = function(restService, params, headers, callback) {
    var args = {
        data: {}, //for post 
        parameters: {}, // query parameter
        path: {},
        headers: {}
    };

    var method = restService.method;
    args.path.childpath = restService.path;
    args.headers = headers;
    args.method = method;

    if (!params) {
        params = {};
    }

    if (method.toLowerCase() === 'get') {
        args.parameters = params;
    } else {
        //data passed to REST method (only useful in POST, PUT or Delete methods)
        args.data = params;
    }
    callback(args);
};

// registering remote methods
client.registerMethod("post", cdsConfig.host + '${childpath}', "POST");
client.registerMethod("get", cdsConfig.host + '${childpath}', "GET");
client.registerMethod("put", cdsConfig.host + '${childpath}', "PUT");
client.registerMethod("delete", cdsConfig.host + '${childpath}', "DELETE");

exports.makecall = function(args, callback) {
    client.methods[args.method.toLowerCase()](args, function(data, response) {
        data.httpStatusCode = response.statusCode;
        util.handleErrors(data, function(resp) {
            callback(resp);
        });
    }).on('error', function(err) {
        log.error(err);
        var error = errors.rest.connection;
        util.handleErrors(error, function(resp) {
            callback(resp);
        });
    });
};
