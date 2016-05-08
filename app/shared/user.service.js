authApp.service('UserService',function($rootScope, $location ,$http, $q, url, Storage){

    this.getUsers = function(){
      var deferred = $q.defer();
      $http.get(url)
        .success(function(response){
          deferred.resolve(response);
        })
        .error(function(response){
          deferred.reject(response);
        })

        return deferred.promise;
      };

    this.createUser = function(userObj){
      if(userObj){
        $http.post(url,userObj)
          .success(function(response){
            $rootScope.user = response.username;
            Storage.set(userObj);
            $location.path('/home');
          })
      }
    }
})
