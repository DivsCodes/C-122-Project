function preload()
{

}

function setup()
{
    canvas = createCanvas(800, 700)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide();
}

function draw()
{
    image(video, 150, 150, 500, 400);
    fill("lightgreen")
    stroke("lightgreen")
    rect(75, 75, 600, 20)
    rect(75, 600, 600, 20)
    rect(75, 75, 20, 540)
    rect(655, 75, 20, 540)
    fill("red")
    stroke("red") 
    circle(80, 75, 75)
    circle(655, 75, 75)
    circle(80, 600, 75)
    circle(655, 600, 75)
}
