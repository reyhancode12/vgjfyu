var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new  SpeechRecognition();

function start()
{

document.getElementById("textbox").innerHTML="";
recognition.start();

}
recognition.onresult=function(event){

console.log(event);
var Content = event.results[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML=Content;
speak();
}
function speak(){

var synth= window.speechSynthesis;
speak_data=document.getElementById("textbox").value;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
webcam.attach(camera);
}

webcam.set({

width:360,
hieght:250,
img_format: 'png',
png_quality:90

});
camera=document.getElementById("camera");

