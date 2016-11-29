function EditGameController(Game, $scope, $location, $stateParams){
  $scope.game = Game.get({ id: $stateParams.id });

  $scope.editGame = function(){
    $scope.game.$update(function(){
      $location.path('list')
    });
  };
}

angular
  .module('app')
  .controller('EditGameController', EditGameController)
