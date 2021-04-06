function earWiggle () {
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 90)
    basic.pause(200)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 80)
    basic.pause(1000)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 50)
    basic.pause(200)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 50)
    basic.pause(1000)
}
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 50)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 50)
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        earWiggle()
    }
    while (input.buttonIsPressed(Button.A)) {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, -20)
    }
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, 10)
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
    	
    }
})
