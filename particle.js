class Particle{
 constructor(x,y){
     var options = {
         isStatic : false
     }
     this.color = color(random(0,255),random(0,255),random(0,255));
     this.body = Bodies.circle(x,y,10,options);
     World.add(world,this.body);
 }
 display(){
     push();
     fill(this.color);
     ellipseMode(RADIUS);
     circle(this.body.position.x,this.body.position.y,10);
     pop();
 }
}