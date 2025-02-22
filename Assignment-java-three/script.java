document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("input[type='button']");
    const clearButton = document.getElementById("clear");
    const deleteButton = document.getElementById("delete");
    const equalButton = document.getElementById("equal");

    // Add event listener to all buttons
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            const value = e.target.getAttribute("data-value");

            if (value) {
                display.value += value;
            }
        });
    });

    // Clear button
    clearButton.addEventListener("click", () => {
        display.value = "";
    });

    // Delete button
    deleteButton.addEventListener("click", () => {
        display.value = display.value.toString().slice(0, -1);
    });

    // Equal button
    equalButton.addEventListener("click", () => {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    });
});
