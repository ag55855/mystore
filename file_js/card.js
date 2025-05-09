function displayCart() {
    const cartContainer = document.getElementById('cart-container');
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    cartContainer.innerHTML = "";

    cartItems.forEach((item, index) => {
      const cartItem = `
        <div class="col-md-4 mb-4">
          <div class="card cart-item-card shadow-sm h-100">
            <img src="${item.image}" class="card-img-top" alt="${item.name}" style="height: 220px; object-fit: cover;">
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p class="text-dark"><strong>Price: $${item.price}</strong></p>
              </div>
              <button class="btn btn-danger mt-3 w-100" onclick="removeFromCart(${index})">Remove</button>
            </div>
          </div>
        </div>
      `;
      cartContainer.innerHTML += cartItem;
      total += parseFloat(item.price.replace('$', ''));
    });

    document.getElementById('total-price').innerText = total.toFixed(2);
  }

  function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCart();
  }

  function checkout() {
    window.location.href = 'checkout.html';
  }

  displayCart();