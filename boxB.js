class BoxB{
    constructor(x, y, width, height) {
        var options = {
          restitution:1.0,
            friction:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygonIMG.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        /*fill(0,255,193)
        rectMode(CENTER)
        rect(0,0,this.width/2,this.height/2)
        */
      /* this.body.position.x = mouseX;
    this.body.position.y = mouseY;*/
       imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop();
      }
}