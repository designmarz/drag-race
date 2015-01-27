
// Var to control game conditions //
var engine = "off";
var flaseTimer = 0;
var treeCounter = 1;

// Add keyBinding for movement to Car1
window.addEventListener('keyup', function(event) {
	if (event.keyCode === 39 && engine === "on") {
		console.log("car 1");
		this.$el = document.getElementById('rCar1');
		this.$el.style.left = parseInt(this.$el.style.left, 10) + 10 + "px";
        var car1Pos = getComputedStyle(this.$el).getPropertyValue("left");
        
        if ( car1Pos === 90 + "px")
            {   setTimeout(treeAni(), 30);
                console.log("get Ready!");
                setTimeout(aiMove, 3000);
                document.getElementById("left5").style.backgroundColor = "blue";
            document.getElementById("right5").style.backgroundColor = "blue";   
                 }


        if ( car1Pos === 100 + "px" && flaseTimer === 0)
            {   falseStart();
                console.log("False Start"); 
                    aiStop();
                    setTimeout(aiStop, 2000);}

        if ( car1Pos === 660 + "px")
            {winner("Player 1");
                    aiStop();
                 }        
	}

	else if (event.keyCode === 37 && engine === "on") {
		this.$el = document.getElementById('rCar1');
		this.$el.style.left = parseInt(this.$el.style.left, 10) - 10 + "px";  }
	});
// Add keyBinding for movement to Car2
window.addEventListener('keyup', function(event) {
	if (event.keyCode === 68 && engine === "on") {
		console.log("car 2");
		this.$el = document.getElementById('rCar2');
		this.$el.style.left = parseInt(this.$el.style.left, 10) + 10 + "px";}

	else if (event.keyCode === 65 && engine === "on") {
		this.$el = document.getElementById('rCar2');
		this.$el.style.left = parseInt(this.$el.style.left, 10) - 10 + "px";}
	});


// start function for the car engine, Enter key //
window.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        carstart();
        console.log("car 1");

}});

// Car 2 AI //
aiCar = function(){
    this.$el = document.getElementById('rCar2');
    this.$el.style.left = parseInt(this.$el.style.left, 10) + 1 + "px";
    var car2Pos = getComputedStyle(this.$el).getPropertyValue("left");
       if ( car2Pos === 660 + "px")
            { winner("Player 2");
                aiStop();   }        
    };
aiMove = function(){
    if (flaseTimer === 1) {
  aiInter = setInterval(aiCar, 14);
}
};
function aiStop(){
    clearInterval(aiInter);
}

// function to start the car / animate the key //
var carstart = function(){

	if (engine === "off"){
    document.getElementById("keySwitch").style.WebkitTransform = "rotate(-30deg)"; 
    engine = "on";
    console.log("Car 1 & 2 are On!");
    return engine;}

	if (engine === "on"){
    document.getElementById("keySwitch").style.WebkitTransform = "rotate(30deg)"; 
    engine = "off";
    console.log("Car 1 & 2 are Off!");
    return engine;}};


// Reset position for the individual Cars
CarMove = function() {
    // grab the car element
    this.$el = document.getElementById('rCar1');
    this.$el2 = document.getElementById('rCar2');
    // set the starting position of the Track
    this.$el.style.left = "0px";
    this.$el2.style.left = "90px";
    flaseTimer = 0;
    treeReset(); 
};

// Reset Lights //
    
var treeReset = function(){   
        for (var i = 1; i <= 5; i++) {
            document.getElementById("left"+[i]).style.backgroundColor = "white";
            document.getElementById("right"+[i]).style.backgroundColor = "white";    
        }
            document.getElementById("left5").style.backgroundColor = "red";
            document.getElementById("right5").style.backgroundColor = "red";   };



// Xmas Tree Animation functions //
var XmasTree = function(){   
        if (treeCounter <= 4){    
            console.log([treeCounter]);
            console.log("test");
            document.getElementById("left"+[treeCounter]).style.backgroundColor = "yellow";
            document.getElementById("right"+[treeCounter]).style.backgroundColor = "yellow";    
        treeCounter++;
        flaseTimer = 0;
    } else  if (treeCounter <= 5){    
            console.log([treeCounter]);
            console.log("test");
            document.getElementById("left"+[treeCounter]).style.backgroundColor = "green";
            document.getElementById("right"+[treeCounter]).style.backgroundColor = "green";    
        treeCounter++;
        flaseTimer = 1;
    } else {
        console.log("break");
        flaseTimer = 1;       
        return stopAni();
        }};

function  treeAni(){
nIntervId = setInterval(XmasTree, 500);
}

function stopAni(){
    clearInterval(nIntervId);
    treeCounter = 1;
}
function falseStart() {
    clearInterval(nIntervId);
     for (var i = 1; i <= 5; i++) {
        document.getElementById("left"+[i]).style.backgroundColor = "red";
        document.getElementById("right"+[i]).style.backgroundColor = "red"; 
    }
    treeCounter = 1;
    alert('False Start!');
    CarMove();
    aiStop();
    
 }  

// Winner Alert & car reset //
function winner(win){
    alert(win + " is the winner!");
    setTimeout(CarMove(), 15000);
}

// intialize CarMove on page load //
CarMove();