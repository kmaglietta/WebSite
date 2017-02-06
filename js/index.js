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
  })
  .when("/personal", {
    templateUrl : "personal.html"
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

  $scope.personal = [
    {
      link: '#',
      title: 'Car Maintnece App',
      body: 'A web app that helps drivers keep track of car maintnece and fule economy'
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
    },
    {
      link: 'http://lamp.cse.fau.edu/~kmaglietta2013/hw5/index.php',
      title: 'Currency Converter',
      body: 'Introduction into PHP'
    },
    {
      link: 'http://lamp.cse.fau.edu/~kmaglietta2013/hw6/index.php',
      title: 'Baby names',
      body: 'Understanding the relationship between PHP and MYSQL'
    },
    {
      link: 'http://lamp.cse.fau.edu/~kmaglietta2013/hw7/index.php',
      title: 'The Wall (Start)',
      body: 'A glips int web security and validation'
    },
    {
      link: 'http://lamp.cse.fau.edu/~kmaglietta2013/hw8/index.php',
      title: 'The Wall (End)',
      body: 'Handle image upload and storage'
    },
    {
      link: 'https://bookmark-app-ed51e.firebaseapp.com/',
      title: 'Firebase',
      body: 'A glipse into the power of firebase'
    },
    {
      link: 'http://lamp.cse.fau.edu/~kmaglietta2013/project3/index.html',
      title: 'Angular',
      body: 'Learing how to use angualr along with local storage'
    },
    {
      link: 'https://again-kmaglietta.herokuapp.com/#/',
      title: 'Heroku',
      body: 'Learing about Heroku and what it can offer'
    },
    {
      link: 'https://score-22dc8.firebaseapp.com/',
      title: 'Firebase (Main)',
      body: 'Creating a usful app using the firebase AIP'
    },
    {
      link: 'http://lamp.cse.fau.edu/~kmaglietta2013/face-detection/',
      title: 'Microsoft Face API',
      body: 'Using comercialy available API\'s'
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
