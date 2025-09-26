// ==================== Hardcoded Products ====================
const data = [
    {
      id: '1',
      title: 'Men black sandal infinite aura',
      image: 'sandals-vechlo.png',
      oldPrice: 1500,
      newPrice: 277,
      discount: '80%',
      category: 'Fashion',
      link: "https://fktr.in/1biPxnC",
    },
    {
      id: '2',
      title: 'Men Solid Round Neck Cotton Blend Black T-Shirt',
      image: 'pro2.png',
      oldPrice: 699,
      newPrice: 249,
      discount: '65%',
      category: 'Fashion',
      link: "https://fktr.in/q8VD7Xs",
    },
    {
        id: '3',
        title: 'Men Regular Fit Solid Button Down Collar Formal Shirt',
        image: 'pro3.png',
        oldPrice: 999,
        newPrice: 286,
        discount: '70%',
        category: 'Fashion',
        link: "https://fktr.in/NOJUrAm",
    },
    // ... baki ke products yahan paste karo (jaise tumhare purane code me hain)
];

// ==================== Categories ====================
const categories = ['All', 'Electronics', 'Accessories', 'Books', 'Fashion'];

// ==================== DOM Elements ====================
const searchInput = document.getElementById('searchInput');
const productGrid = document.getElementById('productGrid');
const categoriesDiv = document.getElementById('categories');
const darkToggle = document.getElementById('darkToggle');

let selectedCategory = 'All';
let productCards = [];
let visibleCount = 20;
let loading = false;

// ==================== Create Category Buttons ====================
categories.forEach(cat => {
    const btn = document.createElement('div');
    btn.textContent = cat;
    btn.className = 'category';
    if (cat === selectedCategory) btn.classList.add('active');
    btn.onclick = () => {
        selectedCategory = cat;
        document.querySelectorAll('.category').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        renderProducts();
        updateProductCards();
    };
    categoriesDiv.appendChild(btn);
});

// ==================== Dark Mode Toggle ====================
darkToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

// ==================== Render Products ====================
function renderProducts() {
    const search = searchInput.value.toLowerCase();
    const filtered = data.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(search);
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    productGrid.innerHTML = '';
    filtered.forEach(item => {
        productGrid.innerHTML += `
        <div class="product-card">
          <img src="${item.image}" alt="${item.title}"/>
          <div class="product-title">${item.title}</div>
          <div class="price">
            <span class="old-price">₹${item.oldPrice}</span>
            <span class="new-price"> ₹${item.newPrice}</span>
          </div>
          <div class="discount">SAVE ${item.discount}</div>
          <a href="${item.link}" target="_blank" class="buy-btn">BUY NOW</a>
        </div>
      `;
    });
}

// ==================== Infinite Scroll Functions ====================
function showProducts() {
    productCards.forEach((card, i) => {
        card.style.display = i < visibleCount ? "block" : "none";
    });
}

function loadMoreOnScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
        loading = true;
        setTimeout(() => {
            visibleCount += 20;
            showProducts();
            loading = false;
        }, 500);
    }
}

function updateProductCards() {
    productCards = Array.from(document.querySelectorAll(".product-card"));
    visibleCount = 20; // reset visible count
    showProducts();
}

// ==================== Search Event ====================
searchInput.addEventListener('input', () => {
    renderProducts();
    updateProductCards();
});

// ==================== Initial Render ====================
renderProducts();
updateProductCards();
window.addEventListener("scroll", loadMoreOnScroll);

// ==================== Google Sheet Fetch ====================
const sheetID = "YOUR_SHEET_ID"; // yahan apna Google Sheet ID daalo
const sheetURL = `https://spreadsheets.google.com/feeds/list/${sheetID}/od6/public/values?alt=json`;

fetch(sheetURL)
  .then(res => res.json())
  .then(sheetData => {
    const sheetProducts = sheetData.feed.entry.map(item => ({
      id: `sheet-${item.gsx$id?.$t || Math.random()}`,
      title: item.gsx$name?.$t || "No Title",
      image: item.gsx$image?.$t || "default.png",
      oldPrice: item.gsx$oldprice?.$t || 0,
      newPrice: item.gsx$newprice?.$t || 0,
      discount: item.gsx$discount?.$t || "0%",
      category: item.gsx$category?.$t || "Others",
      link: item.gsx$affiliatelink?.$t || "#"
    }));

    // Merge existing data with sheet products
    data.push(...sheetProducts);

    // Re-render products
    renderProducts();
    updateProductCards();
  })
  .catch(err => console.log("Error fetching sheet data: ", err));
