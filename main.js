fetch('https://www.course-api.com/javascript-store-products') //Gets the product from the API
   .then(response => response.json()) 
   .then(data => displayProducts(data))//Calls the function to display products, passing the fetched data
   .catch(error => {
    //Handles any errors that occur 
       console.error('Unable to fetch products, try again later.:', error); 
       document.getElementById('productContainer').innerHTML = '<p> Unable to load products. Please try again later.</p>';
   });
