app.directive('channelHead', function () {
  return {
    restrict: 'E',
    templateUrl: '/main/header.html'
  }
})

// app.directive('flackTextbox', function () {
//   return {
//     restrict: 'E',
//     templateUrl: '/main/text.html'
//   }
// })

app.directive('flackTextbox', function (MessageFactory, $rootScope) {
  return {
    restrict: 'E',
    scope: {
      text: '='
    },
    templateUrl: '/main/text.html',
    link: function (scope) {
      scope.postMessage = function (text) {
        MessageFactory.postMessage($rootScope.room.name, text)
          .then(function (response) {
            scope.textInput = ''
          }).catch(console.error.bind(console))
      }
    }
  }
})
