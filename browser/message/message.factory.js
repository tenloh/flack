app.factory('MessageFactory', function ($http, $state) {

  var getAll = function (roomId) {
    return $http.get('/api/' + roomId)
      .then(function (array) {
        console.log('Getting Room', array)
        return array
      }).catch(console.error.bind(console))
  };

  var postMessage = function (roomName, content) {
    return $http.post('/api/messages/' + roomName, { content: content })
      .then(function (result) {
        // console.log('socket emit')
        // socket.emit('post');
        return result.data
      }).catch(console.error.bind(console))
  };

  var makeRoom = function (name) {
    return $http.post('/api/room', { name: name })
      .then(function (result) {
        $state.go(result.name)
      }).catch(console.error.bind(console))
  };

  var getAllChannels = function () {
    return $http.get('/api/room')
      .then(function (array) {
        console.log('array', array)
        return array.data
      }).catch(console.error.bind(console))
  }


  return {
    getAll: getAll,
    postMessage: postMessage,
    makeRoom: makeRoom,
    getAllChannels: getAllChannels
  }
})
