let request = new XMLHttpRequest();
let url = "https://api.sunrise-sunset.org/json?lat=40.739929&lng=-73.990158"
request.open('GET', url, true);
request.onload = function() {
  let data = JSON.parse(this.response);
console.log(data);
  let sunrise = document.getElementById('sunrise');
  let sunset = document.getElementById('sunset');
  
  if (request.status >= 200 && request.status < 400) {
      sunrise.textContent =convertToEST(data.results.sunrise);
      sunset.textContent = convertToEST(data.results.sunset);

  }
};
request.send();
//Used to extract the hour from our time string by using the substr() 
//function which will return a portion of the string.
function convertToEST(utc){
  let utcHours= utc.substr(0, utc.indexOf(":"));
  let utcMinSec= utc.substr(utc.indexOf(":")+1);

//We had to use the parseInt() function here to convert the string into a number
//before we can substract it. The parseInt() function takes two parameters. One is the string it is converting.
  let est= parseInt(utc, 10) -5;
  est+= ":"+utcMinSec;
  
  return est; 
}
//Now that we have our function, we will call it in our code. We can pass 
//in our sunrise/sunset strings and it will return the  converted EST time string. 


