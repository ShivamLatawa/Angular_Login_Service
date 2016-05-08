authApp.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/login');

  $stateProvider.state('/login',{
    url : '/login',
    templateUrl: 'modules/login/login.html',
    controller: 'LoginController'
  })
    .state('/register',{
      url: '/register',
      templateUrl: 'modules/register/register.html',
      controller: 'RegisterController'
    })

    .state('/home',{
      url: '/home',
      templateUrl: 'modules/home/home.html',
      controller: 'HomeController'
    })
})
