function rainbow () {
    strip.showRainbow(1, 360)
}
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
basic.forever(function () {
    if (currentMODE == 1) {
        rainbow()
    } else if (currentMODE == 2) {
        solid(neopixel.hsl(10, 100, 50))
    } else if (currentMODE == 3) {
    	
    } else if (currentMODE == 4) {
    	
    } else if (currentMODE == 5) {
    	
    } else if (currentMODE == 6) {
    	
    } else if (currentMODE == 7) {
    	
    } else if (currentMODE == 8) {
    	
    } else if (currentMODE == 9) {
    	
    } else if (currentMODE == 10) {
    	
    } else if (currentMODE == 12) {
    	
    } else if (currentMODE == 12) {
    	
    } else if (currentMODE == 13) {
    	
    } else if (currentMODE == 14) {
    	
    } else if (currentMODE == 15) {
    	
    } else if (currentMODE == 16) {
    	
    } else {
    	
    }
})
