app.config(function ($stateProvider) {
  $stateProvider.state('channel', {
    url: '/:room',
    templateUrl: '../main/chatroom.html',
    controller: 'MessageCtrl',
    resolve: {
      channel: function (MessageFactory, $stateParams) {
        return MessageFactory.getAll($stateParams.room)
      }
    }
  })
})
