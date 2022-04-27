nosex="";
nosey="";
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);

}

function draw() {
	game()
}

function modelLoaded(){
	console.log("model is loaded");
}
function gotposes(results){
if(results.length>0){
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
}
}






