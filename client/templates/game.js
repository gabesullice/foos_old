Template.game.helpers({
  game: function () {
    var gameId = parseInt(Session.get('gameId'));
    var game = Games.findOne({gameId: gameId});
    return game;
  },
  players: function () {
    var gameId = Session.get('gameId');
    if (gameId) {
      var result = Games.findOne({gameId: parseInt(gameId)}, {fields: {players: 1}, sort: ['position', 'asc']});
      var players = result.players;

      var map = [];
      var i = 0;
      for (var p in players) {
        map[i] = players[p];
        i++;
      }
      
      map.sort(function (a,b) {
        if (a.id < b.id)
             return -1;
        if (a.id > b.id)
            return 1;
        return 0;
      });

      return map;
    }
  }
});
