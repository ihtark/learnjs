learnApp.controller('leftNavController',function($scope, $state, jsonFactory){
	$scope.leftNavResponse = [];
	$scope.state = $state;
$scope.messages = [
      {text:"Standard Message"},
      {text:"Success Message!", type:"success"},
      {text:"Alert Message!", type : "alert"},
      {text:"secondary message...", type : "secondary"}
    ]
    var init = function(){
		jsonFactory.getResponse('json/angular1-leftnav.js').then(
			function(response){
				$scope.leftNavResponse = response.data;
			}, 
			function(data){
				$scope.leftNavResponse = [];	
			});
	};
	init();
});