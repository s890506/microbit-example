let item = 0
basic.forever(() => {
	
})
input.onPinPressed(TouchPin.P0, () => {
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 1)
        led.plot(index, 2)
        led.plot(index, 3)
        basic.pause(Math.random(501) + 200)
    }
    basic.clearScreen()
    item = Math.random(56) + 45
    basic.showString("FS:" + item)
    if (item > 80) {
        basic.showIcon(IconNames.Happy)
    } else if (item > 60) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
basic.showIcon(IconNames.Happy)
