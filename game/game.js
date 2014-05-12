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

goals = function () { return this.offGoals + this.defGoals }; 
