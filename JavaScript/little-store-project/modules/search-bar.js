// PRODUCT API
// API point : `https://dummyjson.com/products/category/${}`
const renderArea = document.querySelector('.render-area');
const selectedOption = document.querySelector('option');

export async function pickCategory(category) {
    try {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`)
        if (!response.ok) {
            throw new Error("Failed to match the category");
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error("Invalid category: ", error);
    }
}

pickCategory();

async function displayProduct(product) {
    try {
        const response = await pickCategory(product);
        if (!response.ok) {
            throw new Error("Failed to fetch products!");
        }
        const fetched = await response.json();
        
        for(let a = 0; a < product.length; a++){
            const productCard = document.createElement('div');
            productCard.innerHTML = `<h2>${product.title}</h2>
            <p>${product.description}</p>`
            renderArea.append(productCard);
        }
        return fetched;
    } catch (error) {
        console.error('Something went wrong', error);
    }
}

selectedOption.addEventListener("change", );


// .title .description
