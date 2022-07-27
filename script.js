var x = 20; var y = 20; var diam = 10;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  for(var i = 20;i<width;i+=x )
    {
    for(var j = 20;j<height;j+=y){
      
     var c = dist(mouseX,mouseY, i , j );
      
      if(c<80)
        {
        fill(255,0,0,100);
        diam = map(c,0,100,50,1);
      }else{
        fill(255);
        diam = 10;
      }
      
      
    ellipse(i,j,diam);
  }
  }
}
