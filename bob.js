class bob{
    constructor (x,y,r){
   var options = {
    isStatic:false,
    restitution:0.3,
    density:1.2,
    friction:0.5
   }
   this.x=x
   this.y=y
   this.r=r
   this.Body = Bodies.circle(this.x,this.y,this.r/2,options)
   World.add(world, this.Body);  

}
Display()
{
    var bobpos = this.Body.position;
    push()
    translate(bobpos.x, bobpos.y);
    rectMode(CENTER)
    strokeWeight(3);
    fill("red")
    pop()
}
};