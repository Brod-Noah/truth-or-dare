Random_Number = 0

def on_gesture_shake():
    global Random_Number
    Random_Number = randint(0, 3)
    if Random_Number == 0:
        basic.show_string("Answer Unclear")
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    pass
basic.forever(on_forever)
