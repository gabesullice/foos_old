/**
 * DB Operation permissions
 */
Games.allow({
  insert: function (userId, doc) {
    if (userId != null) return true;
  },
  update: function (userId, doc, fields, modifiers) {
    if ('$set' in modifiers) {
    }
    if (userId != null) return true;
  },
  remove: function (userId, doc) {
    if (userId != null) return true;
  }
});

Meteor.methods({
  playerJoin : function (gameId, posId) {
    var game = Games.findOne({gameId: gameId});
    var uid = Meteor.userId();

    if (uid) {
      players = game.players;
      for (var p in players) {
        if (players[p].user == uid) return;
      }

      var field ='players.' + posId + '.user';
      var set = {};
      set[field] = uid;
  
      field ='players.' + posId;
      var rename = {};
      rename[field] = 'players.' + uid;

      Games.update({_id: game._id}, {$set: set});
      Games.update({_id: game._id}, {$rename: rename});
    }
  }
});
