class Block{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 0.7,
          friction : 0.6,
          isStatic : false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
            console.log(this.body.speed);
            pop();
    
            if (this.body.speed<3)
            {
                super.display();
            }
            else
            {
               World.remove(world, this.body);
            }
           push()
           this.visibility = this.visibility - 5
           tint(255, this.visibility)
           image(this.image, this.body.position.x, this.body.position.y , 50, 50)
           pop();
    
        }
        
      }
}
