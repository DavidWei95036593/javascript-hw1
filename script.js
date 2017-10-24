function toggleColor(element){
	var color = element.className
	if(color ==="red")
	{element.className = "green";}
	else{
		element.className = "red";
	}	
}

var buttonone = document.getElementById("second");
buttonone.addEventListener("onclick",function(){
	var list = document.getElementById("list");
	toggleColor(list);})



function makeBorder(element){
	var border = element.className;
	if(border =="border")
		element.className = "border";
	else{
		element.className = "noborder";
	}
}
var buttontwo = document.getElementById("first");
buttontwo.addEventListener("onclick",function(){
	var paragraph = document.getElementById("text");
	makeBorder(paragraph);
})