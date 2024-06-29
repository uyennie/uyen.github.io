class Ground {
    constructor(x, y, w, h) {
      this.groundDiv = document.getElementById("ground");
      this.options = {
        isStatic: true,
        restitution: 1,
        friction: 0
      }
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
  
  
      this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, this.options);
      World.add(world, this.body)
  
  
    }
  
    display(){
      let pos = this.body.position;
      let angle = this.body.angle;
  
      // change the div origin from center to upper left corner like matter
      this.groundDiv.style.left = pos.x - this.w / 2;
      this.groundDiv.style.top = pos.y - this.h / 2;
      this.groundDiv.style.width = this.w;
      this.groundDiv.style.height = this.h;
    }
  
  }
  