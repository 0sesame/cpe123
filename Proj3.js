const LIGHT_R = 234;
const LIGHT_G = 237;
const LIGHT_B = 255;

var pump_theta = [];
var num_pumpkins = 20;
var circ_counter = 0;
var max_theta = 0;
var max_theta2 = 0;
var theta = 0;
var spiralMaxTheta = 0;
var stemMaxTheta = 0;

function setup(){

	createCanvas(800, 900);
	fill(255);
	noStroke();
	rect(15,0,780,840);
	for(var theta =0; theta < 2*PI; theta+=2*PI/num_pumpkins){
		pump_theta.push(theta);
	}
}

function draw(){
	var max_theta =2*PI;

	drawEllipseBackground();
	incrementPumps();
	drawPrettyThingOnTopOfCirlce();
	//draw that lovely little nest of lines there is to be drawn
	fill(0);
	drawLineNest(width/2, height/2 +50, (width - 240)/2, max_theta,2);
	if(max_theta < 2*PI)
		max_theta += 2*PI/50;

	// draw that ellipses that are in front of the squigly bits
	fill(46, 59, 136);
	ellipse(width/2, height/2 +55, width-275)
	
	var inlaidCircle_loc = []
	var inlaidCircle_theta =[]
	for(theta = 0; theta<2*PI; theta += 2*PI/45){
		var icx = width/2 + ((width-288)/2)*cos(theta);
		var icy = height/2+58 + ((width-288)/2)*sin(theta);
		inlaidCircle_loc.push(createVector(icx,icy));
		inlaidCircle_theta.push(theta)
	}
	
	for(var i = 0; i < circ_counter; i++){
		s = 3.25 - distance(width/2, 300, inlaidCircle_loc[i].x, inlaidCircle_loc[i].y)/180;
		if(s >1)
			drawInlaidCircle(inlaidCircle_loc[i], inlaidCircle_theta[i], s)
	}
	if(circ_counter < inlaidCircle_loc.length){
		circ_counter++;
	}

	//inner two circles
	fill(255);
	noStroke();
	ellipse(width/2, height/2 + 67, width - 290);
	stroke(0);
	fill(255, 168, 0);
	ellipse(width/2, height/2+70, width-300);
	push();
		translate(515,140);
		rotate(PI/8);
		for(var eta =-PI/2 -.5 ; eta < 2*PI; eta += 2*PI/200){
			var ax = 0 + 40*cos(eta/2);
			var ay = 0 + 20*sin(eta);
			noStroke();
			fill(0);
			ellipse(ax,ay, 7);
			stroke(0);
		}
		for(var eta=-PI/2 -.5; eta < 2*PI; eta += 2*PI/200){
			ax = 0 + 40*cos(eta/2);
			ay = 0 + 20*sin(eta);
			noStroke();
			fill(255);
			ellipse(ax,ay, 6);
			stroke(0);
		}
	pop();
	push();
		translate(495,130);
		rotate(-PI/16);
		for(var eta =-PI/2 - .5; eta < 2*PI; eta += 2*PI/200){
			var ax = 0 + 30*cos(eta/2);
			var ay = 0 + 30*sin(eta);
			noStroke();
			fill(0);
			ellipse(ax,ay, 7);
			stroke(0);
		}
		for(var eta=-PI/2 -.5; eta < 2*PI; eta += 2*PI/200){
			ax = 0 + 30*cos(eta/2);
			ay = 0 + 30*sin(eta);
			noStroke();
			fill(255);
			ellipse(ax,ay, 6);
			stroke(0);
		}
	pop();
	push();
		translate(285,140);
		rotate(-PI/8);
		for(var eta =-PI/2 -.5 ; eta < 2*PI; eta += 2*PI/200){
			var ax = 0 - 40*cos(eta/2);
			var ay = 0 + 20*sin(eta);
			noStroke();
			fill(0);
			ellipse(ax,ay, 7);
			stroke(0);
		}
		for(var eta=-PI/2 -.5; eta < 2*PI; eta += 2*PI/200){
			ax = 0 - 40*cos(eta/2);
			ay = 0 + 20*sin(eta);
			noStroke();
			fill(255);
			ellipse(ax,ay, 6);
			stroke(0);
		}
	pop();
	push();
		translate(305,130);
		rotate(PI/16);
		for(var eta =-PI/2 - .5; eta < 2*PI; eta += 2*PI/200){
			var ax = 0 - 30*cos(eta/2);
			var ay = 0 + 30*sin(eta);
			noStroke();
			fill(0);
			ellipse(ax,ay, 7);
			stroke(0);
		}
		for(var eta=-PI/2 -.5; eta < 2*PI; eta += 2*PI/200){
			ax = 0 - 30*cos(eta/2);
			ay = 0 + 30*sin(eta);
			noStroke();
			fill(255);
			ellipse(ax,ay, 6);
			stroke(0);
		}
	pop();
	branchSpiral(380,790);
	crow(35,135);
}

