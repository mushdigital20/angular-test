
// @author Pedro Mello (MushDigital)
// @email: pedro@mushdigital.com
// @Date:   2015-08-14

//Sets initial focus to field
angular.module('util.directives',[]).directive('firstResponder', function(){
	return {
		restrict: 'A',
		link:function(scope,element,attrs){
			element.focus();
		}
	}
});