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
			alert("Please enter relavent search name.");
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

function searchByAttrs(gender, occupation, height, weight, age, eyeColor, people){
	var sublist = people.filter(function(person){
		return person.gender === gender && person.occupation && person.height && person.weight && person.age &&person.eyecolor;
	 });
	
	return sublist;
}

function searchByFam(currentspouse, parents, people){

}

