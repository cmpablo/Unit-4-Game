$(document).ready(function() {
  var targetNumber = 55;

  $("#number-to-guess").text(targetNumber);

  // on-click event tracking button clicks and score
  var userTotal = 0;
  var numOptions = [10, 5, 3, 7];
  var increment = numOptions[Math.round(Math.random())];

  // Red Gem
  $(".crystals").on("click", "#red-gem", function() {
    var redGem = "<img>";
    for (var i = 0; i < numOptions.length; i++) {
      redGem.attr("data-crystalvalue", numOptions[i]);
      findCrystalValue();
      console.log("the red gem was pushed");
    }
  });

  // Blue Gem
  $(".crystals").on("click", "#blue-gem", function() {
    var blueGem = "<img>";
    for (var i = 0; i < numOptions.length; i++) {
      blueGem.attr("data-crystalvalue", numOptions[i]);
      findCrystalValue();
      console.log("the blue gem was pushed");
    }
  });

  // Yellow Gem
  $(".crystals").on("click", "#yellow-gem", function() {
    var yellowGem = "<img>";
    for (var i = 0; i < numOptions.length; i++) {
      yellowGem.attr("data-crystalvalue", numOptions[i]);
      findCrystalValue();
      console.log("the yellow gem was pushed");
    }
  });

  // Green Gem
  $(".crystals").on("click", "#green-gem", function() {
    var greenGem = "<img>";
    for (var i = 0; i < numOptions.length; i++) {
      greenGem.attr("data-crystalvalue", numOptions[i]);
      findCrystalValue();
      console.log("the green gem was pushed");
    }
  });

  // Functions

  function findCrystalValue() {
    var crystalValue = $(this).attr("data-crystalvalue");
    crystalValue = parseInt(crystalValue);

    userTotal += increment;

    alert("New score is: " + userTotal);

    if (userTotal === targetNumber) {
      alert("You win!");
    } else if (userTotal >= targetNumber) {
      alert("You lose.");
    }
  }
});
