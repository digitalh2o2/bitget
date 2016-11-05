function GetGameService(){
  this.game = "mega man"
}

angular
  .module('app')
  .service("GetGameService", GetGameService);
