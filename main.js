song1 = "";
song2 = "";
song1_status = "";
song2_status = "";
scoreRightWrist = 0;
scoreLeftWrist = 0;
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;

function preload()
{
	song1 = loadSound("born_for_this.mp3");
	song2 = loadSound("unstoppable.mp3");
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();
	video = createCapture(VIDEO);
	video.hide();
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('mymodel is starvinnnnnnggggg !!!!!!!!');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	console.log(results);
	scoreLeftWrist =  results[0].pose.keypoints[9].score;
	console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);
	
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
  }
}

function draw() {
	image(video, 0, 0, 600, 500);
	
	song1_status = song1.isPlaying();
	song2_status = song2.isPlaying();
    r = random(255);
    g = random(255);
    b = random(255);
    fill(r,g,b);
    stroke(r,g,b);
	if(scoreRightWrist > 0.2)
	{ 
		circle(rightWristX,rightWristY,20);

			song2.stop();

		if(song1_status = false)
		{
			song1.play();
			
		}
	}

}

function play()
{
	song.play();
	song.setVolume(1);
	song.rate(1);
}