
// Real time JS Clock

let circleRad;
let today;

function setup() {
  createCanvas(1000, 1000);
  circleRad =  width*1/3;
  print(circleRad);
  //print(handLen);

}

function draw() {
  background(220);
  
  
  // draw the second hand
  drawClock();
}

function drawClock() {
  today = new Date();
  // Draw the circle
  stroke(0, 0, 0);
  strokeWeight(2);
  fill(255,255,255);
  circle(width/2, height/2, circleRad*2);
  
  // Draw 60 hour ticks
  stroke(0, 0, 0);
  strokeWeight(2);
  drawTicks(60);
  
  // Draw numbers
  drawNumbers([12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);


  // Draw the hour hand
  strokeWeight(10);
  let hour = today.getHours();
  if (hour > 12) { hour = hour - 12;}
  print(hour);
  drawHand(hour, 12, circleRad*1/2);
  
  // Draw the minute hand
  strokeWeight(4);
  drawHand(today.getMinutes(),60, circleRad*2/3);
  
  // Draw the seconds hand
  stroke(255, 0, 0);
  strokeWeight(2);
  drawHand(today.getSeconds(), 60, circleRad*4/5);
  
  // Draw the pin in the center
  fill(0,0,0);
  noStroke();
  circle(width/2, height/2, 15);
  

}

function drawHand(timeStep, outOf, handLen)
{
  let y = -cos(TWO_PI/(outOf)*timeStep);
  let x = sin(TWO_PI/(outOf)*timeStep);
  line(width/2, height/2, width/2 + (x)*handLen, height/2 +y*handLen);
  
}

function drawTicks(numTicks)
{
  for (let i = 0; i < numTicks; i++)
  {
      drawTick(i*TWO_PI/numTicks, 8);
  }
}

function drawNumbers(listOfNums)
{
  let i = 0;
  for (let i = 0; i < listOfNums.length; i ++)
  {
    let num = listOfNums[i];
    
     drawNumber(num, i * TWO_PI/(listOfNums.length), 30) 
  }
}

function drawNumber(number, theta, r)
{
  y = -cos(theta)*(circleRad - r) + width/2;
  x = sin(theta)*(circleRad-r) + height/2;
  fill(0,0,0);
  textSize(circleRad / 12);
  textAlign(CENTER, CENTER);
  text(str(number), x, y);
}

function drawTick(theta, r)
{
  y = cos(theta);
  x = sin(theta);
  
  line(x * circleRad + width/2, y * circleRad + height/2, x * (circleRad - r) + width/2, y * (circleRad - r) + height/2);
  
  
}