function GetGameService($scope,$http){

  $scope.getGames = function() {
    return $http.get("https://videogamesrating.p.mashape.com/get.php?count=5&game=God")
      .success(function(resp){
        $scope.games = resp
      })
      .error(function(data){
        console.log(data)
      })
  }
}

angular
  .module('app')
  .service("GetGameService", GetGameService);
