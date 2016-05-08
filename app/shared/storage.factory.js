authApp.factory('Storage',function(){
  var storage = {};

  storage.set = function(userObj){
    localStorage.setItem('user',userObj.username);
  };

  storage.get = function(username){
    var user = localStorage.getItem('user');
    return user;
  };

  storage.clear = function(){
    localStorage.clear();
  }

  return storage;
})
