function SearchController($scope, $http){

  $scope.search = "mega"


  $scope.getGames = function (){
    return $http.get("https://videogamesrating.p.mashape.com/get.php?count=20&game=" + $scope.search, {"headers": {
        "x-mashape-key": "CY2zERVH40mshdw3OseAFVF5y3wUp1IQ5l7jsn3fijtdAgYyhD",
         "accept": "application/json",
       }
     })
      .success(function(resp){
        $scope.games = resp

      })
      .error(function(data){
        console.log(data)
      })

  }

  $scope.getGames()


};

SearchController.$inject = ['$scope', '$http']

angular
  .module('app')
  .controller('SearchController',SearchController)
