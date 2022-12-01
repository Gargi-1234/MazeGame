// not to be added bracket

gameState = "state of the game"



function preload() {
    waitimg = loadImage("assets/SplashScreen.gif")

    //Maze Images
    a1Img = loadImage("assets/maze/A1.png")
    b1Img = loadImage("assets/maze/B1.png")
    c1Img = loadImage("assets/maze/C1.png")
    d1Img = loadImage("assets/maze/D1.png")
    e1Img = loadImage("assets/maze/E1.png")
    f1Img = loadImage("assets/maze/F1.png")
    g1Img = loadImage("assets/maze/entrance.png")

    lifeBarImage = loadImage("assets/maze/lifeBar.png")
    
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    // Maze Game
    a1sprite = createSprite(width / 2, height / 2)
    a1sprite.addImage(a1Img)
    a1sprite.scale = 1.43
    a1sprite.visible = false

    b1sprite = createSprite(width / 2 + 570, height / 2)
    b1sprite.addImage(b1Img)
    b1sprite.scale = 0.9
    b1sprite.visible = false

    c1sprite = createSprite(width / 2 + 570, height / 2)
    c1sprite.addImage(c1Img)
    c1sprite.scale = 0.9
    c1sprite.visible = false

    d1sprite = createSprite(width / 2 + 570, height / 2)
    d1sprite.addImage(d1Img)
    d1sprite.scale = 0.9
    d1sprite.visible = false

    e1sprite = createSprite(width / 2, height / 2)
    e1sprite.addImage(e1Img)
    e1sprite.scale = 1.43
    e1sprite.visible = false

    f1sprite = createSprite(width / 2, height / 2)
    f1sprite.addImage(f1Img)
    f1sprite.scale = 1.1
    f1sprite.visible = false
    
    g1sprite = createSprite(width / 2+ 570, height / 2)
    g1sprite.addImage(g1Img)
    g1sprite.scale = 0.9
    g1sprite.visible = false

    entrance = createImg("assets/maze/entrance.png")
    entrance.position(0,0)
    entrance.size(windowWidth, windowHeight)
    entrance.hide()
   
    entrance2 = createImg("assets/maze/entrance2.png")
    entrance2.position(0,0)
    entrance2.size(windowWidth, windowHeight)
    entrance2.hide()
    
    canvasSprite1 = createSprite(102*2,102*2,200*2,200*2)
    canvasSprite1.shapeColor = "black"
  
    cardboard1 = createSprite(50,30,10,60);
    cardboard1.shapeColor = "white";
  
    cardboard2 = createSprite(100,100,100,10);
    cardboard2.shapeColor = "white";
    
    cardboard3 = createSprite(100,65,10,50);
    cardboard3.shapeColor = "white";
    
    cardboard4 = createSprite(250,100,100,10);
    cardboard4.shapeColor = "white";
    
    cardboard5 = createSprite(52,150,95,10);
    cardboard5.shapeColor = "white";
    
    cardboard6 = createSprite(50,250,10,100);
    cardboard6.shapeColor = "white";
    
    cardboard7 = createSprite(120,200,150,10);
    cardboard7.shapeColor = "white";
    
    cardboard8 = createSprite(200,150,10,100);
    cardboard8.shapeColor = "white";
    
    cardboard9 = createSprite(150,125,10,152);
    cardboard9.shapeColor = "white";
    
    cardboard10 = createSprite(250,50,100,10);
    cardboard10.shapeColor = "white";
    
    cardboard11 = createSprite(320,150,50,10);
    cardboard11.shapeColor = "white";
    
    cardboard12 = createSprite(300,100,10,100);
    cardboard12.shapeColor = "white";
    
    cardboard13 = createSprite(175,250,150,10);
    cardboard13.shapeColor = "white";
    
    cardboard14 = createSprite(250,200,10,100);
    cardboard14.shapeColor = "white";
    
    cardboard15 = createSprite(250,380,10,50);
    cardboard15.shapeColor = "white";
    
    cardboard16 = createSprite(380,250,55,10);
    cardboard16.shapeColor = "white";
    
    cardboard17 = createSprite(350,175,10,250);
    cardboard17.shapeColor = "white";
    
    cardboard18 = createSprite(50,350,100,10);
    cardboard18.shapeColor = "white";
    
    cardboard19 = createSprite(100,350,10,100);
    cardboard19.shapeColor = "white";
    
    cardboard20 = createSprite(250,350,200,10);
    cardboard20.shapeColor = "white";
    
    cardboard21 = createSprite(180,300,150,10);
    cardboard21.shapeColor = "white";
    
    cardboard22 = createSprite(300,270,10,150);
    cardboard22.shapeColor = "white";

    cardboard23 = createSprite(53*2,112.5*2,5*2,20*2);
    cardboard23.shapeColor = "white";
  
    cardboardLeft = createSprite(5*2,110*2,5*2,180*2)
    cardboardLeft.shapeColor = "white";
    cardboardRight = createSprite(200*2,95*2,5*2,180*2)
    cardboardRight.shapeColor = "white";
    cardboardTop = createSprite(90*2,200*2,180*2,5*2)
    cardboardTop.shapeColor = "white";
    cardboardBottom = createSprite(112*2,4*2,180*2,5*2)
    cardboardBottom.shapeColor = "white";

    mazeEdge1 = createSprite(200*2,100*2,5*2,200*2)
    mazeEdge1.visible = false
    mazeEdge2 = createSprite(2*2,100*2,5*2,200*2)
    mazeEdge2.visible = false 
    mazeEdge3 = createSprite(100*2,2*2,200*2,5*2)
    mazeEdge3.visible = false
    mazeEdge4 = createSprite(100*2,200*2,200*2,5*2)
    mazeEdge4.visible = false
   
    wall1 = createSprite(15*2,25*2,15*2,16*2)
    wall2 = createSprite(15*2,45*2,15*2,25*2)
    wall4 = createSprite(15*2,65*2,15*2,16*2) 
    wall5A = createSprite(24*2,63*2,5*2,18*2)
    wall5 = createSprite(49*2,63*2,44*2,18*2)
    wall17 = createSprite(15*2,87*2,17*2,17*2) 
    wall18 = createSprite(61*2,85*2,20*2,26*2) 
    wall19 = createSprite(38*2,87*2,26*2,19*2) 
    wall20 = createSprite(15*2,116*2,17*2,40*2)  
    wall20A = createSprite(15*2,144*2,17*2,15*2) 
    wall21 = createSprite(18*2,161*2,19*2,17*2)
    wall22 = createSprite(37*2,139*2,17*2,68*2)
    wall23 = createSprite(83*2,137*2,62*2,17*2) 
    wall24 = createSprite(85*2,113*2,55*2,17*2) 
    wall24A = createSprite(49*2,137*2,4*2,20*2) 
    wall28 = createSprite(136*2,124*2,19*2,49*2)  
    wall35 = createSprite(163*2,125*2,18*2,53*2) 
    wall36 = createSprite(160*2,88*2,26*2,18*2) 
    wall37 = createSprite(120*2,138*2,10*2,15*2) 
    wall38 = createSprite(175*2,162*2,40*2,18*2)
    wall42 = createSprite(187*2,175*2,18*2,6*2)
    wall43 = createSprite(137*2,88*2,18*2,18*2)

    wall3 = createSprite(35*2,40*2,25*2,15*2)  
    wall6 = createSprite(37.5*2,26*2,16*2,13*2) 
    wall7 = createSprite(63*2,34*2,16*2,23*2) 
    wall8 = createSprite(55*2,14*2,50*2,13*2)
    wall9 = createSprite(87.5*2,15.5*2,15*2,15*2)  
    wall9A = createSprite(87.5*2,26*2,18*2,5*2) 
    wall10 = createSprite(87.5*2,38*2,18*2,18*2) 
    wall11 = createSprite(87.5*2,72.5*2,18*2,50*2) 
    wall12 = createSprite(122*2,37.5*2,50*2,18*2)
    wall13 = createSprite(122*2,15.5*2,50*2,16*2) 
    wall14 = createSprite(172*2,15.5*2,48*2,16*2)  
    wall15 = createSprite(162*2,48*2,16*2,48*2)
    wall16 = createSprite(188*2,74*2,16*2,100*2)
    wall25 = createSprite(112*2,112*2,19*2,19*2)  
    wall26 = createSprite(87*2,187*2,69*2,19*2) 
    wall27 = createSprite(112*2,87*2,19*2,29*2) 
    wall29 = createSprite(113*2,63*2,17*2,20*2)
    wall30 = createSprite(135*2,63*2,25*2,20*2) 
    wall31 = createSprite(137*2,78*2,18*2,10*2)  
    wall32 = createSprite(136*2,162*2,18*2,18*2)  
    wall33 = createSprite(100*2,162*2,52*2,18*2) 
    wall34 = createSprite(63.5*2,165*2,20*2,23*2)
    wall39 = createSprite(188*2,140*2,18*2,23*2)
    wall40 = createSprite(150*2,187*2,45*2,18*2)
    wall41 = createSprite(176*2,187*2,6*2,18*2)

    wall3.shapeColor = "white"

    player1 = createSprite(15*2,20,15,15)
    player1.shapeColor = "red"
  
    lifeBarA = createSprite(windowWidth - 150,50,150,40)
    lifeBarA.shapeColor = "white"
    lifeBarB = createSprite(windowWidth - 150,50,150,40)
    lifeBarB.shapeColor = "#E0115F"
  
    lifeBar = createSprite(windowWidth - 280 ,50)
    lifeBar.addImage(lifeBarImage)
    lifeBar.scale = 0.1
}



