class Zombie{
    constructor(x,y,width,height){
this.body = Bodies.rectangle(x,y,width,height)
this.width = width;
this.height = height;
this.image = loadImage("Zombieimage.png")
World.add(world, this.body); 
}

display(){
var pos =this.body.position;
rectMode(CENTER);
fill("red")
image(this.image,pos.x,pos.y,this.width,this.height)
}

}