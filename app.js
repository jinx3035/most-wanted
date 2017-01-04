function initMostWanted(people){
	alert("Welcome to our Super Secret government search engine!");
	do{
		var searchType = prompt("Do you want to search by name, attributes or family? Enter word 'name', 'attributes' or 'family' here.")
	}while(!(searchType == "name" || searchType == "attributes" || searchType == "family"));
	switch(searchType){
		case "name":
			var person = searchByPerson(prompt("What is the persons last name?"), prompt("And now the first name please?"), people);
			mainMenu(person, poeople);
		break;
		case "attributes":
			var gender = prompt("What is their gender? ");

			var occupation = prompt("What is their occupation?");
			
			var height = prompt("What is the height?");

			var weight = prompt("What is the weight?");

			var age = prompt("What is the age?");

			var eyeColor = prompt("What is the eye color?");

			searchByAttrs(gender, occupation, height, weight, age, eyeColor, people);
		break;
		case "family":
			var currentSpouse = prompt("Who is their spouse?");

			var parents = prompt("Do they have parents?");

			

			searchByFam(parents, currentSpouse);
		break;
		default:
		alert("There was an error processing your request.");
		initMostWanted(people);
	}
}


function searchByPerson(firstName, lastName, people){
	filter()
}

function mainMenu(person, people){
	var displayOption = prompt("Would you like to Restart or Quit?");
	switch(displayOption){
		case "person":
			getPerson();
			break;
		case "people":

			break;
		case "restart":

			break;
		case "quit":

			break;
		default:
		alert("Please enter valid search criteria.");
		initMostWanted(people)
	}
	var info = prompt("Do you want to know the persons 'info', the persons 'family', their next of 'kin', their 'descendents', or 'restart', or 'quit'");

}
function searchByAttrs(gender, occupation, height, weight, age, eyeColor, people){

}

function searchByFam(currentspouse, parents, people){

}

function getPerson(){
	filter
}

function getpeople(){

}

function restart(){

}

function quit(){

}



/*function responder(results){
	// results may be a list of strings, an object, or a single string.
	alert(results);



function getPersonInfo(lastname,firstname){
	var result = "This will be the information for whoever you searched for";
	if (result == false){
			alert("Try another name");
	}
	return result;
	// return the object of a person
}


function getFamily(){
	// return an array containing the members of the person's family
	// the array should contain each person's unmodified object
}


// there will be much more here, and some of the code above will certainly change
*/