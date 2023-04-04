img ="";
status_js="";
function setup() { 
    canvas = createCanvas(640, 420);
    canvas.center();    
    ObjectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = " status: detecting objects";
}
function preload() {
    img = loadImage("dog_cat.jpg");
}
function draw(){
    image(img, 0, 0, 640, 420 );
    fill("#000000");
    text("dog", 45, 75);
    noFill();
    stroke("#000000");
    rect(30,60,450,350);

    fill("#000000");
    text("cat", 320, 90);
    noFill();
    stroke("#000000");
    rect(300, 70, 270, 320 );
}
function modelLoaded() {
    console.log("model is loaded by Aarohi");
    status_js = true;
    ObjectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if(error)  {
        console.log(error);
    }
    console.log(results);
}
