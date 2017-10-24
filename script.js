function toggleColor(element){
	var color = element.className
	if(color === "red")
	{element.className = "green";
	}
	else{
		element.className = "red";
	}
}

var buttonone = document.getElementById("second");
buttonone.addEventListener("click",function(){
	var list = document.getElementById("green");
	toggleColor(list);})

var buttontwo = document.getElementById("second");
buttontwo.addEventListener("click",function(){console.log("hi")});

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
	if(butonone ==="first"){

	}
}
var buttonone = document.getElementById("first");
buttonone.addEventListener("click",function(){
	var paragraph = document.getElementById("noborder");
	makeBorder(paragraph);

})
