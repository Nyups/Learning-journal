// Elements
const testArea = document.querySelector('.test-area');
const testZone = document.querySelector('.test-zone');


async function getData() {
  try {
    const response = await fetch('https://dummyjson.com/products/category-list');

    if(!response.ok) {
      throw new Error("couldn't fetch data.")
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Something went wrong', error);
  }
}
// getData(); Ok
const fetchedData = await getData(); // Ok
console.log(fetchedData); // Ok

// Next is showing specific category.

function dataButton(data) {
  for(let a = 0; a < data.length; a++) {
    const clickable = document.createElement('button');
    clickable.textContent = data[a];

    testArea.append(clickable);
  }
}

dataButton(fetchedData); // YAS

// fetch product based on category
async function categoryButton(category) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    if (!response.ok) {
      throw new Error("I didn't find the product :c")
    }
    const product = await response.json();
    return product;
  } catch(error) {
    console.error("Uh oh :", error)
  }
}

//const testData = await categoryButton('laptops'); // ok
//console.log(testData); // ok

function displayData(category) {
  for(let a = 0; a < category.product.length; a++) { // TODO
    const dataCard = document.createElement('div');

    dataCard.innerHTML = `
    <h2>${category[a].title}</h2>
    <p>${category[a].description}</p>
    <p>${category[a].price}</p>`

    testZone.append(dataCard);
  }
} 
displayData('laptops');