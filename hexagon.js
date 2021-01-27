class Hexagon {
    constructor(x,y) {
      var options = {
          isStatic: false,
          density: 0.8,
          restitution: 0.1

      }
      this.body = Bodies.circle(x,y,20,options);
      World.add(world, this.body);
      this.image = loadImage('polygon.png');
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      rotate(angle);
      translate(pos.x, pos.y);
      imageMode(CENTER);
      scale(0.1);
      image(this.image, 0, 0)
      pop();
    }
  };