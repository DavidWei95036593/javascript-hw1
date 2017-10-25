function makeBorder(element){
	var border = element.className;
	if(border === "border")
		element.className = "noborder";

	else{
		element.className = "border";
	}
}

function changeButtononeContext(element){
	var buttonone = element.className;
	if(buttonone ==="first"){
		element.innerHTML = "Add Border";
		buttonone ==="notfirst";
	}else{
		element.innerHTML = "Remove Border";
		buttonone ==="first";
	}
}


function toggleColor(element){
	var color = element.className;
	if(color === "red")
	{element.className = "green";
	}
	else{
		element.className = "red";
	}
}

var buttonone = document.getElementById("second");
buttonone.addEventListener("click",function(){
	var list = document.getElementById("notgreen");
	toggleColor(list);
})

var buttonone = document.getElementById("first");
	buttonone.addEventListener("click",function(){
		var paragraph = document.getElementById("noborder");
		var context = document.getElementById("first");
		changeButtononeContext(context);
	makeBorder(paragraph);
})

	
