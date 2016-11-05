function SearchController(){
  var vm = this
  vm.name = "saul"
  return vm.name
};

angular
  .module('app')
  .controller('SearchController',SearchController)
