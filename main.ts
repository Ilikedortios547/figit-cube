input.onGesture(Gesture.EightG, function () {
    basic.showString("ow")
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . . . # .
        . . . . .
        . . . # .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
music.playMelody("C5 C E A E B C G ", 500)
