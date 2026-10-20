// Pokemon search module
const pokecard = document.querySelector('.poke-card'); // Where data is appended
const pokeInput = document.querySelector('.poke-input'); // Search bar
const pokeSearch = document.querySelector('.poke-search'); // Search button

async function getPokemon(pokemon) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (!response.ok) {
      throw new Error('Failed to find the pokemon.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Something went wrong:", error);
    return null; // Return null so we can handle errors gracefully
  }
}

// Event listener for the search button
pokeSearch.addEventListener("click", async () => {
  // 1. Get the value from the input and make it lowercase
  const searchTerm = pokeInput.value.toLowerCase().trim();
  
  if (!searchTerm) return; // Stop if the input is empty

  // 2. Fetch the Pokémon data using the search term
  const pokemonData = await getPokemon(searchTerm);

  // 3. Handle case where Pokémon isn't found
  if (!pokemonData) {
    pokecard.innerHTML = `<p>Pokémon not found. Try again!</p>`;
    return;
  }

  // 4. Clear previous card(s) if you only want to show one at a time
  pokecard.innerHTML = '';

  // 5. Create and display the new card
  const newCard = document.createElement('div');
  newCard.innerHTML = `
    <h2>${pokemonData.name}</h2>
    <h3>ID: ${pokemonData.id}</h3>
    <p>Height: ${pokemonData.height}</p>
    <p>Weight: ${pokemonData.weight}</p>
    <p>Base experience: ${pokemonData.base_experience}</p>
  `;

  pokecard.append(newCard);
});