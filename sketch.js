

function setup() {
        createCanvas(innerWidth, outerHeight);
        angleMode(DEGREES);
      }


function draw() {
    background(0);
    translate(200, 200);
    rotate(-90);

    let hr = hour();
    let mn = minute();
    let sc = second();

    strokeWeight(8);
    stroke(255,100,150);
    noFill();

    let secAngle = map(sc, 0, 60, 0 , 360);
    arc(0, 0, 300, 300, 0, secAngle);

    stroke(150,100,255);
    let minAngle = map(mn, 0, 60, 0 , 360);
    arc(0, 0, 280, 280, 0, minAngle);
        
    stroke(150,255,100);
     let hrAngle = map(hr % 12, 0, 12, -90 , 360);
     arc(0, 0, 260, 260, 0, hrAngle);

     
    push();
    rotate(secAngle);
    stroke(255);
    line(0,0,100,0);
    pop();


    push();
    rotate(minAngle);
    stroke(255);
    line(0,0,75,0);
    pop();

    
    push();
    rotate(hrAngle);
    stroke(255);
    line(0,0,50,0);
    pop();

        }