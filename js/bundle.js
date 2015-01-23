
// Var to control if the car is on //
var engine = "off";

// Add keyBinding for movement to Car1
window.addEventListener('keyup', function(event) {
	if (event.keyCode === 39 && engine === "on") {
		console.log("car 1");
		this.$el = document.getElementById('rCar1');
		this.$el.style.left = parseInt(this.$el.style.left, 10) + 10 + "px";
	}

	else if (event.keyCode === 37) {
		this.$el = document.getElementById('rCar1');
		this.$el.style.left = parseInt(this.$el.style.left, 10) - 10 + "px";  }
	});
// Add keyBinding for movement to Car2
window.addEventListener('keyup', function(event) {
	if (event.keyCode === 68 && engine === "on") {
		console.log("car 2");
		this.$el = document.getElementById('rCar2');
		this.$el.style.left = parseInt(this.$el.style.left, 10) + 10 + "px";}

	else if (event.keyCode === 65) {
		this.$el = document.getElementById('rCar2');
		this.$el.style.left = parseInt(this.$el.style.left, 10) - 10 + "px";}
	});



var carstart = function(){

	if (engine === "off"){
    // Code for Chrome, Safari, Opera
    document.getElementById("keySwitch").style.WebkitTransform = "rotate(-30deg)"; 
    // Code for IE9
    document.getElementById("keySwitch").style.msTransform = "rotate(-30deg)"; 
    document.getElementById("keySwitch").style.transform = "rotate(-30deg)"; 
    engine = "on";
    console.log("Car 1 On!");
    return engine;
}

	if (engine === "on"){
    // Code for Chrome, Safari, Opera
    document.getElementById("keySwitch").style.WebkitTransform = "rotate(30deg)"; 
    // Code for IE9
    document.getElementById("keySwitch").style.msTransform = "rotate(30deg)"; 
    document.getElementById("keySwitch").style.transform = "rotate(30deg)"; 
    engine = "off";
    console.log("Car 1 Off!");
    return engine;
}


};



// Reset position for the individual Cars
CarMove = function() {
    // grab the car element
    this.$el = document.getElementById('rCar1');
    this.$el2 = document.getElementById('rCar2');
    // set the starting position of the Track
    this.$el.style.left = "0px";
    this.$el2.style.left = "0px";
};



// intialize CarMove
CarMove();