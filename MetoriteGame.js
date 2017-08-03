let score = 0
let pauseDifficulty = 0
let meteorite2y = 0
let meteorite2x = 0
let meteorite1y = 0
let meteorite1x = 0
let shipLeftX = 0
input.onButtonPressed(Button.AB, () => {
    basic.clearScreen()
    basic.showLeds(`
        . # # . .
        . . . # .
        . . # . .
        . . . # .
        . # # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # . .
        . . . # .
        . . # . .
        . # . . .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.pause(1000)
    basic.clearScreen()
    meteorite1x = Math.random(5)
    meteorite1y = -4
    meteorite2x = Math.random(6)
    meteorite2y = -1
    shipLeftX = 0
    pauseDifficulty = 300
    score = 0
    led.plot(shipLeftX, 4)
    led.plot(shipLeftX + 1, 4)
    while (true) {
        if (meteorite1y >= 0) {
            led.unplot(meteorite1x, meteorite1y)
        }
        meteorite1y = meteorite1y + 1
        if (meteorite1y >= 5) {
            score = score + 1
            meteorite1x = Math.random(5)
            meteorite1y = -1
        }
        if (meteorite1y == 4 && (shipLeftX == meteorite1x || shipLeftX + 1 == meteorite1x)) {
            basic.showString("GG")
            basic.showString("S:")
            basic.showNumber(score)
            while (true) {
                basic.clearScreen()
            }
        }
        if (meteorite1y >= 0) {
            led.plot(meteorite1x, meteorite1y)
        }
        if (meteorite2y >= 0) {
            led.unplot(meteorite2x, meteorite2y)
        }
        meteorite2y = meteorite2y + 1
        if (meteorite2y >= 5) {
            score = score + 1
            meteorite2x = Math.random(5)
            meteorite2y = -1
        }
        if (meteorite2y == 4 && (shipLeftX == meteorite2x || shipLeftX + 1 == meteorite2x)) {
            basic.showString("GG")
            basic.showString("S:")
            basic.showNumber(score)
            while (true) {
                basic.clearScreen()
            }
        }
        if (meteorite2y >= 0) {
            led.plot(meteorite2x, meteorite2y)
        }
        basic.pause(pauseDifficulty)
    }
})
input.onButtonPressed(Button.A, () => {
    if (shipLeftX >= 1) {
        led.unplot(shipLeftX + 1, 4)
        shipLeftX = shipLeftX - 1
        led.plot(shipLeftX, 4)
    }
})
input.onButtonPressed(Button.B, () => {
    if (shipLeftX <= 2) {
        led.unplot(shipLeftX, 4)
        shipLeftX = shipLeftX + 1
        led.plot(shipLeftX, 4)
        led.plot(shipLeftX + 1, 4)
    }
})
basic.showIcon(IconNames.Heart)
