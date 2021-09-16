class Polygon {
    constructor (x,y,height,width){
        var options ={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        this.image = loadImage ("polygon.png"); 
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        push ();
        translate(pos.x, pos.y);
        imageMode(CENTER)
	    image(this.image, 20, 0, this.width+20, this.height+20); 
        pop (); 
    }
}