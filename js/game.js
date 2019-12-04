let player;

function setup()
{
    createCanvas(600, 600);
    frameRate(60);
    player = new Snake(12*15, 120, 14);
}

function keyPressed()
{
    player.move(key);
}

let last = 0;
function draw()
{
    background(0);
    player.draw();
    player.main();
}