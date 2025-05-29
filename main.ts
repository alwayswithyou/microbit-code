radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("play")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("ok")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("run")
})
radio.setGroup(1)
basic.forever(function () {
	
})
