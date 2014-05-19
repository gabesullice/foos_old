Template.player.user = function (user) {
  return user == this.user;
}

Template.player.events = {
  'click button.join' : function (event) {
    if (Meteor.userId() != null) {
      gameId = parseInt(Session.get('gameId'));
      posId  = event.currentTarget.dataset.id;
      Meteor.call('playerJoin', gameId, posId);
    }
  },
  'click button.ownGoal.score' : function () {
    score('ownGoal', this);
  },
  'click button.goal.score' : function () {
    score('goal', this);
  }
}

Template.player.helpers({
  profile : function () {
    var profile = Meteor.users.findOne({_id: this.user});
    return profile;
  },
  switched: function () {
    var game = Games.findOne({gameId: this.gameId});
    if ((this.color == 'blue' && game.blScore > 4) || (this.color == 'yellow' && game.ylScore > 4))
      return "switched";
  }
});
