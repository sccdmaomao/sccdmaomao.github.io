angular.module('myApp', []).controller('navigationController', function($scope) {

    $scope.home = "Home Page";
    $scope.resume = "Resume";
    $scope.contact = "Contact";

    $scope.active = function() {
        $scope.contact
    };



    // Slide slowly to anchor
    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });
});
