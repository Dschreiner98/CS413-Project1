var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer({width: 400, height: 400, backgroundColor: 0x900C3F});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var texture = PIXI.Texture.from();//Add game picture for the player to interact with.

var sprite = new PIXI.Sprite(texture);

sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;

sprite.position.x = 200;
sprite.position.y = 200;

stage.addChild(sprite);

function animate()
{
    requestAnimationFrame(animate);
    sprite.rotation += 0.1;
    renderer.render(stage);
}

animate();