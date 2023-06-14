function showSubmit(){
	let answ = document.getElementById("answ").value;
	let resultDiv = document.getElementById("result");
	let answ1 = document.getElementById("answ1").value;
	let answ2 = document.getElementById("answ2").value;
	let answ3 = document.getElementById("answ3").value;
	let total = 0; 
	
	if(answ == "Execute Code if conditions are met."){
		total++;
		resultDiv.innerHTML+= "<p>Question 1 correct </p>";
	}
	else{
		resultDiv.innerHTML += "<p>Question 1 incorrect </p>";
	}
	if(answ1 == "<img src = 'images/cheetah.jpg'"){
		total++;
		resultDiv.innerHTML+= "<p>Question 2 correct </p>";
	}
	else{
		resultDiv.innerHTML += "<p>Question 2 incorrect </p>";
	}
	if(answ2 == "HyperText Transfer Protocal Secure"){
		total++;
		resultDiv.innerHTML+= "<p>Question 3 correct </p>";
	}
	else{
		resultDiv.innerHTML += "<p>Question 3 incorrect </p>";
	}
	if(answ3 == "!-- --"){
		total++;
		resultDiv.innerHTML+= "<p>Question 4 correct </p>";
	}
	else{
		resultDiv.innerHTML += "<p>Question 4 incorrect </p>";
	}
	
	resultDiv.innerHTML += total + "/4";
}

let num = 0; 

//Slideshow
function changeSlide(){
	let slide = document.getElementById("slide");
	let change = ["images/IMG_2167.jpg", "images/IMG_2170.jpg", "images/IMG_2168.jpg", "images/IMG_2166 (1).jpg"];
	
	slide.src = change[num];
	num++;
	
	if (num == change.length){
		num = 0;
	}
}

setInterval(changeSlide, 1000);