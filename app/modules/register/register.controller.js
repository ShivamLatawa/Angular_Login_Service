authApp.controller('RegisterController',function($scope, $rootScope, $location, UserService, Storage){
  $scope.error = false;
  $scope.register = function(user){
    if(user){
      if(user.username && user.email && user.password){
        var user = UserService.createUser(user);
      }
      else{
        $scope.error = true;
      }
    }
    else{
      $scope.error = true;
    }

  }

  $scope.checkLogin = function(){
    var user = Storage.get('user');
    if(user){
      $rootScope.user = user;
      $location.path('/home')
    }
    else{
      $location.path('/register');
    }
  }

  $scope.checkLogin();
})
