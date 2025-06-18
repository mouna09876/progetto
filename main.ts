controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.setBackgroundColor(5)
scene.setBackgroundColor(0)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 . 3 . . . . 
    . . . 3 . 3 . 3 3 3 . 3 . . . . 
    . . 3 . 3 . . . 3 3 3 . . . . . 
    . 3 3 3 3 3 3 3 . . 3 . . . . . 
    . . . 3 . . . . . . . 3 3 . . . 
    . . . . 3 . . . . . . . . 3 . . 
    . . . . . 3 3 . . . . . . 3 . . 
    . . . . . . . 3 3 . . . . 3 . . 
    . . . . . . . . . 3 3 . . 3 . . 
    . . . . . . . . . . . 3 3 3 . . 
    . . . . . . . . . . . . . 3 3 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
