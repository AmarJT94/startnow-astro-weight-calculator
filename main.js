
var planetSelector = [];
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

var button = document.getElementById("calculateButton");
button.onclick =  handleClickEvent;

// Takes names from planets list and readies them to be implemented in HTML.
for (var i = 0; i < planets.length; i++) {
    planetSelector.push(planets[i][0]);
}

// Injects planet names into selectable list for HTML.
for (var i = 0; i < planetSelector.length; i++) { 
    $("#planets").append("<option>" + planetSelector[i] + "</option>");
}

//Calculates user input to planets gravety.
function calculateWeight (weight, planetName) {
    return ( weight * selectedGravity(planetName) );
}

//Cycles through planets to match the selected planet with the gravity value from the planets list.
function selectedGravity (planetName) {
    for (var i = 0; i < planets.length; i++) {
        if (planets[i][0] === planetName) {
            var planetGravety = planets[i][1];
            return planetGravety;
        }
    }
}

//Planet Name
function selectedName () {
    var $selected = $("select option:selected");
    for (var i = 0; i < planets.length; i++) {
        if (planets[i][0] === $selected.text()) {
            var youAreHere = planets[i][0];
            return youAreHere;
        }
    }
}

//Clicker
function handleClickEvent (e) {
    var userWeight = parseFloat($("#userWeight").val());
    var planetName = selectedName();
    var result = calculateWeight(userWeight, planetName);
    $("#output").text("If you were on, " + planetName + " you would weigh " + result + "lbs!");  
} 






