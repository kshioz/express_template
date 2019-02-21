/**
  Middleware: Common
**/

let Common = {

    SUCCESS_CODE: 1,
    ERROR_CODE: 0,

    // return error message.
    errHandle: function(message) {

        let obj = {"status": this.ERROR_CODE, "message": message};
        return obj;

    },

    // return success message.
    okHandle: function(message) {

        let obj = {"status": this.SUCCESS_CODE, "message": message};
        return obj;

    },

};

module.exports = Common;
