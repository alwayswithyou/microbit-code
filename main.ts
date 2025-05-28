input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("ok")
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("home")
})
input.onButtonPressed(Button.B, function () {
	
})
radio.setGroup(1)
basic.forever(function () {
	
})
