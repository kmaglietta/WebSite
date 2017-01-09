var homePageApp = angular.module('homePageApp', ["ngRoute"]);

homePageApp.config(function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl : "intro.html"
  })
  .when("/class_work", {
    templateUrl : "class_work.html"
  })
  .when("/messages", {
    templateUrl : "messages.html"
  });

});

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

  $scope.class = [
    {
      link: 'http://lamp.cse.fau.edu/~kmaglietta2013/HW1/index.html',
      title: 'First Web Page',
      body: 'This is my first ever web page!'
    },
    {
      link: 'http://lamp.cse.fau.edu/~kmaglietta2013/hw2/index.html',
      title: 'Bootstrap Introduction',
      body: 'First attempt at working with bootstrap'
    },
    {
      link: 'http://lamp.cse.fau.edu/~kmaglietta2013/hw3/index.html',
      title: 'Speed Converter',
      body: 'A fully javascript application'
    },
    {
      link: 'http://lamp.cse.fau.edu/~kmaglietta2013/hw4/index.html',
      title: 'To-Do List',
      body: 'A to-do list using jQuery'
    }
  ];

  $scope.open = function(){
    console.log(this.cpro.link);
    window.open(this.cpro.link);
  }
});

//http://stackoverflow.com/questions/15266671/angular-ng-repeat-in-reverse
homePageApp.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
