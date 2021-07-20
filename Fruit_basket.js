Objects=[];
status="";
function preload(){
    img=loadImage("Fruit Basket.jpg");
    }
    
    function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : detecting objects";
    }
    function modelLoaded(){
        console.log("model is loaded");
        status=true;
        objectDetector.detect(img,gotresults);
    }
    
    function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        Objects=results;
    }
    }
    
    function draw(){
    image(img,0,0,640,420);
    if(status !=""){
        for(p=0;p<Objects.length;p++){
            document.getElementById("status").innerHTML="Status : Objects detected";
            fill("#FF0000");
            percent=floor(Objects[p].confidence * 100);
            text(Objects[p].label+" "+percent+"%",Objects[p].x+15,Objects[p].y+15);
            noFill()
            stroke("#FF0000");
            rect(Objects[p].x,Objects[p].y,Objects[p].width,Objects[p].height);
            }
    }
    }
    function back(){
        window.location="index.html";
    }