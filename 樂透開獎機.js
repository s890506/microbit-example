let d = 0
let c = 0
let f = 0
let e = 0
let b = 0
let a = 0
input.onButtonPressed(Button.A, () => {
    while (a == b || a == c || a == d || a == e || a == f ||
        b == c || b == d || b == e || b == f ||
        c == d || c == e || c == f ||
        d == e || d == f ||
        e == f) {

        a = Math.random(6) + 1
        b = Math.random(6) + 1
        c = Math.random(6) + 1
        d = Math.random(6) + 1
        e = Math.random(6) + 1
        f = Math.random(6) + 1
    }
    basic.showString("" + a + ",  " + b + ",  " + c + ",  " + d + ",  " + e + ",  " + f)
})
