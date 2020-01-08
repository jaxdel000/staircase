let Juan = sprites.create(img`
. 1 1 1 1 1 1 1 1 1 1 . . . . . 
1 . . . . . . . . . 1 1 . . . . 
1 . . . . . . . . . . 1 1 . . . 
1 . 1 1 . . . 1 1 . . . 1 . . . 
1 . 1 f . . . 1 f . . . 1 . . . 
. 1 . . . . . . . . . . 1 1 . . 
. 1 . . 1 1 1 1 1 1 . . . 1 . . 
. 1 . . . 1 f f f 1 . . . 1 . . 
. 1 1 . . 1 f 3 f 1 . . . 1 . . 
. . 1 1 . 1 1 1 1 1 . . . 1 . . 
. . . 1 1 . . . . . . . . 1 1 . 
. . . . 1 1 . . . . . . . . 1 . 
. . . . . . 1 . . . . . . . 1 . 
. . . . . . 1 1 . . 1 1 1 1 . . 
. . . . . . . . 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(14)
for (let index = 0; index < 9; index++) {
    pause(100)
    Juan.y += -4
    pause(100)
    Juan.x += -4
}
pause(1000)
for (let index = 0; index < 9; index++) {
    pause(100)
    Juan.y += 4
    pause(100)
    Juan.x += 4
}
