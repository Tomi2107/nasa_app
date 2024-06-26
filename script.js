let req = new XMLHttpRequest();
// let url = "https://api.nasa.gov/planetary/apod?api_key=";
let url = "https://api.nasa.gov/planetary/apod?api_key=";
let api_key = "";

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key="

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	let response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation
    console.log(response);
  }
})
