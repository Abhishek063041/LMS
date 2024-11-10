// JavaScript to handle accept/decline actions and send a message to the student
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".accept-button, .decline-button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const row = button.closest("tr");

            // Retrieve student information
            const studentName = row.cells[0].textContent;
            const rollNo = row.cells[1].textContent;
            const bookName = row.cells[3].textContent;
            const action = button.classList.contains("accept-button") ? "approved" : "declined";

            // Simulate sending a message to the student
            sendMessageToStudent(studentName, rollNo, bookName, action);

            // Add fade-out animation to the row
            row.classList.add("fade-out");

            // Optionally, remove the row after the animation completes
            row.addEventListener("animationend", () => {
                row.remove();
            });
        });
    });
});

/**
 * Function to simulate sending a message to the student.
 * @param {string} studentName - Name of the student
 * @param {string} rollNo - Roll number of the student
 * @param {string} bookName - Name of the book requested
 * @param {string} action - Either "approved" or "declined"
 */
function sendMessageToStudent(studentName, rollNo, bookName, action) {
    const message = `Hello ${studentName} (Roll No: ${rollNo}), your request for the book "${bookName}" has been ${action}.`;
    
    // Simulating sending a message by logging it to the console
    console.log(message);
    
    // In a real-world scenario, you would replace this with an API call to send an actual message
    // Example: sendNotification(studentId, message);
}
