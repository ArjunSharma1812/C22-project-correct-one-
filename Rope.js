class Rope {
    constructor (body1, body2, offsetX, offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            pointA:{x:this.offsetX, y:this.offsetY},
            bodyB: body2,
            pointB:{x: 0, y: 0},
        }
        
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(3);
        stroke(0);
        fill(0);

        var Anchor1X = pointA.x + this.offsetX;
        var Anchor1Y = pointA.y + this.offsetY;
        var Anchor2X = pointB.x 
        var Anchor2Y = pointB.y
        line(Anchor1X, Anchor1Y,Anchor2X, Anchor2Y);
    }

}