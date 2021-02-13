class Bob {
    constructor(x,y,radius) {
      
      var op={
        'restitution':1,
        'friction':1,
        'density':1
        //'isStatic':true
      }
      ellipseMode(RADIUS);
      
      this.body = Bodies.circle(x,y,25,op);
      this.radius=25;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("silver");
      ellipse(pos.x, pos.y, this.radius);
    }
  }