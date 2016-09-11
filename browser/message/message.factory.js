app.factory('MessageFactory', function ($http, $state) {
  return {
    getAll: function (roomId) {
      return $http.get('/api/' + roomId)
        .then(function (array) {
          console.log('Getting Room', array)
          return array
        }).catch(console.error.bind(console))
    },
    postMessage: function (roomName, content) {
      return $http.post('/api/messages/' + roomName, { content: content })
        .then(function (result) {
          return result.data
        }).catch(console.error.bind(console))
    },
    makeRoom: function (name) {
      return $http.post('/api/room', { name: name })
        .then(function (result) {
          $state.go(result.name)
        }).catch(console.error.bind(console))
    },
    getAllChannels: function () {
      return $http.get('/api/room')
        .then(function (array) {
          console.log('array', array)
          return array.data
        }).catch(console.error.bind(console))
    }
  }
})
