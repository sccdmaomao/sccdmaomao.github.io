angular.module('listView', [])
    .controller('listViewController', function($scope) {

    })
    .directive('listView', function() {
        function link(scope, element, attrs) {

        }
        return {
            restrict: 'E',
            scope: {
                items: '='
            },
            templateUrl: 'directives/listView/listView.html',
            link: link
        };
    });
