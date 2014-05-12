if (Meteor.isClient) {
  // code to run on the client at startup
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
