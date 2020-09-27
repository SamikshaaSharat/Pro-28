class Boy{
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("boy.png");
      World.add(world, this.body);
    }
    display(){
        Image(this.image,200,600);
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };

    