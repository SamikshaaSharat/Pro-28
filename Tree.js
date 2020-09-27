class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.tree = loadImage("tree.png");
        World.add(world, this.body);
    }
     

     display(){
         image(this.tree,500,800);
         var pos= this.body.position;
         rectMode(CENTER);
         //fill("green");
         rect(pos.x,pos.y,this.width,this.height);


     }

    }