radio.onReceivedNumber(function (receivedNumber) {
    señal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (señal < -90) {
        basic.showIcon(IconNames.Sad)
    } else if (señal < -60) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
let señal = 0
radio.setGroup(1)
