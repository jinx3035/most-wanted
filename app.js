function initMostWanted(people){
	
	do{
		alert("Welcome to my Super Secret government search engine!");
		var searchType = prompt("Do you want to search by name, attributes or family? Enter word 'name', 'attributes' or 'family' here.");
	}while(!(searchType == "name" || searchType == "attributes" || searchType == "family"));
	switch(searchType){
		case "name":
			var listOfPeople = searchByName(prompt("What is the persons last name?"), prompt("And now the first name please?"), people);
			if (listOfPeople.length > 0){
			mainMenu(listOfPeople[0], people);	
		} else {
			alert("Please enter relavent search criteria.");
		}
			
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





function searchByName(lastName, firstName, people){
	return people.filter(person => person.lastName === lastName && person.firstName === firstName);
	
}





function mainMenu(person, people){
	
	
	
}

function searchByAttrs(gender, occupation, height, weight, age, eyeColor, people){
	var sublist = people.filter(function(person){





	});
	return sublist
}

function searchByFam(currentspouse, parents, people){

}

function nameFilter(){
	display(person)
}
