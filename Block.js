class Block{
  constructor(x, y, width, height) {
      var options = {
               
      }
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage ("block.png");
      this.Visibility = 255 
      World.add(world, this.body);
      
    }
    display(){
      
      if (this.body.speed < 2){
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0,0,this.width, this.height); 
        //image (this.image, this.body.position.x, this.body.position.y, 0,0);  
        pop()
      } else {
        World.remove (world,this.body);
        push() 
        this.Visibility = this.Visibility - 5; 
        tint(255, this.Visibility); 
        image (this.image, this.body.position.x, this.body.position.y, 0,0); 
        pop() 
      }
     
    }
}