function branchSpiral(X,Y){
	push();
		noStroke();
		
		translate(X,Y);
		var x,y,r,thickness;
		r = 1;
		thickness = 1;
		fill(0);

		for ( var theta = 0; theta < spiralMaxTheta; theta += 3.82*PI/175){
			x =  pow(r,2) * cos(theta);
			y =  pow(r,2) * sin(theta);
			ellipse(x,y,thickness+2);
			r += .055;
			thickness += .11;
		}
		fill(255);
		r = 1;
		thickness = 1;
		for ( var theta = 0; theta < spiralMaxTheta; theta += 3.82*PI/175){
			x =  pow(r,2) * cos(theta);
			y =  pow(r,2) * sin(theta);
			ellipse(x,y,thickness);
			r += .055;
			thickness += .11;
		}

		if (spiralMaxTheta < 3.82*PI)
			spiralMaxTheta += 3.82*PI/30;
	pop();
}

function crow(x,y)
{
    push();
        translate(x,y);
        scale(.9);
        foot(396,584);
        bust(420,175);
        head(420,175);
        eye(435,211);
        beak(460,223);
    pop();
}

function foot(x,y)
{
    push();
        fill(40,43,80);
        translate(x,y);
        scale(1.2);
        beginShape();//276,539
            curveVertex(0,-10);
            curveVertex(0,-10);
            curveVertex(-13,22);
            curveVertex(-31,29);
            curveVertex(-45,31);
            curveVertex(-54,45);
            curveVertex(-43,36);
            curveVertex(-8,31);
            curveVertex(26,36);
            curveVertex(24,30);
            curveVertex(2,22);
            curveVertex(8,-5);
            curveVertex(8,-5);
        endShape();
    pop();
}

function bust(X,Y)
{
    push();
        fill(130,125,165);
        translate(X,Y);
        scale(1.2);

        tailFeathers(-103,151)
        midFeathers(-48,199)

        beginShape();
            curveVertex(0,0);
            curveVertex(0,0);
            curveVertex(-18,-4);
            curveVertex(-17,3);
            curveVertex(-36,3);
            curveVertex(-30,6);
            curveVertex(-42,8);
            curveVertex(-37,15);
            curveVertex(-52,17);
            curveVertex(-53,23);
            curveVertex(-61,29);
            curveVertex(-69,37);
            curveVertex(-63,42);
            curveVertex(-74,50);
            curveVertex(-84,85);
            curveVertex(-98,97);
            curveVertex(-107,120);
            curveVertex(-102,147);
            curveVertex(-88,173);
            curveVertex(-71,186);
            curveVertex(-50,193);
            curveVertex(-36,200);
            curveVertex(-7,208);
            curveVertex(18,202);
            curveVertex(30,193);
            curveVertex(41,199);
            curveVertex(51,197);
            curveVertex(61,213);
            curveVertex(69,227);
            curveVertex(79,227);
            curveVertex(90,233);
            curveVertex(84,216);
            curveVertex(82,204);
            curveVertex(88,199);
            curveVertex(81,190);
            curveVertex(79,172);
            curveVertex(70,162);
            curveVertex(71,151);
            curveVertex(64,142);
            curveVertex(62,132);
            curveVertex(46,114);
            curveVertex(26,91);
            curveVertex(21,79);
            curveVertex(25,68);
            curveVertex(25,68);
         endShape();
         // g r a d i e n t 
        noStroke();
         for (var y = 0; y < 233; y +=2){
            for (var x = -100; x < 90 ; x +=2){
                d = distance(-5,140,x,y);
                // i m p l i c i t   l i n e s
                var headCir = imp_circ(-18,55,x,y,40,1.1,1);
                var neckL = imp_line(x,y,-73,50,-82,85); 
                var leftBustWing = imp_line(x,y,-84,85,30,190);
                var rightBottomBust = imp_line(x,y,30,190,82,204);
                var rightSide = imp_line(x,y,82,204,58,128);
                var rightSideUpAngle = imp_line(x,y,56,128,25,91);
                var topNeck = imp_line(x,y,-74,50,26,80);

                // b o o l e a n
                var inBust = neckL < 0 && leftBustWing < 0 && rightBottomBust < 0 && rightSide < 0 && rightSideUpAngle < 0 && topNeck > 0; 

                if ( inBust || headCir < 0){
                    fill(LIGHT_R - pow(d/10.2,2),LIGHT_G - pow(d/10.1,2), LIGHT_B - pow(d/12,2));
                    ellipse(x,y,4);
                }
            }
         }
        feathers();
	pop();
}


