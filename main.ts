input.onButtonPressed(Button.A, function () {
    T_or_D = randint(0, 1)
    if (T_or_D == 0) {
        basic.showString("Truth")
    } else if (T_or_D == 1) {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    Arrows = randint(0, 3)
    if (Arrows == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (Arrows == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (Arrows == 2) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (Arrows == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    basic.pause(1000)
    basic.clearScreen()
})
let Arrows = 0
let T_or_D = 0
basic.showString("Truth or Dare")
