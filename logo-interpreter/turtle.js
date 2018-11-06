const commands = {
  "fd": function (amt) {
    turtle.forward(amt);
  },
  "bd": function (amt) {
    turtle.forward(-amt);
  },
  "rt": function(angle) {
    turtle.right(angle);
  },
  "lt": function(angle) {
    turtle.right(-angle);
  },
  "pd": function() {
    turtle.pen = true;
  }, 
  "pu": function() {
    turtle.pen = false;
  }
}

class Turtle {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.dir = angle;
  }

  reset() {
    translate(x, y);
    rotate(this.dir);
    this.pen = true;
  }

  forward(amt) {
    amt = parseInt(amt);
    if(this.pen) {
      stroke(255);
      strokeWeight(2);
      console.log(amt);
      line(0, 0, amt, 0);
    }
    translate(amt, 0);
  }

  right(angle) {
    rotate(angle);
  }
}