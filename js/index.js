var homePageApp = angular.module('homePageApp', []);

homePageApp.controller('HomePageController', function
HomePageController($scope){
  $scope.messages = [
    {
      date: 'January 5, 2017',
      body: 'this is a test'
    },
    {
      date: 'December 30 2016',
      body: 'this is a nother test'
    }
  ];
});
