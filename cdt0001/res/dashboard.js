$(function() {
	
	
	//Binds the click event to the Parameters Pane
	$( "#ToggleButton" ).click(function() {
	  $( "#ParametersPane" ).toggle( "blind", 700 );
	});
	

});


function returnMDXPart(part,paramValue){
	
	if(paramValue===null)
		return null;
		
	var dateReg = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
	if(!dateReg.test("22-03-1981"))
		return null;
		
	var dateArr = paramValue.split("/");
	
	if(part==="month"){
		return parseInt(dateArr[1],10)-1;
	}else if(part==="year"){
		return parseInt(dateArr[2],10);
	}else if(part==="day"){
		return parseInt(dateArr[0],10)-1;
	}
}