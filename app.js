function initMostWanted(people){
	alert("Welcome to our Super Secret government search engine!");
	do{
		var searchType = prompt("Do you want to search by name, attributes or family? Enter word 'name', 'attributes' or 'family' here.");
	}while(!(searchType == "name" || searchType == "attributes" || searchType == "family"));
	switch(searchType){
		case "name":
			var person = searchByName(prompt("What is the persons last name?"), prompt("And now the first name please?"), people);
			mainMenu(person, people);
				searchByName(lastName, firstName, people);
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
	var namefilter = people.filter(person => person.lastName === lastName && person.firstName === firstName);
	return namefilter;
}

function mainMenu(person, people){
	var displayOption = prompt("This is the Main Menu.");
	switch(displayOption){
		case "name":
			namefilter()
			
			break;
		case "attributes":

			break;
		case "family":
			
			break;
		case "nextOfKin":

			break;
		case "decendents":

			break;
		case "restart":
			
			break;
		default:
		alert("Please enter valid search criteria.");
		return people;
	}
	
}

function searchByAttrs(gender, occupation, height, weight, age, eyeColor, people){

}

function searchByFam(currentspouse, parents, people){

}

function namefilter(){
	display(person)
}
