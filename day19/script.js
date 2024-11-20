document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create a new user card
    const userCard = document.createElement("div");
    userCard.classList.add("card");

    userCard.innerHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
    `;

    // Add the user card to the card container
    const usersContainer = document.getElementById("users");
    if (usersContainer.querySelector("p")) {
        // Remove the "No users signed up yet." message
        usersContainer.innerHTML = "";
    }
    usersContainer.appendChild(userCard);

    // Clear form fields
    document.getElementById("signup-form").reset();
});
