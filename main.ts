input.onGesture(Gesture.Shake, function () {
    Random_Number = randint(0, 3)
    if (Random_Number == 0) {
        basic.showString("Answer Unclear")
    } else if (Random_Number == 0) {
        basic.showString("No")
    } else {
        basic.showString("Yes")
    }
})
let Random_Number = 0
basic.showString("8 Ball")
basic.forever(function () {
	
})
