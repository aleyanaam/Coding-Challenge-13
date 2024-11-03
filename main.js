//Task 2
fetch('https://www.course-api.com/javascript-store-products') //Gets the products from the API
   .then(response => response.json()) 
   .then(data => displayProducts(data)) 
   .catch(error => {
    //Task 4 -Handles any errors that may occur
       console.error('Error! Unable to fetch products:', error); 
       document.getElementById('productContainer').innerHTML = '<p>Unable to load products. Please try again later.</p>';
   });
function displayProducts(products) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; 
 
 //Iterates over each product in the array
    products.forEach(product => { //Searches through for each product
        const productElement = document.createElement('div');
        productElement.classList.add('product');
 
        productElement.innerHTML = `
            <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
            <h3>${product.fields.name}</h3>
            <p>${product.fields.company}</p>
            <p>$${product.fields.price / 100}</p>
        `;
 
        //Appends the product element to the product container
        productContainer.appendChild(productElement); 
    });
 }
 