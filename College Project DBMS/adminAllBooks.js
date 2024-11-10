document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-bar input[type='text']");
    const tableRows = document.querySelectorAll("table tr:not(:first-child)"); // Exclude the header row

    // Create a "No results found!" row
    const noResultsRow = document.createElement("tr");
    noResultsRow.innerHTML = `<td colspan="4" style="text-align: center; color: gray;">No results found!</td>`;
    noResultsRow.style.display = "none"; // Hide initially
    document.querySelector("table").appendChild(noResultsRow);

    // Add an event listener to the search input
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        let hasResults = false;

        tableRows.forEach(row => {
            const cells = row.getElementsByTagName("td");
            const bookID = cells[0].textContent.toLowerCase();
            const bookName = cells[1].textContent.toLowerCase();
            const isbn = cells[2].textContent.toLowerCase();

            // Check if the query matches Book ID, Book Name, or ISBN
            if (bookID.includes(query) || bookName.includes(query) || isbn.includes(query)) {
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
