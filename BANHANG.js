

const products = [
    { name: 'Nike Running', price: 19.99, image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ca79d356-421f-4a96-a823-b695f15c7a34/in-season-tr-13-workout-shoes-BDTlPf.png' },
    { name: 'Nike Running', price: 29.99, image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9e807aad-42e9-46e5-8f08-34e141e718e5/nikecourt-legacy-shoes-PKg8wX.png' },
    { name: 'Jordan', price: 29.99, image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
    { name: 'Nike Running', price: 29.99, image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/585e2cd2-4f2a-408c-a8ba-f89952cdf332/revolution-6-road-running-shoes-NC0P7k.png'},
    { name: 'Nike Running', price: 29.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyr6WHu4eAaBz4vTeXgyydKJbVdhBQBTwwwU6z-xN5knAE3RwkkFwCz5SfkOqdUxdybBs&usqp=CAU'},
    { name: 'Nike Running', price: 29.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8pqU4LH9Y94mF7FeXxhImsobnqrY_ZsHC7KhUUaTwSmJtT1BbB2SRYNth95dqiCzVIM&usqp=CAU'},
   

];

const newProducts = [
    { name: 'Product 2', price: 29.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQkBah7ue9I8LNN2dCEzgSpj4fZShnbEGeFA&usqp=CAU'},
    { name: 'Nike Running', price: 19.99, image: 'https://cdn.sanity.io/images/pu5wtzfc/production/dd916b9e22c955dbd414a7fa5c2041f31ad204c4-2000x1250.jpg/air-jordan-8-playoff-305381-062-release-date-2023-1.jpg?w=320&h=200&auto=format' },
    { name: 'Nike Running', price: 29.99, image: 'https://www.kicksonfire.com/wp-content/uploads/2023/01/Air-Jordan-11-DMP-Defining-Moments-2023-Release-Date.jpeg?x58464' },
    { name: 'Jordan', price: 29.99, image: 'https://staticg.sportskeeda.com/editor/2023/02/7524e-16763706803447-1920.jpg' },
    { name: 'Nike Running', price: 29.99, image: 'https://img.buzzfeed.com/buzzfeed-static/complex/images/Y19jcm9wLGhfMTA5Nix3XzE4ODMseF8zNDIseV8xNw==/c0wsk7ownvupkb8xbtmv/air-jordan-3-iii-wizards-2023-release-date.png'},
    { name: 'Nike Running', price: 29.99, image: 'https://cdn.sanity.io/images/pu5wtzfc/production/99bb960f7f9b1ba8765b15fccdce05063dd5c208-1200x749.jpg'},
    { name: 'Nike Running', price: 29.99, image: ''},
  

];

function displayProducts() {
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Thêm vào giỏ hàng</button>
        `;

        productsContainer.appendChild(productElement);
    });
}

function addToCart(productName, productPrice) {
  
    alert(`Added ${productName} to cart. Price: $${productPrice.toFixed(2)}`);
}


window.onload = displayProducts;
window.onload = displayProducts;
function displayProducts() {
    const productsContainer = document.getElementById('products');
    displayProductList(productsContainer, products);
    displayProductList(productsContainer, newProducts);
}
function displayProductList(container, productList) {
    productList.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;

        container.appendChild(productElement);
    });
}
