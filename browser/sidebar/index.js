app.controller('SidebarCtrl', function ($scope) {
  $scope.channels = ['roommates', 'office', 'family']
})
app.directive('sidebar', function () {
  return {
    restrict: 'E',
    templateUrl: require('./sidebar.html')
  }
})
module.exports = app
