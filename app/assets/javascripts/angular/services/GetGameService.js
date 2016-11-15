function GetGameService($http){
  this.getGames = function(search) {
    return $http.get("https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Crating%2Ccover%2Curl%2Csummary%2Cfirst_release_date&limit=50&offset=0&order=release_dates.date%3Aasc&search=" + search, {"headers": {
      "x-mashape-key": "fwLQAtGKfGmshnRQbe2WhlZJX45Cp1XKznUjsn09VXCW6ZCI8J",
       "accept": "application/json",
     }
   })
 }
}

GetGameService.$inject = ["$http"]

angular
  .module('app')
  .service("GetGameService", GetGameService);