function head(x,y)
{
    push();
        translate(x,y);
        scale(1.2);
        fill(25,28,69);
        beginShape();
            curveVertex(34,34);
            curveVertex(34,34);
            curveVertex(25,15);
            curveVertex(13,5);
            curveVertex(0,0);
            curveVertex(0,6);
            curveVertex(-13,1);
            curveVertex(-4,10);
            curveVertex(-11,9);
            curveVertex(-11,14);
            curveVertex(-31,12);
            curveVertex(-28,17);
            curveVertex(-38,19);
            curveVertex(-30,22);
            curveVertex(-48,28);
            curveVertex(-39,30);
            curveVertex(-53,39);
            curveVertex(-43,41);
            curveVertex(-49,47);
            curveVertex(-37,46);
            curveVertex(-24,48);
            curveVertex(-32,56);
            curveVertex(-17,52);
            curveVertex(-20,62);
            curveVertex(-12,59);
            curveVertex(2,71);
            curveVertex(12,66);
            curveVertex(27,70);
            curveVertex(27,70);
        endShape();

        strokeWeight(3);
        stroke(LIGHT_R,LIGHT_G,LIGHT_B,100);
        bezier(10,7,15,10,19,12,23,16);

        noStroke();
        rotate(-PI/13);
        translate(-2,31);
        for (var y = -50; y < 50; y +=2){
            for ( var x = -50; x < 65; x += 2)
            {
                d = distance(x,y,5,-1);
                var inHeadCirc = imp_circ(x,y,0,0,11,1.5,1);

                
                if ( inHeadCirc < 0){

                    fill(115-d*4.45, 110-d*4.25, 160-d*4.25);
                    ellipse(x,y,4);
                }
            }
        }
        rotate(PI/6);
        fill(LIGHT_R,LIGHT_G,LIGHT_B,100);
        ellipse(-3,-3,3,5);    
    pop();
}

function eye(x,y)
{
    fill(0);
    ellipse(x,y,12);
    fill(255);
    ellipse(x-2,y,4);
}

function beak(x,y)
{
    push();
        translate(x,y);
        fill(94,110,165);
        beginShape();
            curveVertex(-4,-12);
            curveVertex(-4,-12);
            curveVertex(21,-9);
            curveVertex(50,3);
            curveVertex(70,23);
            curveVertex(63,20);
            curveVertex(27,15.5);
            vertex(4,16);
            vertex(-7,7);
            curveVertex(0,0);
            curveVertex(0,0);
        endShape(CLOSE);
        bezier(0,0,20,1,45,8,65,19);
    pop();
}

function midFeathers(x,y)
{
    push();
        translate(x,y);
        beginShape();
            curveVertex(0,0);
            curveVertex(0,0);
            curveVertex(34,46);
            curveVertex(56,65);
            curveVertex(73,54);
            curveVertex(90,55);
            curveVertex(110,63);
            curveVertex(133,65);
            curveVertex(153,71);
            curveVertex(148,56);
            curveVertex(134,32);
            curveVertex(99,-26);
            curveVertex(99,-26);
        endShape();
    pop();
}

function tailFeathers(x,y)
{
    push();
        translate(x,y);
        fill(44,43,89);
        beginShape();
            curveVertex(0,0);
            curveVertex(0,0);
            curveVertex(-9,52);
            curveVertex(2,77);
            curveVertex(4,108);
            curveVertex(8,102);
            curveVertex(12,128);
            curveVertex(18,114);
            curveVertex(20,136);
            curveVertex(35,148);
            curveVertex(32,120);
            curveVertex(42,141);
            curveVertex(48,145);
            curveVertex(57,158);
            curveVertex(57,121);
            curveVertex(80,175);
            curveVertex(169,268);
            curveVertex(181,282);
            curveVertex(197,286);
            curveVertex(217,292);
            curveVertex(217,276);
            curveVertex(209,241);
            curveVertex(231,289);
            curveVertex(218,232);
            curveVertex(234,272);
            curveVertex(203,174);
            curveVertex(226,216);
            curveVertex(214,175);
            curveVertex(197,141);
            curveVertex(212,164);
            curveVertex(198,130);
            curveVertex(210,144);
            curveVertex(191,114);
            curveVertex(191,114);
        endShape();
    pop();
}
//---- f e a t h e r   f u n c t i o n s ----/

