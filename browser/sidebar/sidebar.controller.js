app.controller('SidebarCtrl', function ($scope, MessageFactory) {
  $scope.channels = ['roommates', 'office', 'family'];

  MessageFactory.getAllChannels()
  .then(function(channels){
    console.log(channels);
    $scope.channels = channels;
  }).catch(console.error.bind(console));
})
