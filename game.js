var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer({width: 400, height: 400, backgroundColor: 0x444444});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();
//Will be used to keep track of points
var score = 0;

var texture = PIXI.Texture.from("Ghost.png");//Add game picture for the player to interact with.

var player = new PIXI.Sprite(texture);

//Initial placement of players character
player.anchor.x = 0.5;
player.anchor.y = 0.5;
player.position.x = 200;
player.position.y = 200;
//Shrink ghost 
player.scale.x = .3;
player.scale.y = .3;
stage.addChild(player);

//Used for keyboard input
function keydownEventHandler(e) {

    if (e.keyCode == 87) { // W key
      player.position.y -= 10;
    }
  
    if (e.keyCode == 83) { // S key
      player.position.y += 10;
    }
  
    if (e.keyCode == 65) { // A key
      player.position.x -= 10;
    }
  
    if (e.keyCode == 68) { // D key
      player.position.x += 10;
    }
  }

//Listens to the keyboard presses to move the player
document.addEventListener('keydown', keydownEventHandler);
function animate()
{
    requestAnimationFrame(animate);
    renderer.render(stage);
}

animate();