// CATEGORIES API
// API point : https://dummyjson.com/products/category-list
const category = document.querySelector('#category');

export async function getCategories() {
    try {
        const response = await fetch(`https://dummyjson.com/products/category-list`)
        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }
        const product = await response.json();
        return product;
    } catch (error) {
        console.error("Something went wrong:", error)
    }
     
}

export const productCategories = await getCategories();



export function displayCategory(data) {
    for(let a = 0; a < data.length; a++) {
       // console.log('category: ' + data[a]);
        const productCategory = document.createElement('option');
        productCategory.innerHTML = `<option value="${data[a]}">${data[a]}</option>`
        category.append(productCategory);
    }
    return
}

displayCategory(productCategories);