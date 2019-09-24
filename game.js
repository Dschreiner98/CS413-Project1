var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer({width: 400, height: 400, backgroundColor: 0xC70039});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var texture = PIXI.Texture.from();//Add game picture for the player to interact with.

var sprite = new PIXI.Sprite(texture);

sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;

sprite.position.x = 200;
sprite.position.y = 200;

stage.addChild(sprite);

//Used for keyboard input
function keydownEventHandler(e) {

    if (e.keyCode == 87) { // W key
      sprite.position.y -= 10;
    }
  
    if (e.keyCode == 83) { // S key
      sprite.position.y += 10;
    }
  
    if (e.keyCode == 65) { // A key
      sprite.position.x -= 10;
    }
  
    if (e.keyCode == 68) { // D key
      sprite.position.x += 10;
    }
  }

document.addEventListener('keydown', keydownEventHandler);
function animate()
{
    requestAnimationFrame(animate);
    renderer.render(stage);
}

animate();