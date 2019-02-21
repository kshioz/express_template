/**
  Middleware: Response
**/

let cmn = require('./common');


let Response = {

	// get response handled with this function.
	getHandle: function(tableName, error, results, fields) {

        var apiResult = {}

        if (error) {

            console.log(error);

            apiResult = {
                "status": cmn.ERROR_CODE,
                "meta": {
                    "table": tableName,
                    "type": "collection",
                    "total": 0
                },
                "data": []
            };

            return apiResult;
            
        }
        
        var resultJson = JSON.stringify(results);
        resultJson = JSON.parse(resultJson);

        apiResult = {
            "status": cmn.SUCCESS_CODE,
            "meta": {
                "table": tableName,
                "type": "collection",
                "total": 1,
            },
            "data": resultJson
        };

        return apiResult;

    },

    // add,delete,update response handled with this function.
    changeHandle: function(tableName, error, results, fields) {

        var apiResult = {}

        if (error) {

            console.log(error);

            apiResult = {
                "status": cmn.ERROR_CODE,
                "meta": {
                    "table": tableName,
                    "type": "object",
                    "total": 0
                },
                "data": {}
            };

            return apiResult;
            
        }
        
        var resultJson = JSON.stringify(results);
        resultJson = JSON.parse(resultJson);

        apiResult = {
            "status": cmn.SUCCESS_CODE,
            "meta": {
                "table": tableName,
                "type": "object",
                "total": 1,
            },
            "data": resultJson
        };

        return apiResult;

    },

};

module.exports = Response;
