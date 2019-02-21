
var common = {
	addClass: function(targetElement, className) {
		var classList = targetElement.className.split(" ");
		if(classList.indexOf(className) == -1){
			targetElement.className += " " + className;
		}
	},
	removeClass: function(targetElement, className){
		var regexp = new RegExp(className, 'g');
		console.log(targetElement.className);
		targetElement.className = targetElement.className.replace(regexp, "");
	}
};