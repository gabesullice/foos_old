Template.preGame.events = {
  'click button.new-game' : function () {
    var gameId = Date.now();
    var players = 
    Games.insert({
      "gameId"  : gameId,
      "status"  : 'open',
      "ylScore" : 0,
      "blScore" : 0,
      "players" : {
        p1 : {
          id: "p1",
          user: null,
          color: "blue",
          position: "offense", ownGoals: 0,
          offGoals: 0,
          defGoals: 0,
          mate: "p2",
          goals: 0,
          gameId: gameId
        },
        p2 : {
          id: "p2",
          user: null,
          color: "blue",
          position: "defense",
          ownGoals: 0,
          offGoals: 0,
          defGoals: 0,
          mate: "p1",
          goals: 0,
          gameId: gameId
        },
        p3 : {
          id: "p3",
          user: null,
          color: "yellow",
          position: "defense",
          ownGoals: 0,
          offGoals: 0,
          defGoals: 0,
          mate: "p4",
          goals: 0,
          gameId: gameId
        },
        p4 : {
          id: "p4",
          user: null,
          color: "yellow",
          position: "offense",
          ownGoals: 0,
          offGoals: 0,
          defGoals: 0,
          mate: "p3",
          goals: 0,
          gameId: gameId
        }
      }
    });
  },
  'click button.join-game' : function (event) {
    Session.set('gameId', event.currentTarget.dataset.id);
  },
  'click button.delete' : function (event) {
    var gameId = parseInt(event.currentTarget.dataset.id);
    var game = Games.findOne({gameId: gameId});
    Games.remove({_id: game._id});
  }
}

Template.preGame.games = function () {
  return Games.find({}, {sort: {gameId: -1}});
}
