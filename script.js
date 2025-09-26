// ==================== Hardcoded Products ====================
const data = [
    { id: '1', title: 'Men black sandal infinite aura', image: 'sandals-vechlo.png', oldPrice: 1500, newPrice: 277, discount: '80%', category: 'Fashion', link: "https://fktr.in/1biPxnC" },
    { id: '2', title: 'Men Solid Round Neck Cotton Blend Black T-Shirt', image: 'pro2.png', oldPrice: 699, newPrice: 249, discount: '65%', category: 'Fashion', link: "https://fktr.in/q8VD7Xs" },
    { id: '3', title: 'Men Regular Fit Solid Button Down Collar Formal Shirt', image: 'pro3.png', oldPrice: 999, newPrice: 286, discount: '70%', category: 'Fashion', link: "https://fktr.in/NOJUrAm" },
    { id: '4', title: 'Casual Sneakers Shoes For Men Mexico-11 Sneakers For Men  (Green , 9)', image: 'Screenshot 2025-04-06 080317.png', oldPrice: 1499, newPrice: 949, discount: '36%', category: 'Fashion', link: "https://fktr.in/OYOi5Zj" },
    { id: '5', title: 'Frozen Girls Casual Cotton Lycra Blend Crop Top  (Multicolor, Pack of 1)', image: 'pro5.png', oldPrice: 999, newPrice: 342, discount: '65%', category: 'Fashion', link: "https://fktr.in/Tn25VVW" },
    { id: '6', title: 'Women Regular Fit Self Design Casual Shirt', image: 'pro6.png', oldPrice: 1499, newPrice: 370, discount: '75%', category: 'Fashion', link: "https://fktr.in/wx9U1Fr" },
    { id: '7', title: 'Women Printed Pure Cotton Straight Kurta  (Red)', image: 'pro7.png', oldPrice: 999, newPrice: 328, discount: '67%', category: 'Fashion', link: "https://fktr.in/xapPHhf" },
    { id: '8', title: 'Forbuz Monster Truck Toy for Kids, Amazing Toys, 360 Degree Stunt Truck  (Red, Green, Violet, Orange)', image: 'pro8.png', oldPrice: 399, newPrice: 20, discount: '94%', category: 'Accessories', link: "https://fktr.in/pub0QjN" },
    { id: '9', title: 'Leo Creation 144 TC Cotton Double Jaipuri Prints Flat Bedsheet  (Pack of 1, Blue, Green, Orange, Dark Blue, Black, Brown)', image: 'pro9.png', oldPrice: 2499, newPrice: 299, discount: '88%', category: 'Fashion', link: "https://fktr.in/snMu5VT" },
    { id: '10', title: 'Embellished Bollywood Chiffon Saree  (Dark Green)', image: 'pro10.png', oldPrice: 3299, newPrice: 489, discount: '85%', category: 'Fashion', link: "https://fktr.in/CLlHJyc" },
    { id: '11', title: 'Boys Festive & Party Kurta and Pyjama Set  (Green Pack of 1)', image: 'pro11.png', oldPrice: 1299, newPrice: 633, discount: '51%', category: 'Fashion', link: "https://fktr.in/9mQoMTH" },
    { id: '12', title: 'Lite Sports Shoe Running Shoes For Men  (White , 6)', image: 'pro12.png', oldPrice: 2499, newPrice: 492, discount: '80%', category: 'Fashion', link: "https://fktr.in/69iiG1w" },
    { id: '13', title: 'Men Regular Fit Printed Spread Collar Casual Shirt', image: 'pro13.png', oldPrice: 999, newPrice: 222, discount: '77%', category: 'Fashion', link: "https://fktr.in/PWj5WPo" },
    { id: '14', title: 'Pack of 2 Women Relaxed Black, Maroon Viscose Rayon Trousers', image: 'pro14.png', oldPrice: 999, newPrice: 341, discount: '65%', category: 'Fashion', link: "https://fktr.in/owS1ZlG" },
    { id: '15', title: 'Women Relaxed Orange Viscose Rayon Trousers', image: 'pro15.png', oldPrice: 999, newPrice: 220, discount: '77%', category: 'Fashion', link: "https://fktr.in/xGIF0B2" },
    { id: '16', title: 'Women Chikan Embroidery Pure Cotton Straight Kurta  (Green)', image: 'pro16.png', oldPrice: 950, newPrice: 248, discount: '73%', category: 'Fashion', link: "https://fktr.in/9Vhb570" },
    { id: '17', title: 'Digital Watch - For Men & Women Latest Fashion Green Digital Army Shockproof Trending Designer Best Seller', image: 'pro17.png', oldPrice: 999, newPrice: 249, discount: '75%', category: 'Fashion', link: "https://fktr.in/EP5pjmG" },
    { id: '18', title: 'Medium 25 L Backpack DAYPACK Bags Backpack for daily use library office 25 L No Backpack (Black)', image: 'pro18.png', oldPrice: 799, newPrice: 253, discount: '64%', category: 'Fashion', link: "https://bitli.in/CCgPtci" },
    { id: '19', title: 'BACKPACK FOR GIRLS AND BOYS 35 L Backpack (Blue)', image: 'pro19.png', oldPrice: 1199, newPrice: 243, discount: '77%', category: 'Fashion', link: "https://bitli.in/Lvm1wlY" },
    { id: '20', title: 'Slim Men Blue Jeans', image: 'pro20.png', oldPrice: 1899, newPrice: 423, discount: '76%', category: 'Fashion', link: "https://bitli.in/roKHp23" },
    { id: '21', title: 'Slim Men Dark Grey Jeans', image: 'pro21.png', oldPrice: 1899, newPrice: 449, discount: '75%', category: 'Fashion', link: "https://bitli.in/uh3W1s1" },
    { id: '22', title: 'BZILO 1 Piece Mini LED Night Natural White USB Light Bulb for Indoor & Outdoor_43 Model_0043 Laptop Accessory (Multicolor)', image: 'pro22.png', oldPrice:199 , newPrice: 25, discount: '87%', category: 'Electronics', link: "https://bitli.in/ebZxchc" },
    { id: '23', title: 'RPMSD Flexible mini USB LED light LED Lamp 5V 1.2W', image: 'pro23.png', oldPrice: 99, newPrice: 36, discount: '63%', category: 'Electronics', link: "https://bitli.in/yie82Sp" },
    { id: '24', title: 'FKU LED TIE LED Tie, Light Up Tie Light Up Neck Ties Man Light Up Fanny Ties Novelty Necktie Led Light (MUTLICOLOURED)', image: 'pro24.png', oldPrice: 4299, newPrice: 2799, discount: '34%', category: 'Fashion', link: "https://bitli.in/9f7T1Qy" },
    { id: '25', title: 'AI-302 Vegetable & Fruit Slicer (pack of 1)', image: 'pro25.png', oldPrice: 399, newPrice: 110, discount: '72%', category: 'Accessories', link: "https://bitli.in/fjwn2Yr" },
    { id: '26', title: 'VYAR SuperSpeed Hub with High-Speed Data Transfer for PC, Laptop, and Mac Extension', image: 'pro26.png', oldPrice: 285, newPrice: 148, discount: '48%', category: 'Electronics', link: "https://bitli.in/7kp3BpO" }
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
          <img src="${item.image || 'default.png'}" alt="${item.title || 'No Title'}"/>
          <div class="product-title">${item.title || 'No Title'}</div>
          <div class="price">
            <span class="old-price">₹${item.oldPrice || 0}</span>
            <span class="new-price"> ₹${item.newPrice || 0}</span>
          </div>
          <div class="discount">SAVE ${item.discount || '0%'}</div>
          <a href="${item.link || '#'}" target="_blank" class="buy-btn">BUY NOW</a>
        </div>
      `;
    });
}

// ==================== Infinite Scroll ====================
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

// ==================== Google Sheet CSV Fetch with PapaParse ====================
const csvURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRrj_Q_WPzGYRdRH2WJL_RCxttW9Dc2DYp5BjFStjmdwsXY28O4E3le1BG3v8aNA2S7kRTq8f9TWVjq/pub?gid=0&single=true&output=csv";

Papa.parse(csvURL, {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
        const sheetProducts = results.data.map(obj => ({
            id: `sheet-${obj.id || Math.random()}`,
            title: obj.name || "No Title",
            image: obj.image || "default.png",
            oldPrice: parseFloat(obj.oldPrice) || 0,
            newPrice: parseFloat(obj.newPrice) || 0,
            discount: obj.discount || "0%",
            category: obj.category || "Others",
            link: obj.link || "#"
        }));
