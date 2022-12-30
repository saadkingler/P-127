song = "";
left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_x = 0;
right_wrist_y = 0;
score_left_wrist = 0;
score_right_wrist = 0;

function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}