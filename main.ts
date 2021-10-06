input.onButtonPressed(Button.A, function () {
    currentMODE += -1
})
function rainbow () {
    strip.showRainbow(1, 360)
}
input.onButtonPressed(Button.B, function () {
    currentMODE += 1
})
radio.onReceivedValue(function (name, value) {
    if (name == "mode") {
        currentMODE = value
    }
    if (name == "beat") {
        beatNOW = value
    }
})
function solid (Color1: number) {
    strip.showColor(Color1)
}
let beatNOW = 0
let currentMODE = 0
let strip: neopixel.Strip = null
radio.setGroup(1)
strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
currentMODE = 1
basic.forever(function () {
    if (currentMODE == 1) {
        rainbow()
    } else if (currentMODE == 2) {
        solid(neopixel.hsl(10, 100, 50))
    } else if (currentMODE == 3) {
        solid(neopixel.hsl(30, 100, 50))
    } else if (currentMODE == 4) {
        solid(neopixel.hsl(58, 100, 50))
    } else if (currentMODE == 5) {
        solid(neopixel.hsl(105, 100, 50))
    } else if (currentMODE == 6) {
        solid(neopixel.hsl(180, 100, 50))
    } else if (currentMODE == 7) {
        solid(neopixel.hsl(235, 100, 50))
    } else if (currentMODE == 8) {
        solid(neopixel.hsl(280, 100, 50))
    } else if (currentMODE == 9) {
        solid(neopixel.hsl(335, 100, 50))
    } else if (currentMODE == 10) {
        solid(neopixel.hsl(235, 100, 50))
    } else if (currentMODE == 12) {
        solid(neopixel.hsl(10, 100, 50))
    } else if (currentMODE == 12) {
        solid(neopixel.hsl(0, 0, 50))
    } else if (currentMODE == 13) {
        solid(neopixel.hsl(335, 100, 50))
    } else if (currentMODE == 14) {
        solid(neopixel.hsl(316, 100, 50))
    } else if (currentMODE == 15) {
        solid(neopixel.hsl(105, 100, 50))
    } else if (currentMODE == 16) {
        solid(neopixel.hsl(0, 0, 0))
    } else {
    	
    }
})
