angular.module('projectPanel', []).controller('projectPanelController', function($scope) {
    var imagePath = "resources/images/"
    $scope.projects = [{
        "name": "JavaFX PasswordManager",
        "img": imagePath + "javaFX.png",
        "link": "https://github.com/sccdmaomao/JavaFX-PasswordManager"
    }];
});
