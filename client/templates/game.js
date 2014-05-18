Template.game.helpers({
  game: function () {
    var gameId = parseInt(Session.get('gameId'));
    var game = Games.findOne({gameId: gameId});
    return game;
  },
  players: function () {
    var gameId = Session.get('gameId');
    if (gameId) {
      var result = Games.findOne({gameId: parseInt(gameId)}, {fields: {players: 1}});
      var players = result.players;

      var map = [];
      var i = 0;
      for (var p in players) {
        map[i] = players[p];
        i++;
      }
      return map;
    }
  }
});
