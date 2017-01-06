function initMostWanted(people){
	
	do{
		alert("Welcome to my Super Secret government search engine!");
		var searchType = prompt("Do you want to search by name, attributes or family? Enter word 'name', 'attributes' or 'family' here.");
	}while(!(searchType == "name" || searchType == "attributes" || searchType == "family"));
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
			var gender = (prompt("What is their gender? "),people);
				if (gender.length > 0){
				mainMenu(person, people);
			}else {
				alert("Please enter relavent attributes.")
			}

			var occupation = (prompt("What is their occupation?"),people);
			
			var height = (prompt("What is the height?"),people);

			var weight = (prompt("What is the weight?"),people);

			var age = (prompt("What is the age?"),people);

			var eyeColor = (prompt("What is the eye color?"),people);

				searchByAttributes(gender, occupation, height, weight, age, eyeColor, people);
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





function searchByName(firstName, lastName, people){
	var person = people.filter(person =>{return person.firstName === firstName && person.lastName === lastName});
	alert("This is: "+person[0].firstName+" "+person[0].lastName+" Height:"+person[0].height+" Weight:"+person[0].weight+"")
	//prompt("Would you like to see physical attributes?");
	return person;	
}





function mainMenu(person, people){

/* Next of kin
	decendents
	parents
*/	
	
}

function searchByAttributes(gender, occupation, height, weight, age, eyeColor, people){
	var sublist = people.filter(person =>{
		return person.gender === gender && person.occupation === occupation && person.height === height && person.weight === weight && person.age === age && person.eyecolor === eyecolor});
						alert("Gender is: "+person[0].gender+ "Their job is: "+person[0].occupation+ "Height: "+person[0].height+ "weight:"+person[0].weight+ "Age:"+person[0].age+ "Eyecolor:"+person[0].eyecolor+"");

		return sublist;

}

function searchByFam(currentspouse, parents, people){

}

