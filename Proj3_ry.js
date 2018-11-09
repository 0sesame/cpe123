var num_pumpkins = 20;
var pump_theta = [];
var max_theta = 0;
var max_theta2 = 0;
var theta = 0;
var circ_counter = 0;

function setup(){

	createCanvas(800, 900);
	background(255);
	for(var theta =0; theta < 2*PI; theta+=2*PI/num_pumpkins){
		pump_theta.push(theta);
	}
}

function draw(){

	drawEllipseBackground();

	var p_col = color(244, 151, 3);
	//draw vines behind the pumpkins
	drawPumpkinNest(width/2, height/2+34, (width-147)/2, max_theta2,1.5)
	if(max_theta2 < 4*PI)
		max_theta2 += 2*PI/150;

//draw all these pumpkins in a circle
	var r =(width -150)/2
	var max_theta =2*PI;
	const TOP_PUMPx = width/2
	const TOP_PUMPy = height/2 + 60 +r*sin(3*PI/2)
	//draw these pumps and increment their place in the circle by PI/600 radians
	for(var i =0; i < num_pumpkins; i++){
		var pump_loc = createVector(width/2 + r*cos(pump_theta[i]), ((height/2)+35) + r*sin(pump_theta[i]))
		var s = 4 -dist_formula(TOP_PUMPx, TOP_PUMPy, pump_loc.x, pump_loc.y)/150
		if(s > .12)
			drawPumpkin(pump_loc, 2*pump_theta[i]/3, s, p_col);
		pump_theta[i] += PI/600
		//reset to 0 at 2PI to make sure the orientation (rot) of the pumpkins stays the same through the loop
		if(pump_theta[i] > 2*PI){
			pump_theta[i] = 0
		}
	}

//draw pretty thing on top of circle
	push();
		translate(width/2, 120);
		noStroke();
		fill(255);
		ellipse(0, 0, 150);
		stroke(0);
		ellipse(0,0, 120);
		fill(0);
		beginShape();
			vertex(-10, 55);
			bezierVertex(10, 30, 10, 20, 5,0);
			bezierVertex(20, -20, 45, -15, 55, 7);
			bezierVertex(50, 15, 55, 50, -10,55)
		endShape();
		fill(255);
		ellipse(30, 15,10)
		push();
			rotate(11*PI/8);
			fill(0);
			beginShape();
				vertex(-10, 55);
				bezierVertex(10, 30, 10, 20, 5,0);
				bezierVertex(20, -20, 45, -15, 55, 7);
				bezierVertex(50, 15, 55, 50, -10,55)
			endShape();
			fill(255);
			ellipse(30, 15,10)
		pop();
		//black shapes inside
		push();
			rotate(11*PI/16);
			fill(0);
			beginShape();
				vertex(-10, 55);
				bezierVertex(10, 30, 10, 20, 5,0);
				bezierVertex(20, -20, 45, -15, 55, 7);
				bezierVertex(50, 15, 55, 50, -10,55)
			endShape();
			fill(255);
			ellipse(30, 15,10)
		pop();
		//top circle and feathery things
		fill(76, 89, 176);
		ellipse(0, -70, 9);
		fill(223,86,12);
		ellipse(0, -93, 4, 30);
		push();
			translate(7,-79)
			rotate(PI/5);
			fill(223,186,0);
			ellipse(0, 0, 3, 10);
		pop();
		push();
			translate(20,-79)
			rotate(PI/3);
			fill(223,86,12);
			ellipse(0, 0, 3, 30);
		pop();
		push();
			translate(13,-69)
			rotate(14*PI/30);
			fill(223,186,0);
			ellipse(0, 0, 3, 10);
		pop();
		push();
			translate(20,-65)
			rotate(PI/2);
			fill(223,86,12);
			ellipse(0, 0, 3, 30);
		pop();
		push();
			translate(-7,-79)
			rotate(-PI/5);
			fill(223,186,0);
			ellipse(0, 0, 3, 10);
		pop();
		push();
			translate(-20,-79)
			rotate(-PI/3);
			fill(223,86,12);
			ellipse(0, 0, 3, 30);
		pop();
		push();
			translate(-13,-69)
			rotate(-14*PI/30);
			fill(223,186,0);
			ellipse(0, 0, 3, 10);
		pop();
		push();
			translate(-20,-65)
			rotate(-PI/2);
			fill(223,86,12);
			ellipse(0, 0, 3, 30);
		pop();
	pop();

	//draw that lovely little nest of lines there is to be drawn
	fill(0);
	drawLineNest(width/2, height/2 +50, (width - 240)/2, max_theta,2);
	if(max_theta < 2*PI)
		max_theta += 2*PI/50

	// draw that ellipses that are in front of the squigly bits
	fill(46, 59, 136);
	ellipse(width/2, height/2 +55, width-275)
	//for(theta =0; theta < 2*PI; theta += 2*PI/45){

	//}
	var inlaidCircle_loc = []
	var inlaidCircle_theta =[]
	for(theta = 0; theta<2*PI; theta += 2*PI/45){
		var icx = width/2 + ((width-288)/2)*cos(theta);
		var icy = height/2+58 + ((width-288)/2)*sin(theta);
		inlaidCircle_loc.push(createVector(icx,icy));
		inlaidCircle_theta.push(theta)
	}
	
	for(var i = 0; i < circ_counter; i++){
		s = 3.25 - dist_formula(width/2, 300, inlaidCircle_loc[i].x, inlaidCircle_loc[i].y)/180;
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
	/*
	for(var eta =-PI/2 ; eta < 4*PI; eta += 2*PI/200){
		var ax = 520 + 10*cos(eta/2);
		var ay = 120 + 10*sin(eta);
		noStroke();
		fill(0);
		ellipse(ax,ay, 5);
		stroke(0);
	}
	for(var eta=-PI/2; eta < 4*PI; eta += 2*PI/200){
		ax = 520 + 10*cos(eta/2);
		ay = 120 + 10*sin(eta);
		noStroke();
		fill(255);
		ellipse(ax,ay, 4);
		stroke(0);
	}
	*/


}

function drawPumpkin(loc, rot, sc, c){
	push();
		translate(loc.x, loc.y);
		rotate(rot);
		scale(sc);
		fill(c);
		strokeWeight(.2);
		ellipse(2, 0, 6, 8);
		ellipse(-2, 0, 6, 8);
		ellipse(0,0, 5, 9);
	pop();
}

function drawInlaidCircle(loc, theta, sc){
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

function drawEllipseBackground(){
	//white background ellipse
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

function drawLineNest(outer_cx, outer_cy, outer_r, max_theta, s){
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

function drawPumpkinNest(outer_cx, outer_cy, outer_r, max_theta, s){
		for(var theta =0; theta < 2*PI; theta += 2*PI/50){
			var cx = outer_cx + outer_r*cos(theta);
			var cy = outer_cy + outer_r*sin(theta);
				for(var t =0; t < max_theta; t += 2*PI/150){
					var d =dist_formula(width/2, height/2 + 60 +outer_r*sin(3*PI/2), cx, cy)/50
					//var x = cx + (15-d)*cos(t);
					//var y = cy + (15-d)*sin(4*t);
					var x = cx + (15-d)*cos(t/2);
					var y = cy + (15-d)*sin(t);
					if(15-d > 5){
						fill(125,162,151);
						push();
							noStroke();
							translate(x,y);
							scale(s);
							ellipse(0,0, 1.2);
							stroke(0);
						pop();
					}
			}
		}
}	

function dist_formula(x0,y0, x1, y1){
	return sqrt(Math.pow(x1-x0, 2) + Math.pow(y1-y0,2))
}

