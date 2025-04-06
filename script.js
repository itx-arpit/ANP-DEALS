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
        image: 'Screenshot 2025-04-06 075110.png',
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

  