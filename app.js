function initMostWanted(people){

	alert("Welcome to my Super Secret government search engine!");
	do{
		var searchType = prompt("Do you want to search by name or attributes? Enter word 'name' or 'attributes' here.");
	}while(!(searchType == "name" || searchType == "attributes"));
	switch(searchType){
		case "name":
			var person = searchByName(prompt("What is the persons first name?"), prompt("And now the last name please?"), people);
			if (person.length <= 0){
				alert("Please enter a relavent name.");
				initMostWanted(people);
			} else {
				mainMenu(person, people);
			}

		break;
		case "attributes":

			var height = prompt("What is the height? If not then leave blank.");
			var weight = prompt("What is the weight? If not then leave blank.");
			var age = prompt("Do you know the persons age? If not then leave blank.");
			var gender= prompt("What is the sex? If not then leave blank.");
			var eyeColor = prompt("What is the eye color? If not then leave blank.");
			var occupation = prompt("What is their occupation? If not then leave blank.");

			var filteredList = searchByAttributes(height, weight, age, gender, eyeColor,occupation, people);
			var selectedPerson = pickPerson(filteredList);

			mainMenu(selectedPerson, people);
		break;
		default:
		alert("There was an error processing your request.");
		initMostWanted(people);
	}
}

function searchByName(firstName, lastName, people){
	var person = people.filter(function(person){
		return (person.firstName === firstName && person.lastName === lastName);
	});
	return (person[0]);
}

function searchByAttributes(height, weight, age, gender, eyeColor, occupation, people){
	return people.filter(function(person){
		if (height && (height != person.height)){
			return false;
		} if (weight && (weight != person.weight)){
			return false;
		} if (age && (age != person.dob)){
			return false;
		} if (gender && (gender != person.gender)){
			return false;
		} if (eyeColor && (eyeColor != person.eyeColor)){
			return false;
		} if (occupation && (occupation != person.occupation)){
			return false;
		}
		return true;
	});
}

function pickPerson(filteredList){
	var message="";
	for (var i=0; i < filteredList.length; i++){
		message += (i +" Name: "+filteredList[i].firstName+ " " +filteredList[i].lastName);
	}
		alert(message);
		var choosePerson = prompt("Type the number of the person you would like to know more about?");
	return filteredList[choosePerson];

}



function mainMenu(person, people){

	var displayInfo = prompt("Would you like to search for: "+person.firstName+ " " +person.lastName+"'s 'info', 'family', 'next of kin' or 'decendents'? Otherwise type 'quit' or 'restart'.");
	switch(displayInfo){
		case "info":
		getPersonInfo(person, people);

	break;
		case "family":
		getFamily(person,people);
	break;
		case "nextOfKin":
		getNextOfKin(person,people);

	break;
		case "decendents":
		getDecendents(person,people);

	break;
		case "quit":

	break;
		case "restart":
		initMostWanted(people);

	break;
	default:
}}

function getPersonInfo(person, people){
	alert("Name is: "+person.firstName+" "+person.lastName+"\nGender is "+person.gender+"\nBirthday is: "+person.dob+"\nHeight is: "+person.height+"\nWeight is: "+person.weight+"\nOccupation is: "+person.occupation+".");
	mainMenu(person,people);
}

function getFamily(person, people){
do{
		var searchFamily = prompt("Would you like to search for parents or current spouse?");
	}while(!(searchFamily == "parents" || searchFamily == "current spouse"));
	switch(searchFamily){
		case "parents":
		var filteredParents = searchForParents(person.parents,people);
		showParents(filteredParents,people);
		mainMenu(person,people);
	break;
		case "current spouse":


	break;
			case "kids":


	break;
			case "siblings":


	break;
	default:
}}

function searchForParents(parents,people){
		return people.filter(function(p){
			if(p.id == parents[0] || p.id == parents[1]){
				return true;
			} else if(p == (parents.length < 0)){
				return false;
			}
		});
	}


	function showParents(filteredParents,people){
		var message="This person has no parents.";
		for (var i=0; i < filteredParents.length; i++){
			message += (" Parents are: "+filteredParents[0].firstName+ " " +filteredParents[0].lastName+" && "+filteredParents[1].firstName+" "+filteredParents[1].lastName);
		}
	alert(message);
	return message;
}
/*


function getNextOfKin(person, people){

}


function getDecendents(person, people){

}
*/