function feathers()
{
    stroke(0);
    strokeWeight(1.2);

    fill(96,115,181);
    bezier(-83,90,-66,90,-58,100,-45,126);

    featherCurve(-90,150,40);
    featherCurve(-76,167,25);
    featherCurve(-77,130,70);
    featherCurve(-53,161,44);
    featherCurve(-38,155,57);
    featherCurve(-18,170,42);
    featherCurve(-1,180,30);
    featherCurve(-13,263,130);
    featherCurve(10,267,130);
    featherCurve(20,267,120);
    featherCurve(40,267,110);
    featherCurve(60,267,90);
    featherCurve(78,275,40);

    push();
        translate(-8,208);
        rotate(-PI/8);
        featherCurve(0,0,66);
        featherCurve(30,20,45);
    pop();
    
    var ruffY = 140;
    for (var x = -25; x < 30; x += 16){
        strokeWeight(1.5);
        bustRuffle(x,ruffY);
        ruffY += 14;
    }

    push();
        rotate(PI/12);
        for (var y = 0; y < 20; y += 6 ){
            for (var x = (y%29)*2; x < 80; x += 20){
                miniCircFeathers(-35 + x, 75 + y); 
            }
        }
    pop();
}

function bustRuffle(x,y)
{
    push();
        translate(x,y);
        bezier(0,0,5,7,12,14,20,12);
    pop();
}

function featherCurve(x,y,len)
{
    stroke(0);
    noFill();
    bezier(x-2, y, x + len/10, y + (2/3)*len, x+ len/3, y + len, x + len/2, y + (7/8)*len);
}

function miniCircFeathers(x,y)
{
    fill(255,170);
    arc(x,y,6,6,0,PI);
}
// ---- c i r c l e   f u n c t i o n s ----//

function blackYinYangShape()
{
	fill(0);
	beginShape();
		vertex(-10, 55);
		bezierVertex(10, 30, 10, 20, 5,0);
		bezierVertex(20, -20, 45, -15, 55, 7);
		bezierVertex(50, 15, 55, 50, -10,55);
	endShape();
	fill(255);
	ellipse(30, 15,10)
}

function drawPrettyThingOnTopOfCirlce()
{
	push();
		translate(width/2, 120);
		noStroke();
		fill(255);
		ellipse(0, 0, 150); // circle white border
		stroke(0);
		ellipse(0,0, 120); //base circle
		
		blackYinYangShape();
		push();
			rotate(11*PI/8);
			blackYinYangShape();
		pop();
		push();
			rotate(11*PI/16);
			blackYinYangShape();
		pop();
		//  f e a t h e r y   r a y s
		var orange = color(223,86,12);
		var yellow = color(223,186,0);
		fill(76, 89, 176);
		ellipse(0, -70, 9);
		fill(223,86,12);
		ellipse(0, -93, 4, 30);
		push();
			translate(7,-79)
			rotate(PI/5);
			fill(yellow);
			ellipse(0, 0, 3, 10);
		pop();
		push();
			translate(20,-79)
			rotate(PI/3);
			fill(orange);
			ellipse(0, 0, 3, 30);
		pop();
		push();
			translate(13,-69)
			rotate(14*PI/30);
			fill(yellow);
			ellipse(0, 0, 3, 10);
		pop();
		push();
			translate(20,-65)
			rotate(PI/2);
			fill(orange);
			ellipse(0, 0, 3, 30);
		pop();
		push();
			translate(-7,-79)
			rotate(-PI/5);
			fill(yellow);
			ellipse(0, 0, 3, 10);
		pop();
		push();
			translate(-20,-79)
			rotate(-PI/3);
			fill(orange);
			ellipse(0, 0, 3, 30);
		pop();
		push();
			translate(-13,-69)
			rotate(-14*PI/30);
			fill(yellow);
			ellipse(0, 0, 3, 10);
		pop();
		push();
			translate(-20,-65)
			rotate(-PI/2);
			fill(orange);
			ellipse(0, 0, 3, 30);
		pop();
	pop();

}

