function GamesController($scope, Game, $location, $state){

  $scope.games = Game.query()

  $scope.deleteGame = function(game){
    game.$delete(function(){
      $state.go($state.current, {}, {reload: true});
    });
  };
}

GamesController.$inject = ["$scope", "Game", "$location", "$state"]

angular
  .module('app')
  .controller("GamesController", GamesController)
