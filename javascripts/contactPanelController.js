angular.module('contactPanel', []).controller('contactPanelController', function($scope) {
    var imagePath = "resources/images/"
    $scope.contacts = [{
        "name": "LinkedIn",
        "img": imagePath + "LinkedIn.png",
        "link": "https://ca.linkedin.com/in/guohao-yan-90b61170"
    }, {
        "name": "Github",
        "img": imagePath + "Github.png",
        "link": "https://github.com/sccdmaomao"
    }];
});
