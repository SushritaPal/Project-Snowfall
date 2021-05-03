class Snow{
    constructor(x,y){
        var options={
            restitution:0.01,
            friction:0.3,
            density:0.1
        }
        this.body=Bodies.circle(x,y,10,options);
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);
        this.radius = 10;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
    }
    update(){
        if(this.body.position.y>400){
            Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,400)});
        }
    }
}