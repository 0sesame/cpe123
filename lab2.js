var manX = 270
var manY = 590
var manScale = 1
var manDX = 1

var ryan_rightside = 530


function setup()
{
	
	createCanvas(530, 800);
	noStroke();

}






function draw()
{

	background(255);

	var mountainHeight = height - 7*height/16
	var mountainWidth = ryan_rightside - 50
	var mountainAngle = Math.atan(mountainHeight/mountainWidth)+.065



	//THE BOULDER HIMSELF (DWAYNE, THE BOULDER, JOHNSON)
	push();
		translate(manX, manY);
		fill(222, 189, 86)
		ellipse(35, -240, 315, 315)
	pop();



//mountain

	fill(94, 160, 212, 120);
	triangle(50, height, ryan_rightside, height, ryan_rightside, 7*height/16);

//foot ledge
	push();
		translate(50, height);
		rotate(mountainAngle);
		smooth();
		beginShape();
			vertex(0,0);
			vertex(-15, -110);
			vertex(0, -115);
		endShape();
		noSmooth();
	pop();

//ledge before boulder
	push();
		translate(277.25, 587);
		rotate(mountainAngle);

		beginShape();
			vertex(0,0)
			vertex(-20, -50)
			vertex(-17, -68)
			vertex(-20, -90)
		
			vertex(0, -180)
		endShape();
	pop();

//last ledge
	push();
		translate(438.25, 436);
		rotate(mountainAngle);

		beginShape();
			vertex(0,0);
			vertex(-8, -90);
			vertex(-4, -95);
			vertex(0, -105);
		endShape();

	pop();


//MYTH
	textSize(96);
	textStyle(BOLD)
	textFont("Helvetica")
	text("MYTH", 125, 150 )

//MAN

	push();
		translate(manX, manY);
		scale(manScale);
		draw_man(mountainAngle)
	pop();

	manX += manDX
	manY -= manDX*(mountainHeight/mountainWidth)


//mouse x and y follower
//	textSize(12)
//	textStyle(NORMAL)
//	fill(0)
//	rect(mouseX +1, mouseY - 20, 80, 20)
//	fill(255)
//	text('(' + mouseX + ", " + mouseY + ")", mouseX + 1, mouseY -6)


}


function draw_man(mountainAngle)
{
	//MAN
	fill(237, 124, 140)
	push();

		//torso
		quad(-130, 0, -135, -100, -90, -80, -100, 10)
		ellipse(-95, -70, 22, 24)
		ellipse(-125, -8, 16, 20)

		//right leg
		push();
			rotate(mountainAngle + .3)
			ellipse(-43, 73, 30, 60)
		pop();
		ellipse(-60, 16, 20, 68)

		//right foot
		push();
			rotate(mountainAngle)
			beginShape();
				vertex(-7, 79)
				bezierVertex(0, 84, 2, 84, 4, 81)
				bezierVertex(3, 63, 2, 58, 3, 57)
				bezierVertex(-1, 45, -3, 45, -6, 50)
			endShape()
		pop();

		//right arm
		ellipse(-80, -70, 27, 20)
		beginShape();
			vertex(-80 ,-76);
			vertex(-68, -65);
			vertex(-45, -100);
			vertex(-60, -100);
		endShape();

		//right hand
		beginShape();
			vertex(-60, -100);
			bezierVertex(-62, -107, -62, -114, -58, -120);
			bezierVertex(-56, -122, -50, -122, -43, -115);
			bezierVertex(-46, -110, -46, -105, -45, -100);
		endShape();

		//this dudes hhheaaadd
		beginShape();
			vertex(-120, -93);
			vertex(-115, -110);
			bezierVertex(-112, -115, -104, -115,-95, -110);
			bezierVertex(-90, -100, -100, -90, -93, -87);
			vertex(-100, -80);
		endShape();

		//NOW LET'S HEAR IT FOR THE LEFT ARM WOOOO
		beginShape();
			vertex(-134, -95);
			bezierVertex(-138, -110, -136, -120, -133, -125);
			vertex(-115, -165);
			vertex(-105, -160);
			bezierVertex(-103, -125, -120, -115, -123, -95);
		endShape();

		//left hand
		beginShape();
			vertex(-115, -164); 
			bezierVertex(-122, -170, -124, -175 ,-117, -190)
			bezierVertex(-113, -192, -109, -192, -105, -190);
			bezierVertex(-108, -181, -108, -177,-105, -173);
			bezierVertex(-94, -181,-92, -179,-102, -169)
			vertex(-105, -159);
		endShape();

		//left leg up in this myth, send that boulder sisyphus
		beginShape();
			vertex(-130,0);
			vertex(-100,4);
			bezierVertex(-105, 25, -105, 35, -120, 55);
			vertex(-145, 55);
		endShape();

		beginShape();
			vertex(-165, 95);
			bezierVertex(-160, 75, -150, 60, -145, 54);
			vertex(-120, 54);
			vertex(-150, 95);
		endShape();
		quad(-165, 94, -150, 94, -160, 125, -170, 120);

//left foot...last thing...so close...
		beginShape();
			vertex(-170, 119);
			bezierVertex(-165, 140, -160, 135, -150, 126)
			//vertex(-165, 135);
			vertex(-135, 125);
			vertex(-135, 120);
			bezierVertex(-140, 115, -145, 115, -165, 120)
		endShape();

	pop();

}
