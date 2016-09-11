app.controller('MessageCtrl', function ($scope, MessageFactory, $stateParams, $rootScope, channel, $interval) {
  console.log('channel', channel)
  $scope.channel = channel.data[1]
  $scope.messages = channel.data[0]
  $rootScope.room = channel.data[1]

  $interval(function(){
    MessageFactory.getAll($stateParams.room)
    .then(function(result){
      $scope.messages = result.data[0];
    }).catch(console.error.bind(console));
  }, 1000);

  // socket.on('refresh', null, function () {
  //   MessageFactory.getAll($stateParams.room)
  //   .then(function(channelArray){
  //     $scope.messages = channel.data[0];
  //   }).catch(console.error.bind(console));
  // })
})
