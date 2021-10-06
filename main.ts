radio.onReceivedValue(function (name, value) {
    if (name == "mode") {
        currentMODE = value
    }
    if (name == "beat") {
        beatNOW = value
    }
})
let beatNOW = 0
let currentMODE = 0
radio.setGroup(1)
let strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
basic.forever(function () {
    if (currentMODE == 1) {
    	
    } else if (currentMODE == 2) {
    	
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
