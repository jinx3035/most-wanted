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
			var gender= prompt("Is the person male or female? If not known leave blank.");
			var height = prompt("What is the height? If not known leave blank.");
			var weight = prompt("What is the weight? If not known leave blank.");
			var age = prompt("Do you know the persons age? If not leave blank.");
			var occupation = prompt("What is their occupation? If not known leave blank.");

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

function searchByAttributes(height, weight, age, gender, occupation, people){
	return people.filter(function(person)
	{
		if (gender && (gender != person.gender)){return false;}
		if (height && (height != person.height)){return false;}
		if (weight && (weight != person.weight)){return false;} 
		if (age && (age != person.dob)){return false;}  
		if (occupation && (occupation != person.occupation)){return false;}
		return true;
	});
}

function pickPerson(filteredList){
	var message="";
	for (var i=0; i < filteredList.length; i++){
		message += (i +" Name: "+filteredList[i].firstName+ " " +filteredList[i].lastName);
	}
		alert(message);
		var choosePerson = prompt("Type the number of the person you would like to know more about? If none exists press enter.");
		if(!choosePerson){
			alert("Search criteria does not match the database.");
		}
	return filteredList[choosePerson];
}

function mainMenu(person, people){
	var displayInfo = prompt("Would you like to search for: "+person.firstName+ " " +person.lastName+"'s 'info', 'immediate family', 'next of kin' or 'descendants'? Otherwise type 'quit' or 'restart'.");
	switch(displayInfo){
			case "info":
			GetPersonInfo(person, people);
		break;
			case "immediate family":
			GetFamily(person,people);
		break;
			case "nextOfKin":
			getNextOfKin(person,people);
		break;
			case "descendants":
			var descendantsFound = GetDecendants(person,people);
			ShowDescendants(descendantsFound,people);
			mainMenu(person,people);
		break;
			case "quit":
		break;
			case "restart":
			initMostWanted(people);
		break;
	default:
	}
}

function GetPersonInfo(person, people){
	alert("Name is: "+person.firstName+" "+person.lastName+"\nGender is "+person.gender+"\nBirthday is: "+person.dob+"\nHeight is: "+person.height+"\nWeight is: "+person.weight+"\nOccupation is: "+person.occupation+".");
	mainMenu(person,people);
}

function GetFamily(person, people){
	do{
		var searchFamily = prompt("Search for 'parents', 'kids', 'siblings', or 'current spouse' ?");
		}while(!(searchFamily == "parents" || searchFamily == "kids" || searchFamily == "siblings" || searchFamily == "current spouse"));
		switch(searchFamily){
		case "parents":
		var filteredParents = SearchForParents(person.parents,people);
		ShowParents(filteredParents,people);
		mainMenu(person,people);
		break;
		case "kids":
		var kidsFound = GetKids(person,people);
		ShowKids(kidsFound, people);
		GetFamily();
		break;
		case "siblings":
		var siblingsFound = GetSiblings(person, people);
		ShowSiblings(siblingsFound, people)
		GetFamily();
		break;
		case "current spouse":
		var spouseFound = GetSpouse(person, people);
		ShowSpouse(spouseFound, people)
		GetFamily();
		break;
		case "return":
		mainMenu();
		default:
		mainMenu();
	}
}

function SearchForParents(parents,people){
	return people.filter(function(p){
		if(p.id == parents[0] || p.id == parents[1]){
			return true;
		} else if(p == (parents.length < 0)){
			return false;
		}
	});
}

function ShowParents(filteredParents,people){
	var message="This person has no parents.";
	for (var i=0; i < filteredParents.length; i++){
		message += (" Parents are: "+filteredParents[0].firstName+ " " +filteredParents[0].lastName+" && "+filteredParents[1].firstName+" "+filteredParents[1].lastName);
	}
	alert(message);
	return message;
}

function GetKids(person, people) {
    var kids = [];
    for (var i = 0; i < data.length; i++) {
        var id = parseInt(person.id);
        var firstParent = data[i].parents[0];
        var lastParent = data[i].parents[1];
        if (id === firstParent || id === lastParent) {
            kids.push(data[i]);
        }
    }
    return kids;
}

function ShowKids(kidsFound,people){
	var message="";
	for(var i=0; i<kidsFound.length; i++){
		message += (kidsFound[i].firstName+" "+kidsFound[i].lastName+", ");
	}
	alert("Kids found \n"+message);
	return kidsFound;
}

function GetSiblings(person,people) {
    var filterSiblings = function(data) {
        for (var i = 0; i < data.parents.length; i++) {
            var id = person.parents[0];
            if (data.parents.indexOf(id) > -1 && person.id !== data.id) {
                return true;
            }
        }
    };
    return dataObject.filter(filterSiblings);
}

function ShowSiblings(siblingsFound,people){
	var message="";
	for(var i=0; i<siblingsFound.length; i++){
		message += (siblingsFound[i].firstName+" "+siblingsFound[i].lastName+" ");
	}
	alert("Siblings found \n"+message);
	return siblingsFound;
}

function GetSpouse(person,people) {
    if (person.currentSpouse) {
        for (var i = 0; i < data.length; i++) {
            if (person.currentSpouse == parseInt(data[i].id)) {
                return data[i];
            }
        }
    }
    return null;
}

function ShowSpouse(spouseFound,people){
	var message="";
	for(var i=0; i<spouseFound.length; i++){
		message += (spouseFound[i].firstName+" "+spouseFound[i].lastName+" ");
	}
	alert("Spouse found \n"+message);
	return spouseFound;
}

function GetDecendants(person,people){
	var descendants = [];
	var id = person.id;
	for(var i=0; i<data.length; i++){
		var person = data[i];
		if(person.parents.indexOf(parseInt(id))>-1){
			descendants.push(person);
			var foundDescendants = GetDecendants(person,people);
			if(foundDescendants){
				descendants = descendants.concat(foundDescendants);
			}
		}
	}
	if(descendants.length === 0){
		return false;
	}
	return descendants;
}

function ShowDescendants(descendantsFound,people){
	var message="";
	for(var i=0; i<descendantsFound.length; i++){
		message += (descendantsFound[i].firstName+" "+descendantsFound[i].lastName+" ");
	}
	alert("Descendants found \n"+message);
	return descendantsFound;
}


