class Stone{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
            'restitution': 0,
            'friction': 1,
            'density': 1.2
        
        }
        this.body = Bodies.circle(x,y,20,options);
        this.width=20;
        this.height=20;
        World.add(world, this.body);
        this.image = loadImage("stone.png");
        
    }
    display(){
        image(this.image,50,100);
        
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        //(RADIUS);
        //fill("blue");
        //ellipse(0,0,this.width,this.height);
        pop();
    }

}