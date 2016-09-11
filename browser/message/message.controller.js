app.controller('MessageCtrl', function ($scope, MessageFactory, $stateParams, $rootScope, channel) {
  console.log('channel', channel)
  $scope.channel = channel.data[1]
  $scope.messages = channel.data[0]
  $rootScope.room = channel.data[1]
})
