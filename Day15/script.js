// Reference to the HTML 
const timerDisplay = document.getElementById('timer');


//Message
const messageDisplay = document.getElementById('message');

// InitialCount
let countdownValue = 10;

// DisplayInitial Value
timerDisplay.innerText = countdownValue;

// Function 
function startTimer() {
    countdownValue -= 1;
    timerDisplay.innerText = countdownValue;


    if (countdownValue > 0) {
        
        setTimeout(function () {
            countdownValue -= 1;
            timerDisplay.innerText = countdownValue;

            if (countdownValue > 0) {
                setTimeout(function () {
                    countdownValue -= 1;
                    timerDisplay.innerText = countdownValue;

                    if (countdownValue > 0) {
                        setTimeout(function () {
                            countdownValue -= 1;
                            timerDisplay.innerText = countdownValue;

                            if (countdownValue > 0) {
                                setTimeout(function () {
                                    countdownValue -= 1;
                                    timerDisplay.innerText = countdownValue;

                                    if (countdownValue > 0) {
                                        setTimeout(function () {
                                            countdownValue -= 1;
                                            timerDisplay.innerText = countdownValue;

                                            if (countdownValue > 0) {
                                                setTimeout(function () {
                                                    countdownValue -= 1;
                                                    timerDisplay.innerText = countdownValue;

                                                    if (countdownValue > 0) {
                                                        setTimeout(function () {
                                                            countdownValue -= 1;
                                                            timerDisplay.innerText = countdownValue;

                                                            if (countdownValue > 0) {
                                                                setTimeout(function () {
                                                                    countdownValue -= 1;
                                                                    timerDisplay.innerText = countdownValue;

                                                                    if (countdownValue > 0) {
                                                                        setTimeout(function () {
                                                                            countdownValue -= 1;
                                                                            timerDisplay.innerText = countdownValue;

                                                                            if(countdownValue === 0){
                                                                                messageDisplay.innerText = "Hi , how are you ?"
                                                                            }
                                                                        }, 1000);
                                                                    }
                                                                }, 1000);
                                                            }
                                                        }, 1000);
                                                    }
                                                }, 1000);
                                            }
                                        }, 1000);
                                    }
                                }, 1000);
                            }
                        }, 1000);
                    }
                }, 1000);
            }
        }, 1000);
    }
}


startTimer();
