var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}
recognition.onresult=function(event) {
console.log(event);
var path = event.results[0][0].transcript;
if(path=="selfie")  {
    speak();
}
}
camera = document.getElementById("camera");
Webcam.set({ width: 500, height: 400, image_format: 'jpeg', jpeg_quality: 100 });

function speak() {

    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    // adding setTimeout function
    setTimeout(function () {
        var image_id = "selfie1";
        take_snapshot();
        speak_data = "Taking your selfie in 10 seconds";

        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function () {
        var image_id = "selfie2";
        take_snapshot();
        speak_data = "Taking your selfie in 15 seconds";

        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 15000);

};



//end of speak function

//adding take_snapshot function

function take_snapshot() {

    console.log(image_id);

    Webcam.snap(function (data_uri) {
        if (image_id == "selfie1") {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src=" ' + data_uri + ' "/>';

        }

        if (image_id == "selfie2") {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src=" ' + data_uri + ' "/>';

        }

        if (image_id == "selfie3") {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src=" ' + data_uri + ' "/>';

        }

    });

}
