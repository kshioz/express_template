/**
  Model: Article
**/

let db = require('./dbconnection');
let resMiddle = require('../middleware/response');
let tableName = "article";


let Article = {

	/*** colums ***/
	/*
	title: str 255文字以下
	content: str 1000文字以下
	*/

	// query to get all items.
	getAllItems: function(callback) {

		const sql = 'SELECT * FROM ??';

        let results = db.query(sql, [tableName], function (error, results, fields) {

        	let apiResult = resMiddle.getHandle(tableName, error, results, fields);
        	callback( apiResult );

        });

    },

    // query to find by id.
	findByID: function(id, callback) {

		const sql = 'SELECT * FROM ?? WHERE id = ??';

        let results = db.query(sql, [tableName, id], function (error, results, fields) {

        	let apiResult = resMiddle.getHandle(tableName, error, results, fields);
        	callback( apiResult );

        });

    },

    // add new item.
	addItem: function(saveObj , callback) {
        /*
		let keys = Object.keys(saveObj);
		let values = [];
		keys.forEach( function(key){
            values.push(saveObj[key]);
        });
        */

		const sql = 'INSERT INTO ?? SET ?';

        let results = db.query(sql, [tableName, saveObj], function (error, results, fields) {

        	let apiResult = resMiddle.changeHandle(tableName, error, results, fields);
        	callback( apiResult );

        });

    },

    // delete item.
	deleteItem: function(id, callback) {

		const sql = 'DELETE FROM ?? WHERE id = ??';

        let results = db.query(sql, [tableName, id], function (error, results, fields) {

        	let apiResult = resMiddle.changeHandle(tableName, error, results, fields);
        	callback( apiResult );

        });

    },

    // update item.
	updateItem: function(updateObj, callback) {

		let updates = [];
		for( key in updateObj ){
			updates.push(key+" = "+updateObj[key]);
		}

		const sql = 'UPDATE ?? SET ?? WHERE id = ??';

        let results = db.query(sql, [tableName, updates.join(","), updateObj["id"]], function (error, results, fields) {

        	let apiResult = resMiddle.handle(tableName, error, results, fields);
        	callback( apiResult );

        });

    },

};

module.exports = Article;
