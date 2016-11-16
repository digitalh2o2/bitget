function SearchController($scope, $http, GetGameService){

  $scope.search = ""

  $scope.$watch('search', function(){
    getGames()
  })

  function getGames(){
    return GetGameService.getGames($scope.search)
        .then(function(resp){
          $scope.games = resp.data
          console.log(resp)
        });
    }

};

SearchController.$inject = ['$scope', '$http', 'GetGameService']

angular
  .module('app')
  .controller('SearchController',SearchController)
