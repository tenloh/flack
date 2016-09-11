// app.factory('socket', function ($rootScope) {
//   var socket = io.connect(window.location.origin);
//   return {
//     on: function (eventName, callback) {
//       socket.on(eventName, function () {
//         var args = arguments
//         $rootScope.$apply(function () {
//           callback.apply(socket, args)
//         })
//       })
//     },
//     emit: function (eventName, data, callback) {
//       socket.emit(eventName, data, function () {
//         var args = arguments
//         $rootScope.$apply(function () {
//           if (callback) {
//             callback.apply(socket, args)
//           }
//         })
//       })
//     }
//   }
// })

// app.factory('Poller', function ($state, $interval) {
//   var poller = function () {
//     console.log('am reloading');
//     $state.reload();
//     $interval(poller, 1000);
//   }

//   return {
//     poller: poller
//   }
// })

// app.run(function(Poller){});