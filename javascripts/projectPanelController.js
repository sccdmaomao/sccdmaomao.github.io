angular.module('projectPanel', []).controller('projectPanelController', function($scope) {
    var imagePath = "resources/images/"
    $scope.projects = [{
        "name": "JavaFX PasswordManager",
        "img": imagePath + "javaFX.png",
        "link": "http://sccdmaomao.github.io/JavaFX-PasswordManager/"
    },
    {
      "name": "DoDoTang Art Center",
      "img": imagePath + "ddt.png",
      "link": "http://sccdmaomao.github.io/DoDoTang/"
    }
  ];
});
