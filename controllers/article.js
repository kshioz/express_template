/**
  Controller: Article
**/

let reqMiddle = require('../middleware/request');
let Article = require('../models/article'); 


let ArticleController = {

	getAllArticle: function(req, res) {

		Article.getAllItems(function(data){
			return res.json(data);
		});

	},

	getArticle: function(req, res) {

		let obj = reqMiddle.checkGetID(req);
		console.log( obj );
		if( obj.status == 0 ){
			return res.json(obj);
		}

		let id = req.params.id;

		Article.findByID(id, function(data){
			return res.json(data);
		});

	},

	addArticle: function(req, res) {

		let obj = reqMiddle.checkItem(req);
		if( obj.status == 0 ){
			return res.json(obj);
		}

		let title = req.body.title;
		let content = req.body.content;

		let saveObj = {"title": title, "content": content};

		Article.addItem(saveObj, function(data){
			return res.json(data);
		});

	},

	deleteArticle: function(req, res) {

		let obj = reqMiddle.checkPostID(req)
		if( obj.status == 0 ){
			return res.json(obj);
		}

		let id = req.body.id;

		Article.deleteItem(id, function(data){
			return res.json(data);
		});

	},

	updateArticle: function(req, res) {

		let obj = reqMiddle.checkPostID(req);
		if( obj.status == 0 ){
			return res.json(obj);
		}

		obj = reqMiddle.checkItem(req)
		if( obj.status == 0 ){
			return res.json(obj);
		}

		let id = req.body.id;
		let title = req.body.title;
		let content = req.body.content;

		let updateObj = {
			"id": id,
			"title": title,
			"content": content
		};

		Article.updateItem(updateObj, function(data){
			return res.json(data);
		});

	},

};

module.exports = ArticleController;
