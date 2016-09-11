var app = angular.module('flack', ['ui.router'])

app.directive('messageDir', function () {
  return {
    restrict: 'E',
    scope: {
      text: "="
    },
    // controller: 'MessageCtrl',
    templateUrl: './message/templates/message.html',
    link: function (scope) {
      //scope.text = text;
      var array = ['#FCE6A9', '#ADDFE3', '#D6DD54', '#F1DC9D', '#F1CC5D', '#FF3F7F'];
      scope.color = array[Math.floor(Math.random() * (array.length + 1))];
    }

  }
})

