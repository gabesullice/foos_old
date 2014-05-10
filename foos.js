if (Meteor.isClient) {
  Template.player.events({
    'click input': function (e) {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined') {
        console.log(this);
      }

      switch (e.target.name) {
        case "ownGoal": 
          console.log(e.target.name);
          break;
        case "score":
          console.log(e.target.name);
          break;
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
