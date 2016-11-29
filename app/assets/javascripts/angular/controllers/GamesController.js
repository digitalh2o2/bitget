function GamesController($scope, Game){

  $scope.games = Game.query()
}

GamesController.$inject = ["$scope", "Game"]

angular
  .module('app')
  .controller("GamesController", GamesController)
