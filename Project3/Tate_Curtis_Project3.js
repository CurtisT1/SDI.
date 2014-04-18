//alert("JavaScript works!");

//Curtis Tate
//SDI 1404
//Project 3 


// My variables 


var character1 = "Wizard";
var character2 = "blue giant";
var blueroad = "short way";
var yellowroad = "long way";
var weapon1 = "wand";
var weapon2 = "staff";
var move1 = "tsunami";
var move2 = "tidal wave";
var NumberofGiants = 1;
var FightingAgiant = true;
var Myprompt;


// output of my variables  


console.log("While on his quest" ,character1, "came across too roads" a ,blue road, "that was the short way to the giant.");
console.log("a",yellow road,"which was the long way to the giant.");
console.log(" ",character1, "took the" ,blueroad, "When he arrives at the" ,character2"); 
console.log(" ",character2, "conjures a firer storm at him. The" ,character1, "quickly dodges it and had to quickly choose" ,weapon1," "or" "weapon2.".");
console.log("",Weapon1," is faster and gives the" ,character1, "more movement. ",weapon2," is heavy and drains a half of his magic energy.");
console.log("",character1, "choose "weapon2,"for more powerful magic. ",character2, "hurls the biggest fireball at" ,weapon2, "and he conjures a waterfall and extinguishes the fire.");
console.log("Then",character1,"had a choice to conjure" ,move1," or ",move2,".");


// Boolean


var Use staff gives more power = true;

if (Use staff gives more power === true); {
	console.log (" character1 beat character2 with one move.");
};


FightingaGiant = Confirm ("How Are We going to Destroy the blue giant")

// Prompt

if (fightingAgiant === true){
    Myprompt = prompt("how many blue giants are we going to fight?", "type number of giants");
	Myprompt = parseInt("1");
	if (Myprompt <= 1)
	alert("lets destroy the one blue giant with the wizard staff");
	else
	alert("use wand and try to destroy the blue giant slowly");    
    
    
//Function
    
    var  chooseWeapon = function (character1Name, weapon1) {
		console.log("choose " + weapon1 + " character1 " + character1Name);
	var useWeapon = function(character1Name) {
	var weapon1 = "wand";
		console.log("choose " + weapon1 + character1Name);
	};	 
	useWeapon("wizard");
	useWeapon("blueGiant");
	console.log(character1Name + " choose " + weapon1);
}; 

useWeapon("blueGiant", "staff");

//Loop 

var move2 = 2;
while(move2 > 0) {
	console.log(move2 + " conjure to tidal waves.");
	move2--;
};

console.log("the blue giant is destroy.");




