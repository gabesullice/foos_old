if (Meteor.isClient) {
  Template.score.scores = function () {
    var scores = {
      yellow: 0,
      blue: 0
    };
    
    return scores;
  };

  score = function (position) {
    switch (position) {
      case "offense":
        this.offGoals++;
        break;
      case "defense":
        this.defGoals++;
        break;
      case "own":
        this.ownGoals++;
        break;
    };
    console.log(this);
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
    goals: function () { return this.offGoals + this.defGoals }, 
    mate: "p2",
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
    goals: function () { return this.offGoals + this.defGoals }, 
    mate: "p1",
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
    goals: function () { return this.offGoals + this.defGoals }, 
    mate: "p4",
    score: score
  }, {
    id: "p4",
    name: "Player 4",
    color: "yellow",
    position: "offense",
    ownGoals: 0,
    offGoals: 0,
    defGoals: 0,
    goals: function () { return this.offGoals + this.defGoals }, 
    mate: "p3",
    score: score
  }
  ];

  Template.game.events({
    'click .score': function () {
      this.score(this.position);
    },
    'click .ownGoal': function () {
      this.score("own");
    },
    'keydown .name': function (e) {
      this.name = e.currentTarget.value;
      if (typeof console !== 'undefined') {
        console.log(this);
      }
    }

  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
