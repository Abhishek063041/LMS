document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-container input[type='text']");
    const tableRows = document.querySelectorAll("table tbody tr"); // Select all rows in the table body

    // Create a "No results found!" row
    const noResultsRow = document.createElement("tr");
    noResultsRow.innerHTML = `<td colspan="5" style="text-align: center; color: gray;">No results found!</td>`; // Updated colspan to 5 to match the number of columns
    noResultsRow.style.display = "none"; // Hide initially
    document.querySelector("table tbody").appendChild(noResultsRow);

    // Add an event listener to the search input
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        let hasResults = false;

        tableRows.forEach(row => {
            const cells = row.getElementsByTagName("td");
            const bookID = cells[0].textContent.toLowerCase();
            const bookName = cells[1].textContent.toLowerCase();
            
            // Check if the query matches Book ID or Book Name
            if (bookID.includes(query) || bookName.includes(query)) {
                row.style.display = ""; // Show the row if there's a match
                hasResults = true; // Set hasResults to true if there's at least one match
            } else {
                row.style.display = "none"; // Hide the row if there's no match
            }
        });

        // Show "No results found!" row if there are no matches
        noResultsRow.style.display = hasResults ? "none" : "";
    });
});
