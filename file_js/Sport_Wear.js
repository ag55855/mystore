const products = [
    {
      name: "Men's Gym T-Shirt",
      description:
        "Lightweight and breathable t-shirt designed for intense workouts.",
      image:
        "images/sport-wear-img/il_1588xN.3361947138_ke8x.webp",
      price: "$19.99",
    },
    {
      name: "Women's Yoga Leggings",
      description:
        "High-waisted leggings for comfort and flexibility during yoga.",
      image:
        "images/sport-wear-img/885efc9418b748e4_netimgn5GTpU.webp",
      price: "$24.99",
    },
    {
      name: "Training Shorts",
      description:
        "Durable and comfortable shorts perfect for gym and outdoor runs.",
      image: "images/sport-wear-img/DV9334084-H_qprkfv.avif",
      price: "$17.99",
    },
    {
      name: "Compression Shirt",
      description:
        "",
      image:
        "images/sport-wear-img/61W8V9si1JL._AC_SX679_.jpg",
      price: "$22.99",
    },
    {
      name: "Women's Yoga Leggings",
      description:
        "Supportive and stylish sports bra for maximum comfort during workouts.",
      image: "images/sport-wear-img/ليقيز-رياضي-شبكي.webp",
      price: "$18.99",
    },
    {
      name: "Running Shoes",
      description:
        "Lightweight running shoes designed for long-distance performance.",
      image: "images/sport-wear-img/ss25-trade_assets-pr-head_to_toe_still-look_1-03.avif",
      price: "$49.99",
    },
    {
      name: "Gym Hoodie",
      description:
        "Warm and flexible hoodie to keep you comfortable after training.",
      image: "images/sport-wear-img/61kRx2g7EsL._AC_SX679_.jpg",
      price: "$29.99",
    },
    {
      name: "Sweatpants",
      description:
        "Soft, tapered sweatpants for casual wear or light workouts.",
      image: "images/sport-wear-img/71RnJfwBHoL._AC_UL480_FMwebp_QL65_.webp",
      price: "$26.99",
    },
    {
      name: "Workout Tank Top",
      description:
        "Sleeveless design with breathable fabric for full mobility.",
      image: "images/sport-wear-img/s-l1600.jpg",
      price: "$16.99",
    },
    {
      name: "Training Jacket",
      description:
        "Lightweight zip-up jacket suitable for all weather training.",
      image: "images/sport-wear-img/71DHBP37xQL._AC_SX679_.jpg",
      price: "$34.99",
    },
    {
      name: "Athletic Socks (3-Pack)",
      description:
        "Moisture control and cushioned support for active feet.",
      image: "images/sport-wear-img/81zPHmtVAwL._AC_SX679_.jpg",
      price: "$9.99",
    },
    {
      name: "Track Suit Set",
      description:
        "Complete track suit set ideal for jogging and warm-ups.",
      image: "images/sport-wear-img/615-5aDBvjL._AC_SY741_.jpg",
      price: "$54.99",
    },
    {
      name: "Fitness Gloves",
      description:
        "Grip-enhancing gloves to protect your hands during lifting.",
      image: "images/sport-wear-img/81N59tEqwXL._AC_SX679_.jpg",
      price: "$14.99",
    },
    {
      name: "Running Cap",
      description:
        "Adjustable, sweat-resistant cap perfect for outdoor runs.",
      image: "images/sport-wear-img/3013B090_100_AC_FT_GLB.webp",
      price: "$12.99",
    },
    {
      name: "Stretch Headband",
      description:
        "Elastic headband to keep hair and sweat out of your face.",
      image: "images/sport-wear-img/717dQNa4AcL._AC_SX679_.jpg",
      price: "$7.99",
    },
    {
      name: "Training Duffel Bag",
      description:
        "Spacious bag with compartments for your gym essentials.",
      image: "images/sport-wear-img/110070_source_1699659098.jpg",
      price: "$39.99",
    },
  
  ];

  const productList = document.getElementById("productList");
  const modal = document.getElementById("productModal");
  const modalImage = document.getElementById("modalImage");
  const modalName = document.getElementById("modalName");
  const modalPrice = document.getElementById("modalPrice");
  const modalDescription = document.getElementById("modalDescription");
  const addToCartBtn = document.getElementById("addToCartBtn");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function displayProducts() {
    productList.innerHTML = "";
    products.forEach((product, index) => {
      const card = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button class="btn" onclick="openModal(${index})">View Details</button>
        <button class="btn" onclick="addToCart(${index})">Add to Cart</button>
      </div>
    `;
      productList.insertAdjacentHTML("beforeend", card);
    });
  }

  function openModal(index) {
    const product = products[index];
    modalImage.src = product.image;
    modalName.textContent = product.name;
    modalPrice.textContent = product.price;
    modalDescription.textContent = product.description;
    modal.style.display = "block";

    addToCartBtn.onclick = () => addToCart(index);
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function addToCart(index) {
    const product = products[index];
    const exists = cart.some((item) => item.name === product.name);
    if (!exists) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} added to cart!`);
    } else {
      alert(`${product.name} is already in the cart.`);
    }
  }

  window.onclick = function (event) {
    if (event.target == modal) closeModal();
  };

  displayProducts();
  