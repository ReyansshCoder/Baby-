
music=""
status=""
objects=[]

function preload(){
    music=loadSound("train_horn.mp3")
   
    }

    function setup(){
        c1=createCanvas(380,380)
        c1.center()
        v1= createCapture(VIDEO)
        v1.size(380,380)
        v1.hide()
        mymodel=ml5.objectDetector('cocossd',modelLoaded)
        document.getElementById("status").innerHTML="Searching for babies"
       
    }
    

function modelLoaded(){
console.log("model loaded")
status= true;

}

function gotResult(error,results){
if(error){
    console.log(error)
}
else{
    console.log(results)
objects=results
}}

function draw(){
image (v1, 0,0,380,380)
if(status!=""){
    mymodel.detect(v1,gotResult)
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="Baccha found!"
stroke("red")
a=floor(objects[i].confidence*100)
text (objects[i].label+" "+a+"%",objects[i].x,objects[i].y)
noFill ()
stroke("green")
rect (objects[i].x-50,objects[i].y,objects[i].width,objects[i].height)
if(object[i].label=="person"){
    document.getElementById("status").innerHTML="u got found!"  
    music.stop()
}
else{
    document.getElementById("status").innerHTML="Baccha not found!"
    music.play()
}
}
if(objects.length==0){
    document.getElementById("status").innerHTML="Baccha found!"
    music.play()
}
}
}
