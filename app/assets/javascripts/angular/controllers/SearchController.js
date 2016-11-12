function SearchController($scope, $http, GetGameService){

  $scope.search = ""


  $scope.getGames = function (){
    return $http.get("https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Crating%2Ccover%2Curl%2Csummary&limit=50&offset=0&order=release_dates.date%3Adesc&search=" + $scope.search, {"headers": {
        "x-mashape-key": "fwLQAtGKfGmshnRQbe2WhlZJX45Cp1XKznUjsn09VXCW6ZCI8J",
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


  // $http.get("https://videogamesrating.p.mashape.com/get.php?count=20&game=" + $scope.search, {"headers": {
  //     "x-mashape-key": "CY2zERVH40mshdw3OseAFVF5y3wUp1IQ5l7jsn3fijtdAgYyhD",
  //      "accept": "application/json",
  //    }
  //  })
