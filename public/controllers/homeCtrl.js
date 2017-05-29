myApp.controller('homeCtrl', ['$http','$scope','$location',function( $http,$scope,$location){

    console.log('home Controller initialized');
	
	$scope.getCustomers = function(){
	$http.get('/customers').success(function(response){
		$scope.customers = response;
         console.log($scope.customers[0].id); 

	});
}

	$scope.saveCustomer = function(){
 	$http.post('/customers/add', $scope.customer).success(function(response){
		window.location.href='/#customers';
	});
    }

    $scope.deleteCustomer = function(id){
     $http.delete('/customers/delete/'+id).success(function(response, err){
     	if(err)
     		console.log(err);
           else{


     	  console.log('')
		// window.location.href='/#customers';
		=}
	});	
}


}]);