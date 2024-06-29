class Particle {
    constructor(x, y, w, h, particleStatic, id, innerHTML) {
      // no slide or bounce friction = 1, restitution = 0
      let options = {
        friction: 0.8,
        restitution: 0,
        isStatic: particleStatic
      }
      // this.w = 20;
      // this.h = 20;
  
      this.screenLimit = 1000;
  
  
  
      // Creating a new DIV, adding "box" CSS class,
      // this.newElement = document.createElement(`span`);
      this.newElement = document.createElement(`div`);
  
      // this.newElement.setAttribute("contenteditable", true);
      // this.newElement = document.createElement(`input`);
  
      this.newElement.classList.add("box");
      this.newElement.innerHTML = innerHTML;
  
      // this.newElement.value= innerHTML;
  
      // this.newElement.style.width = w;
      // this.newElement.style.height = h;
      this.newElement.setAttribute("parentId", id);
      document.getElementById("wrapper").append(this.newElement);
      // console.log(this.newElement.innerHTML = innerHTML)
      // console.log(this.newElement.getBoundingClientRect())
  
      this.body = Bodies.rectangle(x, y, this.newElement.getBoundingClientRect().width, this.newElement.getBoundingClientRect().height, options);
      World.add(world, this.body)
  
      // to be able to click the div and have something happen (like a link)
      this.newElement.addEventListener("click", clickHandler)
      this.width = this.newElement.getBoundingClientRect().width;
      this.height = this.newElement.getBoundingClientRect().height;
      function clickHandler() {
        // console.log(this);
      }
    }
    // display the div at the same position and angle as the body
    display() {
      let pos = this.body.position;
      let angle = this.body.angle;
      // assigning div style x,y,angle to position and angle of the particle body
      // changing the divs origin point to be top left instead of center to concur with matter.js body origin
      this.newElement.style.left = pos.x - this.width/2;
      this.newElement.style.top = pos.y - this.height/2;
      // rotate the element by the same angle
      this.newElement.style.transform = `rotate(${angle}rad)`
      // console.log(angle)
    }
  
    isOffScreen() {
      let pos = this.body.position;
      return (pos.y > this.screenLimit);
    };
  
    // remove droplets from the engine
    removeFromWorld() {
      World.remove(world, this.body);
      this.newElement.remove();
    }
  }
  // export default Particle;
  