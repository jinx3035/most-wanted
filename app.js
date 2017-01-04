
/*  Remove this from your final submission
function printAllToConsole(dataObj){
	for (var key in dataObj) {
		if (dataObj.hasOwnProperty(key)) {
			console.log(key + " -> " + JSON.stringify(dataObj[key]));
		}
	}
}
printAllToConsole(data);
*/

function initSearch(data){
	alert("Welcome to our secret government search engine!");
	// get all the information you need to run the search
	var lastname = prompt("What is the last name!");
	var firstname = prompt("And now the first name please?");
	
	// then pass that info to the respective function.
	var result = getPersonInfo(lastname,firstname)
		}
	// once the search is done, pass the results to the responder function
	responder(results);



function responder(results){
	// results may be a list of strings, an object, or a single string.
	alert(results);
}


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