function incrementPumps()
{ //draw these pumps and increment their place in the circle by PI/600 radians
	var r =(width -150)/2;
	const TOP_PUMPx = width/2;
	const TOP_PUMPy = height/2 + 60 +r*sin(3*PI/2);

	for(var i =0; i < num_pumpkins; i++){
		var pump_loc = createVector(width/2 + r*cos(pump_theta[i]), ((height/2)+35) + r*sin(pump_theta[i]))
		var s = 4 -distance(TOP_PUMPx, TOP_PUMPy, pump_loc.x, pump_loc.y)/150
		if(s > .12)
			drawPumpkin(pump_loc, 2*pump_theta[i]/3, s);
		pump_theta[i] += PI/300
		//reset to 0 at 2PI to make sure the orientation (rot) of the pumpkins stays the same through the loop
		if(pump_theta[i] > 2*PI){
			pump_theta[i] = 0
		}
	}
}

function drawPumpkin(loc, rot, sc)
{
	push();
		fill(244, 151, 3);
		translate(loc.x, loc.y);
		rotate(rot);
		scale(sc);
		pumpStem();
		strokeWeight(.2);
		ellipse(2, 0, 6, 8);
		ellipse(-2, 0, 6, 8);
		ellipse(0,0, 5, 9);
	pop();
}

function pumpStem()
{
	push();
		var x,y,radiusL,raidusR;
		noStroke();
		radiusL = 0;
		radiusR = 4;
		fill(125,162,151);
		for (var theta = 0 ; theta < stemMaxTheta; theta += 2*PI/100){
			x = 7 + radiusL * cos(theta);
			y = radiusL * sin(theta);
			ellipse(x,y,.5);
			radiusL += .03;
		}
		for (var theta = PI ; theta < stemMaxTheta ; theta += 2*PI/100){
			x = 13+radiusR * cos(theta);
			y = -1+radiusR * sin(theta);
			ellipse(x,y,.5);
			radiusR -= .03;
		}
		for (var theta = 0 ; theta < stemMaxTheta ; theta += 2*PI/100){
			x = -8+radiusR * cos(theta);
			y = 0+radiusR * sin(theta);
			ellipse(x,y,.5);
			radiusR -= .03;
		}
		if (stemMaxTheta < 3*PI)
			stemMaxTheta += 3*PI/100;
	pop();
}

function drawInlaidCircle(loc, theta, sc)
{
	push();
		translate(loc.x,loc.y);
		rotate(2*theta/3);
		scale(sc);
		noStroke();
		fill(125, 162, 151);
		ellipse(0,0,10,7);
		fill(113, 124, 191);
		ellipse(0,0,6);
		stroke(0);
	pop();
}

function drawEllipseBackground()
{	//white background ellipse
	fill(255);
	ellipse(width/2, height/2 +25, width-100);
	//next blue ellipse
	fill(76, 89, 176);
	ellipse(width/2, height/2 + 25, width -130);
	//inner white ellipse
	fill(255);
	noStroke();
	ellipse(width/2, height/2 + 45, width -165);
	stroke(0);
	//orange ellipse
	fill(255, 168, 0);
	ellipse(width/2, (height/2) + 50, width -190);
	//white ellipse(behind darker blue ellipse)
	fill(255);
	ellipse(width/2, height/2 + 55, width -260)
}

function drawLineNest(outer_cx, outer_cy, outer_r, max_theta, s)
{
	for(var theta =0; theta < 2*PI; theta += 2*PI/50){
		var cx = outer_cx + outer_r*cos(theta);
		var cy = outer_cy + outer_r*sin(theta);
		for(var t =0; t < max_theta; t += 2*PI/100){
			var x = cx + 30*Math.pow(cos(t),3);
			var y = cy + 30*Math.pow(sin(t),3);
			fill(255);
			push();
				noStroke();
				translate(x,y);
				rotate(2*theta/3);
				scale(s);
				ellipse(0,0, 3);
				stroke(0);
			pop();
		}
	}
}	

//---- m a t h   f u n c t i o n s ----/

function distance(x0, y0, x1, y1)
{
   return sqrt(pow(x0-x1, 2) + pow(y0-y1, 2));
}

function imp_line(x, y, x0, y0, x1, y1)
{
   return (y0-y1)*x + (x1-x0)*y + x0*y1 - x1*y0;
}

function imp_circ(cx,cy,x,y,r,a,b){
    return pow((x-cx)/a,2) + pow((y-cy)/b,2) - pow(r,2);
}
