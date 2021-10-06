radio.onReceivedValue(function (name, value) {
    if (name == "mode") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (name == "beat") {
    	
    }
})
let strip: neopixel.Strip = null
radio.setGroup(1)
strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
basic.forever(function () {
	
})
