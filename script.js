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