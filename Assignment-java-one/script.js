document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("dramaForm");
    const tableBody = document.getElementById("dramaTableBody");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Get input values
        const dramaName = document.getElementById("dramaName").value;
        const dramaYear = document.getElementById("dramaYear").value;
        const dramaRating = document.getElementById("dramaRating").value;

        // Validate input
        if (dramaName === "" || dramaYear === "" || dramaRating === "") {
            alert("Please fill all fields!");
            return;
        }

        // Function to add data to table
        function addRow(name, year, rating) {
            const newRow = document.createElement("tr");
            const data = [name, year, rating];

            // Loop through input values and create table cells
            for (let i = 0; i < data.length; i++) {
                let cell = document.createElement("td");
                cell.textContent = data[i];
                newRow.appendChild(cell);
            }

            // Append new row to table
            tableBody.appendChild(newRow);
        }

        // Call function to add row
        addRow(dramaName, dramaYear, dramaRating);

        // Clear form inputs
        form.reset();
    });
});
