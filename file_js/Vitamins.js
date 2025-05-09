const products = [
    {
      name: "Vitamin C 1000mg",
      description:
        "Boosts immunity and supports skin health with powerful antioxidants.",
      image:
        "images/vitamins-img/th (1).jpg",
      price: "$19.99",
    },
    {
      name: "Omega-3 Fish Oil",
      description:
        "Supports heart, brain, and joint health with essential fatty acids.",
      image: "images/Spring-Valley-Proactive-Support-Omega-3-Mini-from-Fish-Oil-Dietary-Supplement-1000-mg-120-Count_d4a07f9a-4016-4bf5-9901-a91eeefa3b8f.7297fa73bd68793fcfa5869ab80b10dc.avif",
      price: "$24.99",
    },
    {
      name: "Multivitamin Complex",
      description:
        "Complete daily formula to support overall health and wellness.",
      image: "images/vitamins-img/th.jpg",
      price: "$17.99",
    },
    {
      name: "Vitamin D3 5000 IU",
      description: "Supports bone health and immune system function.",
      image: "images/vitamins-img/th (2).jpg",
      price: "$22.99",
    },
    {
      name: "Magnesium Citrate",
      description: "Promotes muscle relaxation and healthy nerve function.",
      image: "images/vitamins-img/th (3).jpg",
      price: "$18.99",
    },
    {
      name: "Zinc Gluconate",
      description: "Essential mineral for immune support and skin health.",
      image: "images/vitamins-img/th (4).jpg",
      price: "$14.99",
    },
    {
      name: "B-Complex Vitamins",
      description:
        "Supports energy metabolism and nervous system function.",
      image: "images/vitamins-img/th (5).jpg",
      price: "$21.99",
    },
    {
      name: "Calcium + Vitamin D",
      description: "Strengthens bones and supports muscle function.",
      image: "images/vitamins-img/th (6).jpg",
      price: "$26.99",
    },
    {
      name: "Iron Supplement",
      description:
        "Helps combat fatigue and supports red blood cell production.",
      image: "images/vitamins-img/th (7).jpg",
      price: "$16.99",
    },
    {
      name: "CoQ10 200mg",
      description: "Promotes heart health and cellular energy production.",
      image: "images/vitamins-img/th (8).jpg",
      price: "$34.99",
    },
    {
      name: "Probiotic 40 Billion CFU",
      description:
        "images/vitamins-img/th (9).jpg",
      image: "images/vitamins-img/th (9).jpg",
      price: "$29.99",
    },
    {
      name: "Turmeric Curcumin",
      description:
        "Natural anti-inflammatory to support joint and brain health.",
      image: "images/vitamins-img/th (10).jpg",
      price: "$27.99",
    },
    {
      name: "Collagen Peptides",
      description:
        "Supports skin elasticity, hair strength, and joint health.",
      image: "images/vitamins-img/th (11).jpg",
      price: "$39.99",
    },
    {
      name: "Ashwagandha Extract",
      description:
        "Natural adaptogen to help manage stress and energy levels.",
      image: "images/vitamins-img/th.jpg",
      price: "$12.99",
    },
    {
      name: "Melatonin 10mg",
      description:
        "Promotes restful sleep and supports healthy sleep cycles.",
      image: "images/vitamins-img/th (14).jpg",
      price: "$9.99",
    },
    {
      name: "L-Carnitine",
      description:
        "Helps convert fat into energy and supports exercise performance.",
      image: "images/vitamins-img/th (9).jpg",
      price: "$32.99",
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