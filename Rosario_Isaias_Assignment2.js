// alert("JavaScript works!");

// Isaias Rosario
// SDI Term 1308
// Project 2
// Learning Functions and Returns


// Local Variables

var newName = "Jonny",
	numOfApples = 4,
	names = ["Tommy", "Bobby", "Danny", "Sammy"]
;

// Procedure Function

var enoughApples = function(num){
	if (num === names.length && numOfApples === names.length){
		console.log("We have enough apples for everyone.");
	} else {
		console.log("We do not have enough apples for everyone , we will have to split them.");
	};
};

// Boolean Function

var howToSplit = function(apples, kids){
	if (apples === kids || kids === apples){
		var boo = true;
		console.log("Now we know that there is enough apples, we can have one each.");
	} else {
	var boo = false;
		console.log("Not enough apples so we need to figure out how we can split these.");
	};
	return boo;
};

// Number Function

var howManyApples = function(num){
	var perTxt = " will get one apple.";
	var i = 0;
	while (num > 0){
		console.log(names[i] + perTxt);
		i++;
		num--;
	}
	console.log("No more apples to give out everyone has one.");
	return num;
};

// String Function

var newNameHere = function(str1, str2){
	var str  = " is now here and ";
	var strCon = "But " + str1 + str + str2;
	
	console.log(strCon + " We will have to slice all these apples and split them.");
	
	return str1;
};

// Array Function

var kidNames = function(anum, arr){
	arr.push(newName);
	var arrAmt = names.length;
	for(var i = 0; i < arrAmt; i++){
		var appDiv = (anum * names.length) / arrAmt
		console.log("We split " + numOfApples + " apples into " + (anum * names.length) + 
					" slices, so " + arr[i] + " got " + appDiv + " slices.");
	};
	return arr;
};


// Start Terminator
//

// Functions with Arguments for Outputs and Returns

enoughApples(numOfApples);

r1 = howToSplit(numOfApples, names.length); // returns a boolean

r2 = howManyApples(numOfApples); // returns a number

r3 = newNameHere(newName, "wants to eat an apple."); // returns a string

r4 = kidNames(numOfApples, names); // returns an array


// Returned Values Output

console.log("It was " + r1 + " that we had only " + r2 + " apples left for " + r3 +
			". " + "But once we got to split them " + r4 + " got 4 slices each.");

//
// Finish Terminator