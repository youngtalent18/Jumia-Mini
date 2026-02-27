const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sort-select");
const filterButtons = document.querySelectorAll(".option");
const productCount = document.getElementById("number");
const productDetailsContainer = document.getElementById("product-container");

let filteredProducts = [...products];

function displayProducts(productArray) {
  productGrid.innerHTML = "";

  if (productArray.length === 0) {
    productGrid.innerHTML = `
         <div class="not-found-wrapper">
            <div class="not-found-box">
                <i class="fas fa-search"></i>
                <h1>No Products Found</h1>
                <p>Try searching with a different keyword.</p>
            </div>
        </div>`;
    return;
  }

  productArray.forEach(product => {
    const discount = Math.round(
      ((product.oldPrice - product.price) / product.oldPrice) * 100
    );

    productGrid.innerHTML += `
      <div class="product-card">
        <div class="badge">-${discount}%</div>
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <div class="price-box">
          <span class="price">GHS ${product.price}</span>
          <span class="old-price">GHS ${product.oldPrice}</span>
        </div>
        <div class="rating">
          ${"★".repeat(product.rating)}${"☆".repeat(5 - product.rating)}
        </div>
        <div class="product-buttons">
          <button onclick="addToCart(${product.id})">Add to Cart</button>
          <div class="product-icons">
            <i class="fas fa-eye" title="View Details" onclick="viewDetails(${product.id})"></i>
          </div>
        </div>
      </div>
    `;
  });
}

searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();

  filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(value)
  );

  displayProducts(filteredProducts);
});

filterButtons.forEach(button => {
  button.addEventListener("click", function () {
    document
      .querySelector(".option.active")
      ?.classList.remove("active");

    this.classList.add("active");

    const category = this.textContent.trim();

    if (category === "All") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter(
        product => product.category === category
      );
    }

    displayProducts(filteredProducts);
  });
});

sortSelect.addEventListener("change", function () {
  let sorted = [...filteredProducts];

  if (this.value === "price-low") {
    sorted.sort((a, b) => a.price - b.price);
  }

  if (this.value === "price-high") {
    sorted.sort((a, b) => b.price - a.price);
  }

  if (this.value === "rating") {
    sorted.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(sorted);
});

function updateProductCount() {
    const count = filteredProducts.length;
    productCount.innerHTML = ` | ${count} product${count !== 1 ? 's' : ''}`;
}

function viewDetails(id) {
  const selected = products.find(p => p.id === id);
  localStorage.setItem("selectedProduct", JSON.stringify(selected));
  window.location.href = "product.html";
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showToast(`Added ${product.name} to cart!`);
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("count").textContent = totalItems;
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000); // toast disappears after 3 seconds
}

displayProducts(products);
updateCartCount();
updateProductCount();
