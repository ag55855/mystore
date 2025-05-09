document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent form submission

          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const message = document.getElementById("message").value;

          if (!name || !message) {
            alert("Please fill in all the fields.");
          } else {
            alert("Thank you for reaching out! We will get back to you soon.");
            // Optionally, send data to the server or store it locally
            document.getElementById("contact-form").reset(); // Reset the form
          }
        });