function PulseService($http){
  this.getPulse = function() {
    return $http.get("https://igdbcom-internet-game-database-v1.p.mashape.com/pulses/?fields=title%2Cimage%2Csummary%2Curl%2Cauthor%2Cpublished_at", {"headers": {
      "x-mashape-key": "fwLQAtGKfGmshnRQbe2WhlZJX45Cp1XKznUjsn09VXCW6ZCI8J",
       "accept": "application/json",
     }
   })
 }
}

PulseService.$inject = ["$http"]

angular
  .module('app')
  .service('PulseService',PulseService)
