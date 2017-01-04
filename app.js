function initMostWanted(data){
	alert("Welcome to our secret government search engine!");
	do{
		var searchType = prompt("Do you want to search by name or attributes? Enter word 'name' or 'attributes'.")
	}while(!(searchType == "name" || searchType == "attributes"));
	switch(searchType){
		case "name":
			var person = getPerson(prompt("What is the persons last name?"), prompt("And now the first name please?"), people);
			mainMenu(person, poeople);
		break;
		case "attributes":

		break;
		default:
		alert("There was an error processing your request.");
		initMostWanted(data);
	}
}

function getPerson(firstName, lastName, data){
	// once the search is done, pass the results to the responder function
	responder(result);
}

function mainMenu(person, data){

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