
   


        $(document).ready(function () {
            let hours = 0, minutes = 25, seconds = 0;
            let timer;
            let isRunning = false;

            // Function to update the timer display
            function updateTimerDisplay() {
                $("#hours").text((hours < 10 ? "0" : "") + hours + " :");
                $("#minutes").text((minutes < 10 ? "0" : "") + minutes + " :");
                $("#seconds").text((seconds < 10 ? "0" : "") + seconds);
            }

            // Start button click event
            $("#startbtn").click(function () {
                if (!isRunning) {
                    isRunning = true;

                    // Get custom time from inputs
                    hours = parseInt($("#setHours").val());
                    minutes = parseInt($("#setMinutes").val());
                    seconds = parseInt($("#setSeconds").val());

                    updateTimerDisplay();
                    startTimer();
                }
            });

            // Reset button click event
            $("#resetbtn").click(function () {
                clearTimeout(timer);
                isRunning = false;

                // Reset the input values to default (25 min)
                $("#setHours").val(0);
                $("#setMinutes").val(25);
                $("#setSeconds").val(0);

                // Reset timer display
                hours = 0;
                minutes = 25;
                seconds = 0;

                updateTimerDisplay();
            });

            // Timer function
            function startTimer() {
                clearTimeout(timer); // Prevent multiple timers

                timer = setTimeout(function () {
                    if (seconds === 0) {
                        if (minutes === 0) {
                            if (hours === 0) {
                                clearTimeout(timer);
                                isRunning = false;
                                $("#alarm")[0].play(); // Play alarm sound
                                return;
                            }
                            hours--;
                            minutes = 59;
                        } else {
                            minutes--;
                        }
                        seconds = 59;
                    } else {
                        seconds--;
                    }

                    updateTimerDisplay();
                    startTimer(); // Recursive call
                }, 1000);
            }

            updateTimerDisplay(); // Ensure the display is correct on load
        });


