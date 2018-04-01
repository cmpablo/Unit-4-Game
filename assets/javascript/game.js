$(document).ready(function() {
  var winScore = 0;
  var loseScore = 0;
  var userTotal = 0;
  var randomTarget = Math.floor(Math.random() * 101) + 19;
  var crystals = $(".crystals");

  // assign random number to each gem with a value 1-12
  var valGem01 = Math.floor(Math.random() * 12) + 1;
  var valGem02 = Math.floor(Math.random() * 12) + 1;
  var valGem03 = Math.floor(Math.random() * 12) + 1;
  var valGem04 = Math.floor(Math.random() * 12) + 1;

  $("#number-to-guess").text(randomTarget);
  $("#num-wins").text(winScore);
  $("#num-losses").text(loseScore);

  // Functions

  // Randomize the number to guess 19-120
  function getRandom() {
    randomTarget = Math.floor(Math.random() * 101) + 19;
    $("#number-to-guess").text(randomTarget);
  }

  // Randomizes gem values at reset
  function resetGemNums() {
    valGem01 = Math.floor(Math.random() * 12) + 1;
    valGem02 = Math.floor(Math.random() * 12) + 1;
    valGem03 = Math.floor(Math.random() * 12) + 1;
    valGem04 = Math.floor(Math.random() * 12) + 1;
  }

  function winner() {
    //alert("You win!");
    winScore++;
    $("#num-wins").text(winScore);
    reset();
  }

  function loser() {
    //alert("You lose. Try again.");
    loseScore++;
    $("#num-losses").text(loseScore);
    reset();
  }

  // resets game after win/loss
  function reset() {
    getRandom();
    resetGemNums();
    userTotal = 0;
    $("#user-score").text(userTotal);
  }

  // Buttons
  crystals.on("click", "#gem-01", function() {
    userTotal = userTotal + valGem01;
    $("#user-score").text(userTotal);
    if (userTotal === randomTarget) {
      winner();
    } else if (userTotal > randomTarget) {
      loser();
    }
  });

  crystals.on("click", "#gem-02", function() {
    userTotal = userTotal + valGem02;
    $("#user-score").text(userTotal);
    if (userTotal === randomTarget) {
      winner();
    } else if (userTotal > randomTarget) {
      loser();
    }
  });

  crystals.on("click", "#gem-03", function() {
    userTotal = userTotal + valGem03;
    $("#user-score").text(userTotal);
    if (userTotal === randomTarget) {
      winner();
    } else if (userTotal > randomTarget) {
      loser();
    }
  });

  crystals.on("click", "#gem-04", function() {
    userTotal = userTotal + valGem04;
    $("#user-score").text(userTotal);
    if (userTotal === randomTarget) {
      winner();
    } else if (userTotal > randomTarget) {
      loser();
    }
  });

  getRandom();
});
