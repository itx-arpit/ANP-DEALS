const data = [
    {
      id: '1',
      title: 'Men black sandal infinite aura',
      image: 'sandals-vechlo.png',
      oldPrice: 1500,
      newPrice: 277,
      discount: '80%',
      category: 'fashion',
      link: "https://fktr.in/1biPxnC",
    },
    {
      id: '2',
      title: 'Men Solid Round Neck Cotton Blend Black T-Shirt',
      image: 'pro2.png',
      oldPrice: 699,
      newPrice: 249,
      discount: '65%',
      category: 'fashion',
      link: "https://fktr.in/q8VD7Xs",
    },
    {
        id: '3',
        title: 'Men Regular Fit Solid Button Down Collar Formal Shirt',
        image: 'pro3.png',
        oldPrice: 999,
        newPrice: 286,
        discount: '70%',
        category: 'fashion',
        link: "https://fktr.in/NOJUrAm",
    },
    {
        id: '4',
        title: 'Casual Sneakers Shoes For Men Mexico-11 Sneakers For Men  (Green , 9)',
        image: 'Screenshot 2025-04-06 080317.png',
        oldPrice: 1499,
        newPrice: 949,
        discount: '36%',
        category: 'fashion',
        link: "https://fktr.in/OYOi5Zj"
    },
{
        id: '5',
        title: 'Frozen Girls Casual Cotton Lycra Blend Crop Top  (Multicolor, Pack of 1)',
        image: 'pro5.png',
        oldPrice: 999,
        newPrice: 342,
        discount: '65%',
        category: 'fashion',
        link: "https://fktr.in/Tn25VVW"
    },
    {
        id: '6',
        title: 'Women Regular Fit Self Design Casual Shirt',
        image: 'pro6.png',
        oldPrice: 1499,
        newPrice: 370,
        discount: '75%',
        category: 'fashion',
        link: "https://fktr.in/wx9U1Fr"
    },
    {
        id: '7',
        title: 'Women Printed Pure Cotton Straight Kurta  (Red)',
        image: 'pro7.png',
        oldPrice: 999,
        newPrice: 328,
        discount: '67%',
        category: 'fashion',
        link: "https://fktr.in/xapPHhf"
    },
    {
        id: '8',
        title: 'Forbuz Monster Truck Toy for Kids, Amazing Toys, 360 Degree Stunt Truck  (Red, Green, Violet, Orange',
        image: 'pro8.png',
        oldPrice: 399,
        newPrice: 20,
        discount: '94%',
        category: 'Accessories',
        link: "https://fktr.in/pub0QjN"
    },
    {
        id: '9',
        title: 'Leo Creation 144 TC Cotton Double Jaipuri Prints Flat Bedsheet  (Pack of 1, Blue, Green, Orange, Dark Blue, Black, Brown)',
        image: 'pro9.png',
        oldPrice: 2499,
        newPrice: 299,
        discount: '88%',
        category: 'fashion',
        link: "https://fktr.in/snMu5VT"
    },
      {
        id: '10',
        title: 'Embellished Bollywood Chiffon Saree  (Dark Green)',
        image: 'pro10.png',
        oldPrice: 3299,
        newPrice: 489,
        discount: '85%',
        category: 'fashion',
        link: "https://fktr.in/CLlHJyc"
    },
      {
        id: '11',
        title: 'Boys Festive & Party Kurta and Pyjama Set  (Green Pack of 1)',
        image: 'pro11.png',
        oldPrice: 1299,
        newPrice: 633 ,
        discount: '51%',
        category: 'fashion',
        link: "https://fktr.in/9mQoMTH"
    },
      {
        id: '12',
        title: 'Lite Sports Shoe Running Shoes For Men  (White , 6)',
        image: 'pro12.png',
        oldPrice: 2499,
        newPrice: 492,
        discount: '80%',
        category: 'fashion',
        link: "https://fktr.in/69iiG1w"
    },
      {
        id: '13',
        title: 'Men Regular Fit Printed Spread Collar Casual Shirt',
        image: 'pro13.png',
        oldPrice: 999,
        newPrice: 222,
        discount: '77%',
        category: 'fashion',
        link: "https://fktr.in/PWj5WPo"
    },
    
    
    // Add more products...
  ];
     
  const categories = ['All', 'Electronics', 'Accessories', 'Books', 'Fashion'];
  
  const searchInput = document.getElementById('searchInput');
  const productGrid = document.getElementById('productGrid');
  const categoriesDiv = document.getElementById('categories');
  const darkToggle = document.getElementById('darkToggle');
  
  let selectedCategory = 'All';
  
  // Create category buttons
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
    };
    categoriesDiv.appendChild(btn);
  });
  
  searchInput.addEventListener('input', renderProducts);
  
  darkToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
  });
  
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
  
  renderProducts();

  
