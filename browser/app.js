var app = angular.module('flack', ['ui.router'])

app.directive('messageDir', function () {
  return {
    restrict: 'E',
    scope: {
      text: '='
    },
    // controller: 'MessageCtrl',
    templateUrl: './message/templates/message.html',
    link: function (scope) {
      // scope.text = text
    }
  }
})
