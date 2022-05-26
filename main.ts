input.onButtonPressed(Button.A, function () {
    radio.sendString("på")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("revers")
})
radio.setGroup(30)
basic.forever(function () {
    basic.clearScreen()
    radio.sendValue("sving", pins.map(
    input.acceleration(Dimension.X),
    -1024,
    1023,
    0,
    100
    ))
    led.plot(pins.map(
    input.acceleration(Dimension.X),
    -1024,
    1023,
    0,
    4
    ), 2)
})
