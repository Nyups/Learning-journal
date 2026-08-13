const user_input = document.querySelector("#user_input");
const save_button = document.querySelector("#save");
const greet_button = document.querySelector("#greeting");
const user_area = document.querySelector("#storage");

save_button.addEventListener("click", function() {
    const saved_user = localStorage.setItem("user_name", JSON.stringify(user_input.value))
    console.log("User saved");
})



greet_button.addEventListener("click", function() {
    const grabbed_user = JSON.parse(localStorage.getItem("user_name"));
    console.log('user grabbed');

    const greeting = document.createElement("div");
    greeting.classList.add("user_greeting");

    greeting.innerHTML = `<h4>Hello ${grabbed_user}, How are you doing !</h4>`
    user_area.appendChild(greeting);

    return grabbed_user;
})// (all ok)


// drone card creator
// Character info
const character_name = document.querySelector("#name_input");
const character_race = document.querySelector("#race_selection");
const character_lore = document.querySelector("#character_lore");
// button
const character_button = document.querySelector("#character_save");
const character_load = document.querySelector("#test_load");
// Character storage
const character_zone = document.querySelector("#character_card");
const character_array = [];
const saved_character_array = [];

// Character card creation
character_button.addEventListener("click", function() {
    const character_card = {
    name : character_name.value,
    race : character_race.value,
    lore : character_lore.value
}

    character_array.push(character_card);
    console.log(character_array);

    // saving to local storage
    const saved_card = localStorage.setItem("card", JSON.stringify(character_array));

    console.log(localStorage)
    return character_card
})

character_load.addEventListener("click", function() {
    const loaded_card = JSON.parse(localStorage.getItem("card"));
    saved_character_array.push(loaded_card)
    console.log(saved_character_array);
})