function draw() {
  background(waitimg)

  mazeGameCode()

  drawSprites()
}

function mazeGameCode(){
  if(wall1.isTouching(player1)){
    a1sprite.scale = a1sprite.scale + 0.005
    a1Execpt()
  }
  if(wall2.isTouching(player1)){
    c1sprite.x = c1sprite.x - 4
    c1Execpt()
  }
  if(wall4.isTouching(player1)|| (wall5).isTouching(player1)||(wall5A).isTouching(player1) ){
    b1sprite.x = b1sprite.x - 4
    b1Execpt()
  }
  if(wall18.isTouching(player1)||wall19.isTouching(player1)){
    c1sprite.x = c1sprite.x - 4
    c1Execpt()
  }
  if(wall17.isTouching(player1)||wall20.isTouching(player1)){
    d1sprite.x = d1sprite.x - 4
    d1Execpt()
  }
  if(wall20A.isTouching(player1)||wall21.isTouching(player1)){
    e1sprite.scale = e1sprite.scale + 0.005
    e1Execpt()
  }
  if(wall22.isTouching(player1)){
    f1sprite.scale = f1sprite.scale + 0.003
    f1sprite.x = f1sprite.x - 2
    f1Execpt()
  }
  if(wall24A.isTouching(player1)){
    e1sprite.scale = e1sprite.scale + 0.005
    e1Execpt()
  }
  if(wall24.isTouching(player1)||wall23.isTouching(player1)){
    b1sprite.x = b1sprite.x - 4
    b1Execpt()
  }
  if(wall24A.isTouching(player1)){
    e1sprite.scale = e1sprite.scale + 0.005
    e1Execpt()
  }
  if(wall37.isTouching(player1)){
    a1sprite.scale = a1sprite.scale + 0.005
    a1Execpt()
  }
  if(wall28.isTouching(player1)){
    d1sprite.x = d1sprite.x - 4
    d1Execpt()
  }
  if(wall43.isTouching(player1)){
    e1sprite.scale = e1sprite.scale + 0.005
    e1Execpt()
  }
  if(wall36.isTouching(player1)){
    f1sprite.scale = f1sprite.scale + 0.003
    f1sprite.x = f1sprite.x - 2
    f1Execpt()
  }
  if(wall35.isTouching(player1)){
    c1sprite.x = c1sprite.x - 4
    c1Execpt()
  }
  if(wall38.isTouching(player1)){
    a1sprite.scale = a1sprite.scale + 0.005
    a1Execpt()
  }



  if(wall42.isTouching(player1)){
  
  }


  if(wall3.isTouching(player1)){
    a1sprite.scale = a1sprite.scale + 0.005
    a1Execpt()
  }
  if(wall6.isTouching(player1)){
    c1sprite.x = c1sprite.x - 4
    c1Execpt()
  }
  if(wall7.isTouching(player1)){
    b1sprite.x = b1sprite.x - 4
    b1Execpt()
  }
  if(wall8.isTouching(player1)){
    c1sprite.x = c1sprite.x - 4
    c1Execpt()
  }
  if(wall9.isTouching(player1)){
    d1sprite.x = d1sprite.x - 4
    d1Execpt()
  }
  if(wall9A.isTouching(player1)){
    e1sprite.scale = e1sprite.scale + 0.005
    e1Execpt()
  }
  if(wall10.isTouching(player1)){
    f1sprite.scale = f1sprite.scale + 0.003
    f1sprite.x = f1sprite.x - 2
    f1Execpt()
  }
  if(wall11.isTouching(player1)){
    e1sprite.scale = e1sprite.scale + 0.005
    e1Execpt()
  }
  if(wall12.isTouching(player1)){
    b1sprite.x = b1sprite.x - 4
    b1Execpt()
  }
  if(wall13.isTouching(player1)){
    e1sprite.scale = e1sprite.scale + 0.005
    e1Execpt()
  }
  if(wall14.isTouching(player1)){
    a1sprite.scale = a1sprite.scale + 0.005
    a1Execpt()
  }
  if(wall15.isTouching(player1)){
    d1sprite.x = d1sprite.x - 4
    d1Execpt()
  }
  if(wall16.isTouching(player1)){
    e1sprite.scale = e1sprite.scale + 0.005
    e1Execpt()
  }
  if(wall25.isTouching(player1)){
    f1sprite.scale = f1sprite.scale + 0.003
    f1sprite.x = f1sprite.x - 2
    f1Execpt()
  }
  if(wall26.isTouching(player1)){
    c1sprite.x = c1sprite.x - 4
    c1Execpt()
  }
  if(wall27.isTouching(player1)){
    a1sprite.scale = a1sprite.scale + 0.005
    a1Execpt()
  }
  if(wall29.isTouching(player1)){
    a1sprite.scale = a1sprite.scale + 0.005
    a1Execpt()
  }
  if(wall30.isTouching(player1)){
    c1sprite.x = c1sprite.x - 4
    c1Execpt()
  }
  if(wall31.isTouching(player1)){
    b1sprite.x = b1sprite.x - 4
    b1Execpt()
  }
  if(wall32.isTouching(player1)){
    c1sprite.x = c1sprite.x - 4
    c1Execpt()
  }
  if(wall33.isTouching(player1)){
    d1sprite.x = d1sprite.x - 4
    d1Execpt()
  }
  if(wall34.isTouching(player1)){
    e1sprite.scale = e1sprite.scale + 0.005
    e1Execpt()
  }
  if(wall39.isTouching(player1)){
    f1sprite.scale = f1sprite.scale + 0.003
    f1sprite.x = f1sprite.x - 2
    f1Execpt()
  }
  if(wall40.isTouching(player1)){
    e1sprite.scale = e1sprite.scale + 0.005
    e1Execpt()
  }
  if(wall41.isTouching(player1)){
    b1sprite.x = b1sprite.x - 4
    b1Execpt()
  }
}

