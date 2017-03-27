let bmi = 0
let wDigits = 0
let hDigits = 0
let wTenDigits = 0
let hTenDigits = 0
let wHundredDigits = 0
let hHundredDigits = 0
let weight = 0
let focus = ""
let height = 0
input.onButtonPressed(Button.AB, () => {
    // BMI = 體重 (公斤) / 身高 2(公尺 2)
    height = (hHundredDigits + hTenDigits + hDigits) / 100
    weight = wHundredDigits + wTenDigits + wDigits
    bmi = weight / (height * height)
    basic.showString("BMI")
    basic.showNumber(bmi)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P0, () => {
    if (focus == "A") {
        hHundredDigits += 100
    } else if (focus == "B") {
        wHundredDigits += 100
    } else {
        basic.showString("Please choose height or weight.")
    }
})
input.onPinPressed(TouchPin.P1, () => {
    if (focus == "A") {
        hTenDigits += 10
    } else if (focus == "B") {
        wHundredDigits += 10
    } else {
        basic.showString("Please choose height or weight.")
    }
})
input.onPinPressed(TouchPin.P2, () => {
    if (focus == "A") {
        hDigits += 1
    } else if (focus == "B") {
        wDigits += 1
    } else {
        basic.showString("Please choose height or weight.")
    }
})
input.onButtonPressed(Button.A, () => {
    focus = "A"
    basic.showNumber(hHundredDigits + hTenDigits + hDigits)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, () => {
    focus = "B"
    basic.showNumber(wHundredDigits + wTenDigits + wDigits)
    basic.clearScreen()
})
focus = "NO"
