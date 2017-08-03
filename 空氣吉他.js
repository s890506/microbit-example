let start = 0
input.onButtonPressed(Button.A, () => {
    start = 1
})
basic.forever(() => {
    if (start && input.acceleration(Dimension.Y) >= 350) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
    }
})
input.onButtonPressed(Button.B, () => {
    start = 0
})
input.onGesture(Gesture.Shake, () => {
    music.playTone(988, music.beat(BeatFraction.Whole))
})
basic.forever(() => {
    if (start && (input.acceleration(Dimension.Y) <= -350 || input.acceleration(Dimension.Y) >= 350)) {
        basic.showLeds(`
            . . # . .
            # . # . .
            # . # . #
            # # # . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . # . #
            . # # # #
            . # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . #
            . # . . #
            . # . # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . #
            # # . # #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.EigthNote)
    }
})
input.onButtonPressed(Button.AB, () => {
    music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
basic.forever(() => {
    if (start && input.acceleration(Dimension.Y) <= -350) {
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
    }
})
