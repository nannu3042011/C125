noseX=0;
noseY=0;
function preloaded(){
  mustache = loadImAGE('https://i.postimg.cc/3x3QzSGq/m.png')
}

function steup() 
{
  canvas = createCanvas(300, 300);
  canvas.center(); 
  video = creatcapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function modelLoaded() 
{
 console.log('PoseNet is Initilized');  
}

function draw() { 
  image(video, 0, 0, 300, 300);
  image(mustache, noseX, noseY, 30, 30); 
}

function take_snapshot() 
{
    save('myFilterImage.png');
}

function gotPoses(results) 
{
  if(results.lengte > 0 )
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
  } 
}