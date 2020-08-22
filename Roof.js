class Roof extends BaseClass{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB,body2,
        pointB:{X:this.offsetX, Y:this.offsetY}
        }
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }
}