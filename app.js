function initMostWanted(people){
	
	do{
		alert("Welcome to my Super Secret government search engine!");
		var searchType = prompt("Do you want to search by name, attributes or family? Enter word 'name' or 'attributes' here.");
	}while(!(searchType == "name" || searchType == "attributes"));
	switch(searchType){
		case "name":
			var person = searchByName(prompt("What is the persons first name?"), prompt("And now the last name please?"), people);
			if (person.length > 0){
			mainMenu(person[0], people);	
		} else {
			alert("Please enter a relavent name.");
		}
			
		break;
		case "attributes":
		
			var age = searchByAttributes(prompt("Do you know the persons age? If not then leave blank."),people);
		
		
	

			var occupation = (prompt("What is their occupation?"),people);
			
			var height = (prompt("What is the height?"),people);

			var weight = (prompt("What is the weight?"),people);

			var  sex= (prompt("What is the sex?"),people);

			var eyeColor = (prompt("What is the eye color?"),people);

				searchByAttributes(age, height, weight, sex, eyeColor,occupation, people);
		break;
		default:
		alert("There was an error processing your request.");
		initMostWanted(people);
	}
}



function searchByName(firstName, lastName, people){
	var person = people.filter(person =>{return person.firstName === firstName && person.lastName === lastName});
	
	//prompt("Would you like to see physical attributes?");
	return person;	
}


function searchByAttributes(age, height, weight, sex, eyeColor,occupation, people){
	var sublist = people.filter(person =>{
		return person.age === age && person.height === height && person.weight === weight && person.gender === sex && person.eyecolor === eyecolor && person.occupation === occupation;

			});



		return sublist;
}


function mainMenu(person, people){
	if(!person){
		alert("Person not found.")
	}
	alert(person.firstName)

switch(){
	case "parents"

break;
	case "current spouse"

break;
	case "decendents"

break;
	case "quit"

break;
	case "restart"

break;
}




/* Next of kin
	decendents
	parents
*/	
	
}



function searchByFam(currentspouse, parents, people){

}

