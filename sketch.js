var n1,n2;
var b1,b2,b3,b4;

function setup() {
  
  createCanvas(500, 500);
  
  num1 = createInput();
  num1.position(5, 60);
  
  num2 = createInput();
  num2.position(200, 60);
  
  b1 = createButton("Add");
  b1.position(10, 200);
  b1.mousePressed(add);
  
  b2 = createButton("Multiply");
  b2.position(100, 200);
  b2.mousePressed(multiply);
  
  b3 = createButton("Subtraction")
  b3.position(200, 200)
  b3.mousePressed(subtract)

  b4 = createButton("Divide")
  b4.position(340, 200)
  b4.mousePressed(divide)

  textAlign(CENTER);
  textSize(15);
}

function draw() {
  background(200,10,200)
  text("Number 1",70,50)
  text("Number 2",270,50)
  n1 = parseInt(num1.value())
  n2 = parseInt(num2.value())

}

function add()
{
  console.log("The Sum of Two Numbers is: " + n1 + n2)
}
function multiply()
{
  console.log("The Product of Two Numbers is: " + n1 * n2)
}
function subtract()
{
  console.log("The Difference of Two Numbers is: " + n1 - n2)
}
function divide()
{
  console.log("The Result of Dividing Two Numbers is: " + n1 / n2)
}