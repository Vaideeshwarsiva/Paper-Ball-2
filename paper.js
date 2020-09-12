class Paper {
    constructor(x, y, radius) {
        var options = {
            isStatic: true,
            restitution: 0.3
        }
        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.image = loadImage("paper.png")
        World.add(world, this.body);
    }
    display() {
        fill("DeepPink");
        circle(this.x, this.y, this.radius);
    }
}