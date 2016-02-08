
var img;

// Preload function is used to load data and nothing else
function preload() {
  img = loadImage("img/hedge.jpg")
}

// Initial setup of sketch
function setup() {

  createCanvas(img.width, img.height);
  background('#fff');

  textSize(32);
  fill('white');

  image(img, 0, 0);

  filter(GRAY);
  filter(THRESHOLD);

  var d = pixelDensity();
  var halfImage = 4 * (width * d) * (height / 2 * d);

  loadPixels();

  var x;
  var y;
  var count = 0;

  var points = []

  for(y = 0; y < height; y++) {
    for(x = 0; x < width; x++) {
      // count += 1;
      idx = 4 * ((y * d ) * width * d + (x * d ));

      if(pixels[idx] < 40) {

        points.push([x,y])

        pixels[idx] = 100
        pixels[idx + 1] = 200
        pixels[idx + 2] = 200
        count += 1;
      }

    }
  }

  console.log(points.length)

  // points.forEach(function(point1) {
    // points.forEach(function(point2) {
    //
    // })
  // })


  // for (var i = 0; i < halfImage; i++) {
  //   pixels[i+halfImage] = pixels[i];
  // }

  updatePixels();


}

// // Draw function
// function draw() {
//   clear();
//   background('#ddd');
//
// }

// resize canvas if window resizes.
function windowResized() {
  // resizeCanvas(windowWidth, windowHeight);
}
