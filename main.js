 var leftwrist=0;
 var rightwrist=0;
 var difference=0;
 function setup(){
     video=createCapture(VIDEO);
     video.size(550,500);
     canvas=createCanvas(550,550);
     canvas.position(570,150);
     pose=ml5.poseNet(video,modelloaded);
     pose.on("pose",gotposes);
 }
 function modelloaded(){
     console.log("model loaded");
 }
 function gotposes(results){
  if(results.length>0){
      console.log(results);
      leftwrist=results[0].pose.leftWrist.x;
      rightwrist=results[0].pose.rightWrist.x;
      difference=floor(leftwrist-rightwrist);
  }
 }
 function draw() {
     fill("gold");
     text("DURVISH",250,250);
     textSize(difference);
 }