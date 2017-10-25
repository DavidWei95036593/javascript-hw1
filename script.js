
//function that change the first button's text
function changeButtononeContext(element){
	var buttonone = element.className;
	if(buttonone ==="first"){
		element.innerHTML = "Add Border";
		element.className ="notfirst";
	}else{
		element.innerHTML = "Remove Border";
		element.className ="first";
	}
}
//function that change the second button's text
function changeButtontwoContext(element){
	var buttontwo = element.className;
	if(buttontwo ==="second"){
		element.innerHTML = "Make List Items Red";
		element.className ="notfirst";
	}else{
		element.innerHTML = "Make List Items Green";
		element.className ="second";
	}
}
//function that make border
function makeBorder(element){
	var border = element.className;
	if(border === "border")
		element.className = "noborder";

	else{
		element.className = "border";
	}
}
//function that change the color
function toggleColor(element){
	var color = element.className;
	if(color === "red")
	{element.className = "green";
	}
	else{
		element.className = "red";
	}
}

//this sets buttone
var buttonone = document.getElementById("first");
	buttonone.addEventListener("click",function(){
		//this change the context of the button
		var context = document.getElementById("first");
		changeButtononeContext(context);

		//this change the border of the paragraph
			//set the index to zero
			var index = 0;
			//select all the elements that has the class name "noborder"
			var paragraph = document.getElementsByClassName("noborder");
			//use while loop to make border
			while(index < paragraph.length){
				makeBorder(paragraph[index]);
				// console.log(paragraph[index].innerHTML);
				index +=1;
			}
})
//this sets button two
var buttontwo = document.getElementById("second");
	buttontwo.addEventListener("click",function(){
		//this change the context of the button
		var context = document.getElementById("second");
		changeButtontwoContext(context);

		//this change the list item's color
			//set the index to zero
			var index = 0;
			//select all the elements that has the class name "notgreen"
			var list = document.getElementsByClassName("notgreen");
			//use while loop to change the color
			while(index < list.length){
				toggleColor(list[index]);
				// console.log(list[index].innerHTML);
				index +=1;
			}
		
})
