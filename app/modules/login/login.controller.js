authApp.controller('LoginController',function($scope, $rootScope , $location, UserService, Storage){
  $scope.gotoRegistrationPage = function(){
    $location.path('/register');
  }

  $scope.submit = function(userObj){
    if(userObj){
      var username = userObj.username,
          password = userObj.password,
          userPromise = UserService.getUsers();
          $scope.errorCheck = false
          $scope.error = false;
      userPromise.then(function(users){
        users.forEach(function(obj,index){
          if(obj.username === username && obj.password === password){
            $scope.errorCheck = true;
            $rootScope.user = username;
            Storage.set(obj);
            $location.path('/home');
          }
        })
        if($scope.errorCheck){
          $scope.error = false;
        }
        else{
          $scope.error = true;
        }
      })
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
      $location.path('/login');
    }
  }

  $scope.checkLogin();
})
