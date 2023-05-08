function setup() {
video=createCapture(VIDEO);
video.size(550, 850);
canvas = createCanvas(550, 550);
canvas.position(700,150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded() {
console.log('PoseNet Is Initialized!');
}
function draw() {
background('#969a97');
}
function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
}
}