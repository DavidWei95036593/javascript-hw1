function toggleColor(element){
	var color = element.className
	if(color ==="red")
	{element.className = "green";
	}
	else{
		element.className = "red";
	}
}

// var buttonone = document.getElementById("second");
// buttonone.addEventListener("onclick",function(){
// 	var list = document.getElementById("list");
// 	toggleColor(list);})

var buttontwo = document.getElementById("second");
buttontwo.addEventListener("onclick",console.log("hi"))

function makeBorder(element){
	var border = element.className;
	if(border === "border")
		element.className = "noborder";

	else{
		element.className = "border";
	}
}
var buttonone = document.getElementById("first");
buttonone.addEventListener("onclick",function(){
	var paragraph = document.getElementById("text");
	makeBorder(paragraph);
})
