// Corrected version
const category = document.querySelector('#category');
const renderArea = document.querySelector('.render-area');

// CATEGORIES API
// Fetch all available categories

async function getCategories() {
  try {
    const response = await fetch(
      'https://dummyjson.com/products/category-list'
    );

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const product = await response.json();
    return product;

  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

// Display categories in the dropdown

function displayCategory(data) {
  for (let a = 0; a < data.length; a++) {
    const productCategory = document.createElement('option');

    productCategory.value = data[a];
    productCategory.textContent = data[a];

    category.append(productCategory);
  }
}

// PRODUCT API
// Fetch products belonging to the selected category

async function pickCategory(categoryName) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${categoryName}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await response.json();
    return products;

  } catch (error) {
    console.error("Invalid category:", error);
  }
}

// Display the fetched products

function displayProduct(data) {
  renderArea.innerHTML = "";

  for (let a = 0; a < data.products.length; a++) {
    const productCard = document.createElement('div');

    productCard.innerHTML = `
      <h2>${data.products[a].title}</h2>
      <p>${data.products[a].description}</p>
      <p>Price: €${data.products[a].price}</p>
    `;

    renderArea.append(productCard);
  }
}

// Listen for category selection

category.addEventListener("change", async () => {
  const selectedCategory = category.value;

  const products = await pickCategory(selectedCategory);

  if (products) {
    displayProduct(products);
  }
});

// Start the app

const productCategories = await getCategories();

if (productCategories) {
  displayCategory(productCategories);
}
