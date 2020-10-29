
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var ground;
 
  var plinko = [];
  var particles = [];



  var boy,boyimg;

 
var thunder1,thunder2,thunder3,thunder4;

var thunders;


 
function preload()
{
   
  boyimg = loadImage("walking_1.png","walking_2.png","walking_3.png",
"walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png",)

 thunder1 = loadImage("1.png") 
 thunder2 = loadImage("2.png") 
 thunder3 = loadImage("3.png") 
 thunder4 = loadImage("4.png") 




}

function setup() {
   
    
	createCanvas(600, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  boy = createSprite(300,500,50,50)
   
	ground = new Ground(600,height,1200,20);
    



 
 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  
 boy.scale = 0.5;
 boy.addImage(boyimg)

  

  

  ground.display();





   if(frameCount%20===0){
   
    particles.push(new Particle(random(width/2-30,width/2+30),50,50))



   }
    
   for (var j = 0; j < particles.length; j++) {
      particles[j].display();

   }
   
   if (frameCount % 60 === 0) {
    thunders = createSprite(random(100, 500), 0, 100, 100);
    var rand = Math.round(random(1,4));
    thunders.scale = 0.5;
   switch(rand){
    case 1: thunders.addImage("thunder",thunder1);
    break;
    case 2: thunders.addImage("thunder", thunder2);
    break;
    case 3: thunders.addImage("thunder", thunder3);
    break;
    case 4: thunders.addImage("thunder", thunder4);
    break;
    
   }

   }










  drawSprites();

 }





