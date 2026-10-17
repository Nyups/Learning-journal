async function getData() {
  try {
    const response = await fetch('https://dummyjson.com/products/category-list');

    if(!response.ok) {
      throw new Error("couldn't fetch data.")
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Something went wrong', error);
  }
}
getData();// Ok

// Next is showing specific category.
