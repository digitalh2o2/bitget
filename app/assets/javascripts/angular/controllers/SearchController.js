function SearchController($scope, $http, GetGameService){


  $scope.search = ""

  function getGames(){
  return GetGameService.getGames($scope.search)
      .success(function(resp){
        $scope.games = resp
        console.log(resp)
      })
      .error(function(data){
        console.log(data)
      })
    }

  $scope.$watch('search', function(){
    getGames()
  })
};

SearchController.$inject = ['$scope', '$http', 'GetGameService']

angular
  .module('app')
  .controller('SearchController',SearchController)
