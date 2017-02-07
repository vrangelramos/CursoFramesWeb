angular.module('primeiraApp').config([
  '$stateProvider', //ui.router
  '$urlRouterProvider', //ui.router
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state('dashboard', {
      url:"/dashboard",
      templateUrl: "dashboard/dashboard.html"
    }).state('billingCycle', {
      url:"/billingCycles?page",
      templateUrl: "billingCycle/tabs.html"
    })

    //$urlRouterProvider.hashPrefix('')

    $urlRouterProvider.otherwise('/dashboard')

    $locationProvider.hashPrefix('');
  }
])
