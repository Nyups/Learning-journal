// Corrected :

import { getUser, getUserInfo } from "./api-exercise.js";

const button = document.querySelector(".btn");
const searchInput = document.querySelector("#search");

button.addEventListener("click", async function getData() {
  const id = searchInput.value.trim();

  if (!id) {
    console.log("Please enter a user ID!");
    return;
  }

  const userData = await getUser(id);

  if (userData) {
    getUserInfo(userData);
  }
});
