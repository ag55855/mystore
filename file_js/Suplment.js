const products = [
  {
    name: "Whey Protein Supplement",
    description: "High quality protein for muscle recovery.",
    image: "images/iso.jpg",
    price: "$29.99",
  },
  {
    name: "Creatine Monohydrate",
    description: "Boosts strength and energy for workouts.",
    image: "images/v2.jpg",
    price: "$19.99",
  },
  {
    name: "Pre-Workout Energy Boost",
    description: "Enhances your performance before workouts.",
    image: "images/megawatt-pineapple-pomegranate_900x.webp",
    price: "$24.99",
  },
  {
    name: "BCAA Supplement",
    description: "Supports muscle growth and recovery.",
    image: "images/th.jpg",
    price: "$22.99",
  },
  {
    name: "Glutamine Supplement",
    description: "Helps with muscle recovery and reduces soreness.",
    image: "images/v1.jpg",
    price: "$21.99",
  },
  {
    name: "Fat Burner Supplement",
    description: "Supports fat loss and boosts metabolism.",
    image: "images/965555_web_GNC Total Lean Burn 60_Front_Bottle.avif",
    price: "$26.99",
  },
  {
    name: "Multivitamin Supplement",
    description: "Comprehensive daily vitamins for overall health.",
    image: "images/PH_US_Primal-Multivitamin_mockup_4.webp",
    price: "$18.99",
  },
  {
    name: "Collagen Supplement",
    description: "Promotes skin elasticity and joint health.",
    image: "images/PL-MCP5395-042022-AncientNutrition-MCP-Pure-60srv_SideAHiRes_1450x1450.webp",
    price: "$23.99",
  },
  {
    name: "Electrolyte Supplement",
    description: "Hydrates and replenishes essential electrolytes.",
    image: "images/ec38b49e-9a26-11ea-abef-0697e5ca793e_1769c7dee728a6b4dbc90ccff05b59bf94bb8060_IMG_6201 1.avif",
    price: "$14.99",
  },
  {
    name: "Casein Protein Supplement",
    description: "Slow-digesting protein for overnight recovery.",
    image: "images/download.webp",
    price: "$34.99",
  },
  {
    name: "L-Carnitine Supplement",
    description: "Supports fat metabolism and energy production.",
    image: "images/01974.avif",
    price: "$19.99",
  },
  {
    name: "ZMA Supplement",
    description: "Supports muscle recovery and improves sleep.",
    image: "images/533831_Jym_ZMA_Bottle_Front.avif",
    price: "$17.99",
  },
  {
    name: "Vitamin D3 Supplement",
    description: "Essential for bone health and immune support.",
    image: "images/01713.avif",
    price: "$12.99",
  },
  {
    name: "Magnesium Supplement",
    description: "Helps with muscle relaxation and recovery.",
    image: "images/Nature-s-Bounty-High-Absorption-Magnesium-Glycinate-Supplements-240mg-Supports-Muscle-Relaxation-Bone-Heart-and-Nerve-Health-60-Capsules_55e15ed0-49ae-44ed-a083-76054a983a44.bd245bef1.avif",
    price: "$16.99",
  },
  {
    name: "Probiotic Supplement",
    description: "Supports gut health and digestion.",
    image: "images/2642333.avif",
    price: "$19.99",
  },
  {
    name: "Omega-3 Fish Oil Supplement",
    description: "",
    image: "images/Spring-Valley-Proactive-Support-Omega-3-Mini-from-Fish-Oil-Dietary-Supplement-1000-mg-120-Count_d4a07f9a-4016-4bf5-9901-a91eeefa3b8f.7297fa73bd68793fcfa5869ab80b10dc.avif",
    price: "$21.99",
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