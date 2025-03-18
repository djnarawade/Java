document.getElementById("searchBtn").addEventListener("click", function() {
    let query = document.getElementById("search").value.trim(); // Trim spaces
    let apiKey = "AIzaSyD-H16CidiylIo2HE4GBIDakAdCsmbeTGk"; // Replace with a new valid key
    let url = `https://tenor.googleapis.com/v2/search?q=${query}&key=${apiKey}&limit=8`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Debugging: Check API response in console
            let resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = ""; // Clear previous results

            if (data.results && data.results.length > 0) {
                data.results.forEach(gif => {
                    let img = document.createElement("img");
                    img.src = gif.media_formats.gif.url; // Corrected path
                    img.classList.add("m-2", "img-fluid", "rounded"); // Bootstrap styles
                    img.style.width = "200px"; // Adjust size
                    resultsDiv.appendChild(img);
                });
            } else {
                resultsDiv.innerHTML = "<p>No GIFs found. Try another search!</p>";
            }
        })
        .catch(error => console.error("Error fetching data:", error));
});
