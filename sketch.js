

function setup() {
    var cnv = createCanvas(400 , 400);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
        angleMode(DEGREES);
      }


function draw() {
    background(80);
    translate(200, 200);
    rotate(-90);

    let hr = hour();
    let mn = minute();
    let sc = second();

    strokeWeight(8);
    stroke(255,100,150);
    noFill();
    

    let secAngle = map(sc, 0, 60, 0 , 360);
   // arc(0, 0, 300, 300, 0, secAngle);

    stroke(150,100,255);
    let minAngle = map(mn, 0, 60, 0 , 360);
   // arc(0, 0, 280, 280, 0, minAngle);
        
    stroke(150,255,100);
     let hrAngle = map(hr % 12, 0, 12, -90 , 360);
    // arc(0, 0, 260, 260, 0, hrAngle);

     
    push();
    rotate(secAngle);
    stroke(255,100,150);
    line(0,0,100,0);
    pop();


    push();
    rotate(minAngle);
    stroke(150,100,255);
    line(0,0,75,0);
    pop();

    
    push();
    rotate(hrAngle);
    stroke(150,255,100);
    line(0,0,50,0);
    pop();

        }
