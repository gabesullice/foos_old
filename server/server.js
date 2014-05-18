/**
 * DB Operation permissions
 */
Games.allow({
  insert: function (userId, doc) {
    if (userId != null) return true;
  },
  update: function (userId, doc, fields, modifiers) {
    if ('$set' in modifiers) {
      players = doc.players;
      for (var p in players) {
        if (players[p].user == userId) return false;
      }
    }
    if (userId != null) return true;
  },
  remove: function (userId, doc) {
    if (userId != null) return true;
  }
});
