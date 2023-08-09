// ⭐ ## Fetching Data from API ##

async function getProductData() {
    const response = await fetch("https://dummyjson.com/products")
    console.log("Our response is: ", response);
    const data = await response.json();
    console.log("Our data is: ", data)
    
}

getProductData();

