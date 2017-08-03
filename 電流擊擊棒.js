let checkA = 0
input.onButtonPressed(Button.A, () => {
    checkA = 1
    basic.showString("Start")
})
input.onPinPressed(TouchPin.P1, () => {
    if (checkA == 1) {
        checkA = 0
        basic.showString("Win")
        music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    }
})
input.onPinPressed(TouchPin.P2, () => {
    if (checkA == 1) {
        checkA = 0
        music.playTone(784, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Whole))
        music.beginMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
        basic.showString("GG")
    }
})
checkA = 0
