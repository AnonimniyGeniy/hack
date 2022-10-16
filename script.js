const Http = new XMLHttpRequest();
var sliderUnit = document.getElementById("sliderRange");    
var outputUnit = document.getElementById("amtOutput"); 
outputUnit.innerHTML = sliderUnit.value;
var a = 0;
sliderUnit.oninput = function(){
    outputUnit.innerHTML = this.value;
    console.log(sliderUnit.value);
    a = this.value;
    parseInt(a); // Change this line
}
var current;
current = a;
Http.open('POST', 'http://127.0.0.1:5000/slider_update');
Http.send(a);
return;