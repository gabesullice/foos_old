score = function (type, player) {
  var posId = player.id;

  var field ='players.' + posId; 

  switch (type) {
    case 'goal':
      if (player.position == 'offense') {
        var field0 = field + '.offGoals';
        var field1 = field + '.goals';
      } else {
        var field0 = field + '.defGoals';
        var field1 = field + '.goals';
      };
      if (player.color == 'blue')
        var field2 = 'blScore';
      else
        var field2 = 'ylScore';
      break;
    case 'ownGoal':
      var field0 = field + '.ownGoals'
      if (player.color == 'blue')
        var field2 = 'ylScore';
      else
        var field2 = 'blScore';
      break;
  }

  var mod = {};
  if (field0) mod[field0] = 1;
  if (field1) mod[field1] = 1;
  if (field2) mod[field2] = 1;

  var inc = {
    $inc : mod
  }

  var game = Games.findOne({gameId: parseInt(Session.get('gameId'))});
  Games.update({_id: game._id}, inc);
}
