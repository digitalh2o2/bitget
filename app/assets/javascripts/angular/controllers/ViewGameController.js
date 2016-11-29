function ViewGameController(Game, $scope, $stateParams){
  $scope.game = Game.get({ id: $stateParams.id })
}

ViewGameController.$inject = ["Game", "$scope", "$stateParams"]

angular
  .module('app')
  .controller('ViewGameController',ViewGameController)
