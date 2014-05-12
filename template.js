if (Meteor.isClient) {
  Template.score.scores = function () {
    var scores = {
      yellow: 0,
      blue: 0
    };

    return scores;
  };

  Template.game.players = [
  {
    id: "p1",
      name: "Player 1",
      color: "blue",
      position: "offense",
      ownGoals: 0,
      offGoals: 0,
      defGoals: 0,
      mate: "p2",
      goals: goals,
      score: score
  },
  {
    id: "p2",
    name: "Player 2",
    color: "blue",
    position: "defense",
    ownGoals: 0,
    offGoals: 0,
    defGoals: 0,
    mate: "p1",
    goals: goals, 
    score: score
  },
  {
    id: "p3",
    name: "Player 3",
    color: "yellow",
    position: "defense",
    ownGoals: 0,
    offGoals: 0,
    defGoals: 0,
    mate: "p4",
    goals: goals,
    score: score
  }, {
    id: "p4",
    name: "Player 4",
    color: "yellow",
    position: "offense",
    ownGoals: 0,
    offGoals: 0,
    defGoals: 0,
    mate: "p3",
    goals: goals,
    score: score
  }
  ];

  Template.game.events({
    'click .goal': function () {
      this.score(this.position);
    },
    'click .ownGoal': function () {
      this.score("own");
    },
    'keyup .name': function (e) {
      this.name = e.currentTarget.value;
      if (typeof console !== 'undefined') {
        console.log(this);
      }
    }

  });
}
