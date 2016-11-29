function GamesController($scope){

  $scope.games = [
    {
      title: "test",
      score: "8",
      short_description: "blah blah"
    },
    {
      title: "number 2",
      score: "10",
      short_description: "blah 2"
    }
  ];
}

GamesController.$inject = ["$scope"]

angular
  .module('app')
  .controller("GamesController", GamesController)