function a1Execpt(){
  b1sprite.scale = 0.9
  c1sprite.scale = 0.9
  d1sprite.scale = 0.9
  e1sprite.scale = 1.43
  g1sprite.scale = 0.9
  f1sprite.scale = 1.1
  b1sprite.visible = false
  c1sprite.visible = false
  d1sprite.visible = false
  e1sprite.visible = false
  f1sprite.visible = false
  a1sprite.visible = true
  b1sprite.x = width / 2 + 570
  c1sprite.x = width / 2 + 570
  d1sprite.x = width / 2 + 570
  f1sprite.x = width/2
}
function b1Execpt(){
  a1sprite.scale = 1.43
  c1sprite.scale = 0.9
  d1sprite.scale = 0.9
  e1sprite.scale = 1.43
  g1sprite.scale = 0.9
  f1sprite.scale = 1.1
  a1sprite.visible = false
  b1sprite.visible = true
  c1sprite.visible = false
  d1sprite.visible = false
  e1sprite.visible = false
  f1sprite.visible = false
  c1sprite.x = width / 2 + 570
  d1sprite.x = width / 2 + 570
  f1sprite.x = width/2
}
function c1Execpt(){
  a1sprite.scale = 1.43
  b1sprite.scale = 0.9
  d1sprite.scale = 0.9
  e1sprite.scale = 1.43
  g1sprite.scale = 0.9
  f1sprite.scale = 1.1
  a1sprite.visible = false
  b1sprite.visible = false
  c1sprite.visible = true
  d1sprite.visible = false
  e1sprite.visible = false
  f1sprite.visible = false
  b1sprite.x = width / 2 + 570
  f1sprite.x = width/2
  d1sprite.x = width / 2 + 570
}
function d1Execpt(){
  a1sprite.scale = 1.43
  b1sprite.scale = 0.9
  c1sprite.scale = 0.9
  e1sprite.scale = 1.43
  g1sprite.scale = 0.9
  f1sprite.scale = 1.1
  a1sprite.visible = false
  b1sprite.visible = false
  c1sprite.visible = false
  d1sprite.visible = true
  e1sprite.visible = false
  f1sprite.visible = false
  b1sprite.x = width / 2 + 570
  f1sprite.x = width/2
  c1sprite.x = width / 2 + 570
}
function e1Execpt(){
  a1sprite.scale = 1.43
  b1sprite.scale = 0.9
  c1sprite.scale = 0.9
  d1sprite.scale = 0.9
  g1sprite.scale = 0.9
  f1sprite.scale = 1.1
  a1sprite.visible = false
  b1sprite.visible = false
  c1sprite.visible = false
  d1sprite.visible = false
  e1sprite.visible = true
  f1sprite.visible = false
  b1sprite.x = width / 2 + 570
  c1sprite.x = width / 2 + 570
  f1sprite.x = width/2
  d1sprite.x = width / 2 + 570
}
function f1Execpt(){
  a1sprite.scale = 1.43
  b1sprite.scale = 0.9
  c1sprite.scale = 0.9
  d1sprite.scale = 0.9
  g1sprite.scale = 0.9
  e1sprite.scale = 1.43
  a1sprite.visible = false
  b1sprite.visible = false
  c1sprite.visible = false
  d1sprite.visible = false
  e1sprite.visible = false
  f1sprite.visible = true
  b1sprite.x = width / 2 + 570
  c1sprite.x = width / 2 + 570
  d1sprite.x = width / 2 + 570
}
function g1Execpt(){
  a1sprite.scale = 1.43
  b1sprite.scale = 0.9
  c1sprite.scale = 0.9
  d1sprite.scale = 0.9
  e1sprite.scale = 1.43
  f1sprite.scale = 1.1
  a1sprite.visible = false
  b1sprite.visible = false
  c1sprite.visible = false
  d1sprite.visible = false
  e1sprite.visible = false
  f1sprite.visible = false
  g1sprite.visible = true
}

function keyPressed(){
if(keyCode === DOWN_ARROW){
 player1.velocityX= 0
 player1.velocityY= 0.5
 }
if(keyCode === UP_ARROW){
 player1.velocityX= 0
 player1.velocityY= -0.5
}
if(keyCode === RIGHT_ARROW){
player1.velocityX= 0.5
player1.velocityY= 0
}
if(keyCode === LEFT_ARROW){
player1.velocityX= -0.5
player1.velocityY= 0
}
}