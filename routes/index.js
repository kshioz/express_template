let express = require('express');
let router = express.Router();

const config = require('../config');
let articleCtl = require('../controllers/article');


/* GET pages */
router.get('/', function(req, res, next) {
	res.render('index', { title: config.app.title });
});


/* APIs */
router.get('/article', function(req, res, next) {
	articleCtl.getArticle(req, res);
});

router.get('/all_article', function(req, res, next) {
	articleCtl.getAllArticle(req, res);
});

router.post('/add_article', function(req, res, next) {
	articleCtl.addArticle(req, res);
});

router.post('/delete_article', function(req, res, next) {
	articleCtl.deleteArticle(req, res);
});

module.exports = router;
