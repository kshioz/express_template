
var header = new Vue({
	el: 'header',
	methods:{
		openMenu: function(){

			var navbar = document.getElementById("nav-bar");
			if (navbar.className === "nav-bar"){
				navbar.className += " responsive";
			} else {
				navbar.className = "nav-bar";
			}

		},
		showPostPage: function(){

			// hide all pages.
			var elements = document.getElementsByClassName("page");

			for(let targetElem of elements){
				common.addClass(targetElem, "hide-page");
			}
			
			// show post page.
			var postPage = document.getElementById("post-page");
			common.removeClass(postPage, "hide-page");
			
		}
	}
});

var itemList = new Vue({
	el: '#item-list',
	data: {
		items: []
	},
	created: function() {
		axios.get('/all_article').then(function (res) {
			if( res.data.status == 1 ){
				itemList.items = res.data.data;
			} else {
				console.log(res.data.message);
			}
		}).catch(function (err) {
			console.log(err);
		}).then(function () {
			// always executed
		});
	},
	updated: function(){
		//console.log(this.items);
	},
	methods:{}
});

var postForm = new Vue({
	el: '#post-page',
	data: {
		title: "",
		content: ""
	},
	methods:{
		addItem: function(){

			if( !this.title || !this.content ){
				alert("Input title & content!!");
				return false;
			}

			axios.post('/add_article', {
			    "title": this.title,
			    "content": this.content
			 }).then(function (res) {
				
				if( res.data.status == 1 ){
					alert("posted!");
					postForm.title = "";
					postForm.content = "";
				} else {
					console.log(res.data.message);
				}

			}).catch(function (err) {
				console.log(err);
			}).then(function () {
				// always executed
			});
		}
	}
});
