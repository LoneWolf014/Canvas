
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color

    this.draw = function() {
        c.beginPath();
        c.arc(x, y, radius, 0, Math.PI * 2, false);
        c.strokeStyle = this.color;
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
        if (x+radius > innerWidth || x - radius < 0) {
            dx = -dx;
        }
        if (y+radius > innerHeight || y - radius < 0) {
            dy = -dy;
        }
    
        x += dx;
        y += dy;

        this.draw();
    }
}


var CircleArray = [];

for(var i = 0; i<100; i++){
    var radius = 50;
    var x = Math.random() * (innerWidth - radius * 2) + radius ;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 10;
    var dy = (Math.random() - 0.5) * 10;
    var color = ("rgba("+Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() + ")");
    CircleArray.push(new Circle(x, y, dx, dy, radius, color));
}

function animate(){
    // Clears window everytime it refresh / the loop starts
    c.clearRect(0, 0, innerWidth, innerHeight);

    requestAnimationFrame(animate); //tells the browser that it wants to perform animation
    console.log("animate");

    for (let i = 0; i < CircleArray.length; i++) {
        CircleArray[i].update();
    }
}

animate();