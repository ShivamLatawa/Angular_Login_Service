authApp.controller('HomeController',function($scope, $rootScope, $location, Storage){
  $scope.logout = function(){
    $rootScope.user = '';
    Storage.clear();
    $location.path('/login');
  }

  $scope.checkLogin = function(){
    var user = Storage.get('user');
    if(user){
      $rootScope.user = user;
    }
    else{
      $location.path('/login');
    }
  }

  $scope.checkLogin();
})
