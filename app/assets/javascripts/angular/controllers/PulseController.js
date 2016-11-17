function PulseController($scope, PulseService){

  function getPulse(){
    return PulseService.getPulse()
      .then(function(resp){
        $scope.pulses = resp.data
        console.log(resp)
      })
  }

  getPulse()
}

PulseController.$inject = ["$scope", "PulseService"]

angular
  .module('app')
  .controller('PulseController',PulseController)
