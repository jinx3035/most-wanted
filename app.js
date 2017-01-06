function initMostWanted(people){

	alert("Welcome to my Super Secret government search engine!");	
	do{
		var searchType = prompt("Do you want to search by name or attributes? Enter word 'name' or 'attributes' here.");
	}while(!(searchType == "name" || searchType == "attributes"));
	switch(searchType){
		case "name":
			var person = searchByName(prompt("What is the persons first name?"), prompt("And now the last name please?"), people);
			if (person){
			mainMenu(person, people);	
		} else {
			alert("Please enter a relavent name.");
		}
			
		break;
		case "attributes":
		
			var age = (prompt("Do you know the persons age? If not then leave blank."),people);
			var occupation = (prompt("What is their occupation?"),people);			
			var height = (prompt("What is the height?"),people);
			var weight = (prompt("What is the weight?"),people);
			var sex= (prompt("What is the sex?"),people);
			var eyeColor = (prompt("What is the eye color?"),people);
				searchByAttributes(age, height, weight, sex, eyeColor,occupation, people);
		break;
		default:
		//<br>?
		alert("There was an error processing your request.");
		initMostWanted(people);
	}
}



function searchByName(firstName, lastName, people){
	var person= people.filter(person =>person.firstName === firstName && person.lastName === lastName);
	return person[0] ;
}


function searchByAttributes(age, height, weight, sex, eyeColor,occupation, people){
	var sublist = people.filter(person =>{
		return person.age === age && person.height === height && person.weight === weight && person.gender === sex && person.eyecolor === eyecolor && person.occupation === occupation;
	return sublist;	
})};
	


function mainMenu(person, people){
	if(!person){
		alert("Person not found.");
		initMostWanted(people);
	}
	alert("found: "+ person.firstName + " " + person.lastName);
	var displayInfo = prompt("Would you like to search for persons 'info', 'family' or 'decendents'? Otherwise type 'quit' or 'restart'.");
	switch(displayInfo){
		case "info":
		getPersoninfo(person.people);

	break;
		case "family":
		getFamily(person.people);
	break;
		case "kin":
		getKin(person.people);

	break;
		case "decendents":
		getDecendents(person.people);

	break;
		case "quit":

	break;
		case "restart":
		initMostWanted(people);

	break;
	default:
}}

function getPersoninfo(person, people){
	alert("Name is: "+person.firstName+" "+person.lastName+". Birthday is: "+person.dob+". Height is: "+person.height+". Weight is: "+person.weight+". Occupation is: "+person.occupation+".");
	mainMenu(person.people)
}

function getFamily(person,people){

}

function getFamily(currentspouse, parents, people){

}

