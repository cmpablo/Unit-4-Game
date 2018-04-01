$(document).ready(function() {
  var winScore = 0;
  var loseScore = 0;
  var userTotal = 0;
  var targetNumber = "";
  var crystals = $(".crystals");

  // assign random number to each gem with a value 1-12
  var valGem01 = Math.floor(Math.random() * 12) + 1;
  var valGem02 = Math.floor(Math.random() * 12) + 1;
  var valGem03 = Math.floor(Math.random() * 12) + 1;
  var valGem04 = Math.floor(Math.random() * 12) + 1;

  $("#num-wins").text(winScore);
  $("#num-losses").text(loseScore);

  // Functions

  // Randomize the number to guess 19-120
  function init() {
    var randomTarget = Math.floor(Math.random() * 101) + 19;
    $("#number-to-guess").text(randomTarget);
    console.log("redGem value: " + valGem01);
    console.log("blueGem value: " + valGem02);
    console.log("yellowGem value: " + valGem03);
    console.log("yellowGem value: " + valGem04);
  }

  // Randomizes gem values at reset
  function resetGemNums() {
    valGem01 = Math.floor(Math.random() * 12) + 1;
    valGem02 = Math.floor(Math.random() * 12) + 1;
    valGem03 = Math.floor(Math.random() * 12) + 1;
    valGem04 = Math.floor(Math.random() * 12) + 1;
  }

  function winner() {
    winScore++;
    $("#num-wins").text(winScore);
    reset();
  }

  function loser() {
    loseScore++;
    $("#num-losses").text(loseScore);
    reset();
  }

  // resets game after win/loss
  function reset() {
    init();
    resetGemNums();
    userTotal = 0;
    $("#user-score").text(userTotal);
    console.log("The game has reset");
  }

  // Buttons
  crystals.on("click", "#gem-01", function() {
    userTotal = userTotal + valGem01;
    $("#user-score").text(userTotal);
    if (userTotal === targetNumber) {
      winner();
    } else if (userTotal < targetNumber) {
      userTotal = userTotal + valGem01;
    } else if (userTotal > targetNumber) {
      loser();
      console.log("User total is " + userTotal);
    }
  });

  crystals.on("click", "#gem-02", function() {
    userTotal = userTotal + valGem02;
    $("#user-score").text(userTotal);
    if (userTotal === targetNumber) {
      winner();
    } else if (userTotal < targetNumber) {
      userTotal = userTotal + valGem01;
    } else if (userTotal > targetNumber) {
      loser();
      console.log("User total is " + userTotal);
    }
  });

  crystals.on("click", "#gem-03", function() {
    userTotal = userTotal + valGem03;
    $("#user-score").text(userTotal);
    if (userTotal === targetNumber) {
      winner();
    } else if (userTotal < targetNumber) {
      userTotal = userTotal + valGem01;
    } else if (userTotal > targetNumber) {
      loser();
      console.log("User total is " + userTotal);
    }
  });

  crystals.on("click", "#gem-04", function() {
    userTotal = userTotal + valGem04;
    $("#user-score").text(userTotal);
    if (userTotal === targetNumber) {
      winner();
    } else if (userTotal < targetNumber) {
      userTotal = userTotal + valGem01;
    } else if (userTotal > targetNumber) {
      loser();
      console.log("User total is " + userTotal);
    }
  });

  init();
});
