function SearchController($scope, GetGameService){
  var vm = this
  vm.game = GetGameService.game
  vm.name = "saul"
  return vm.name
  return vm.game
};

angular
  .module('app')
  .controller('SearchController',SearchController)
