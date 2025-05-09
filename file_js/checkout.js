document
.getElementById("checkout-form")
.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const cardNumber = document
    .getElementById("card-number")
    .value.trim();

  if (!name || !address || !cardNumber) {
    alert("Please fill in all required fields.");
    return;
  }

  // Clear cart
  localStorage.removeItem("cart");

  alert("Thank you for your purchase!");
  window.location.href = "index.html"; // Redirect after order
});