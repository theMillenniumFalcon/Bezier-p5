let p0, p1

function setup() {
  createCanvas(600, 600)
  p0 = createVector(0, 300)
  p1 = createVector(600, 300)
}

function draw() {
  background(0)
  stroke(255)
  strokeWeight(4)
  // line(p0.x, p0.y, p1.x, p1.y)

  beginShape()
  for (let t = 0; t <= 1; t += 0.1) {
    let x = lerp(p0.x, p1.x,t)
    let y = lerp(p0.y, p1.y,t)
    vertex(x, y)
  }
  endShape()
}
