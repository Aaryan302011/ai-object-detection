function setup() {
    canvas=createCanvas(230,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(230,350);
    video.hide();
}

video ="";

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}


function draw() {
    image(video, 0, 0, 230, 350)
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}