/**
  Middleware: Request
**/

let cmn = require('./common');


let ArticleRequest = {

    // check ID.
    checkGetID: function(req) {
        
        let id = req.params.id;
        
        if( !id ){
            let err = "IDが指定されていません";
            let obj = cmn.errHandle(err);
            return obj;
        }

        obj = cmn.okHandle("ok");
        return obj;

    },

    checkPostID: function(req) {

        let id = req.body.id;

        if( !id ){
            let err = "IDが指定されていません";
            let obj = cmn.errHandle(err);
            return obj;
        }

        obj = cmn.okHandle("ok");
        return obj;

    },

    // check save item values.
    checkItem: function(req) {

        let title = req.body.title;
        let content = req.body.content;
        let obj = {}

        if( !title || !content ){
            let err = "タイトル,コンテンツは必須入力です";
            obj = cmn.errHandle(err);
            return obj;
        }

        if( title.length > 255 ){
            let err = "タイトルは255文字以下で入力してください";
            obj = cmn.errHandle(err);
            return obj;
        }

        if( content.length > 1000 ){
            let err = "コンテンツは1000文字以下で入力してください";
            obj = cmn.errHandle(err);
            return obj;
        }

        obj = cmn.okHandle("ok");
        return obj;

    },

};

module.exports = ArticleRequest;
