
var stone1
var catapult1
var ground1,ground2,ground3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);







	engine = Engine.create();
	world = engine.world;

  box1=new Squares(600,470,30,30)
 box2=new Squares(550,470,30,30)
  box3=new Squares(500,470,30,30)
  box4=new Squares(450,470,30,30)
  box5=new Squares(400,470,30,30)
  box6=new Squares(440,420,30,30)
  box7=new Squares(500,420,30,30)
  box8=new Squares(550,420,30,30)
  box9=new Squares(600,420,30,30)
  box10=new Squares(450,380,30,30)
  box11=new Squares(520,380,30,30)
  box12=new Squares(580,380,30,30)
  box13=new Squares(550,340,30,30)
  box14=new Squares(500,340,30,30)
  box15=new Squares(530,300,30,30)
  ground1=new Ground(400,690,900,20)
  ground2=new Ground(500,500,250,20)
  
	stone1=new Stone(50,550,30)
	catapult1=new Catapult(stone1.body,{x:150,y:560})
	Engine.run(engine);
  
}


function draw() {
  console.log(stone1.radius)
  rectMode(CENTER);
  background("darkblue");
  
  drawSprites();
 

 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()
 box8.display()
 box9.display()
 box10.display()
 box11.display()
 box12.display()
 box13.display()
 box14.display()
 box15.display()
 stone1.display()
 catapult1.display()
ground1.display()
ground2.display()

 if(isTouching(stone1,box1)){
  Matter.Body.setStatic(box1.body,false)
}
if(isTouching(stone1,box2)){
  Matter.Body.setStatic(box2.body,false)

}
if(isTouching(stone1,box3)){
  Matter.Body.setStatic(box3.body,false)
}
if(isTouching(stone1,box4)){
  Matter.Body.setStatic(box4.body,false)
}
if(isTouching(stone1,box5)){
  Matter.Body.setStatic(box5.body,false)
}
if(isTouching(stone1,box6)){
  Matter.Body.setStatic(box6.body,false)
}
if(isTouching(stone1,box7)){
  Matter.Body.setStatic(box7.body,false)
}
if(isTouching(stone1,box8)){
  Matter.Body.setStatic(box8.body,false)
}
if(isTouching(stone1,box9)){
  Matter.Body.setStatic(box9.body,false)
}
if(isTouching(stone1,box10)){
  Matter.Body.setStatic(box10.body,false)
}
if(isTouching(stone1,box11)){
  Matter.Body.setStatic(box11.body,false)
}
if(isTouching(stone1,box12)){
  Matter.Body.setStatic(box12.body,false)
}
if(isTouching(stone1,box13)){
  Matter.Body.setStatic(box13.body,false)
}
if(isTouching(stone1,box14)){
  Matter.Body.setStatic(box14.body,false)
}
if(isTouching(stone1,box15)){
  Matter.Body.setStatic(box15.body,false)
}
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    catapult1.fly();
}
function keyPressed(){
    if(keyCode=32){
    catapult1.attach(stone1.body)
    }
}



function isTouching(object1,object2){
  var distance=dist(object2.body.position.x,object2.body.position.y,object1.body.position.x,object1.body.position.y)
if(distance<object2.width/2+object1.radius/2){
return true
}else{
  return false
}

}





















