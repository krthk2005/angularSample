angular.module('homeModule', []).
controller('HomeCtrl', ['$scope','DataFacotory','$http', function($scope,DataFacotory,$http){
	DataFacotory.getLocalJson().success(function(data){
		$scope.test = data;	
	})
	// $http.get('shared/services/getLocal.json').success(function(data) {
	//    $scope.test = data;
	// });
}])