var app = angular.module('app', []);
app.run(function($http, $rootScope){
   $http({
       method: 'GET',
       url: 'http://127.0.0.1:8000/users'
   }).then(function(response){
       console.log(response.data);
       $rootScope.users = response.data;
   }, function(response){
      console.log(response.data);
   }); 
});

app.controller('user', function($scope, $http){
    $scope.delete = function(id){
        $http({
            method: 'DELETE',
            url: 'http://127.0.0.1:8000/user/delete/'+id
        }).then(function(response){
            console.log(response.data);
            window.location.reload();
        }, function(response){
            console.log(response.data);
        });
    };
});
