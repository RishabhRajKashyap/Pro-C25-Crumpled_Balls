class paper
{
constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
    }
    this.x=x
    this.y=y
    this.r=r

    this.paper = loadImage("paper.png");
    this.body = Bodies.circle(this.x, this.y, this.r, options)
    World.add(world, this.body)
}

    display(){
        var pos = this.body.position

        push()
        translate(pos.x, pos.y)
        rotate(this.angle)
        imageMode(CENTER)
        image(this.paper, 0, 0, this.r, this.r)
        pop()
    }

}