document.addEventListener("DOMContentLoaded", () => {
    // Select the form element
    const form = document.querySelector("form");
    const errorMessage = document.createElement("div");
    const successMessage = document.createElement("div");

    // Insert error and success message containers into the page
    errorMessage.style.color = "red";
    errorMessage.style.marginTop = "10px";
    errorMessage.style.display = "none";
    form.appendChild(errorMessage);

    successMessage.style.color = "green";
    successMessage.style.marginTop = "10px";
    successMessage.style.display = "none";
    form.appendChild(successMessage);

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent form from submitting normally

        // Clear previous messages
        errorMessage.style.display = "none";
        successMessage.style.display = "none";

        // Gather form data
        const bookData = {
            title: document.getElementById("book-title").value.trim(),
            author1: document.getElementById("author1").value.trim(),
            author2: document.getElementById("author2").value.trim(),
            publisher: document.getElementById("publisher").value.trim(),
            date: document.getElementById("date").value.trim(),
            tag: document.getElementById("tag").value.trim(),
            ISBN: document.getElementById("ISBN").value.trim(),
        };

        // Validate form data (check if any field is empty)
        const missingFields = Object.keys(bookData).filter((key) => !bookData[key]);

        if (missingFields.length > 0) {
            errorMessage.textContent = `Please fill out all fields. Missing: ${missingFields.join(", ")}`;
            errorMessage.style.display = "block";
            return;
        }

        try {
            // Send data to the server using fetch API
            const response = await fetch("https://your-server-url.com/api/addBook", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookData),
            });

            // Check if the request was successful
            if (response.ok) {
                successMessage.textContent = "Book added successfully!";
                successMessage.style.display = "block";
                form.reset(); // Clear the form
            } else {
                throw new Error("Failed to add book. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            errorMessage.textContent = "An error occurred while adding the book.";
            errorMessage.style.display = "block";
        }
    });
});
