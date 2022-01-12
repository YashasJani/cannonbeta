class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_img=loadImage("assets/canon.png")
    this.cannonbase_img=loadImage("assets/cannonBase.png")
  }
  display(){
    push()
    translate(this.x,this.y)
    imageMode(CENTER)
    image(this.cannon_img,0,0,this.width,this.height)
    pop()
    image(this.cannonbase_img,70,20,200,200)
  }
}
