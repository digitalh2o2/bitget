function NewGameController($scope, Game, $location){
  $scope.game = new Game();

  $scope.addGame = function() {
    $scope.game.$save(function(){
      $location.path('list');
    });
  };
}

angular
  .module('app')
  .controller('NewGameController', NewGameController)
