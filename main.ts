controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (bimbo.vy == 0) {
        bimbo.vy += -250
    }
})
let bimbo: Sprite = null
scene.setBackgroundColor(1)
bimbo = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . f f f 2 2 2 f f f . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . f e e e e e e e f . . . . 
    . . . f e 3 3 3 3 3 e f . . . . 
    . . . f f 3 7 3 7 3 f f . . . . 
    . . . . f 3 3 3 3 3 f . . . . . 
    . . . . f 3 3 3 3 3 f . . . . . 
    . . f f f f f 3 f f f . . . . . 
    . . f 3 f 8 8 8 8 8 f f f . . . 
    . . f 3 3 8 8 8 8 8 3 3 f . . . 
    . . f f f 8 8 8 8 8 f 3 f . . . 
    . . . . f 8 8 8 8 8 f f f . . . 
    . . . . f e e f e e f . . . . . 
    . . . . f e e f e e f . . . . . 
    . . . . f e e f e e f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(bimbo, 100, 0)
scene.cameraFollowSprite(bimbo)
tiles.setCurrentTilemap(tilemap`livello1`)
game.onUpdate(function () {
    bimbo.ay = 500
})
