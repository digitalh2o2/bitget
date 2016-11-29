function Game($resource) {
  var Game =
  $resource('/api/v1/games/:id.json', {id:
    '@id'}, {
      update: { method: 'PUT' }
    });

    return Game;
}

angular
  .module('app')
  .factory('Game', Game)
