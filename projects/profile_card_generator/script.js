// MEMO

// Function reference
// changeCard

// Function execution
// changeCard()


// Card test
/*
const card = {
    title : document.getElementById("card-title"),
    description : document.getElementById("card-description")
};

console.log(card); // OK



function changeCard() {
    card.title.textContent = "Cyn";
    card.description.textContent = "Love J";
};

document.getElementById("action").addEventListener("click", changeCard);
*/

// Corrected version :
const card = {
    title: document.getElementById("card-title"),
    description: document.getElementById("card-description")
};

console.log(card);

function changeCard() {
    card.title.textContent = "Cyn";
    card.description.textContent = "Love J";
}

document
    .getElementById("action")
    .addEventListener("click", changeCard);



// Actual (fake) Card generator

let cards = [
    {
        title: "Card 01",
        description :"Uehehe number one... Good pull."
    },
    {
        title: "Card 02",
        description :"Hmmm... Hello luigi, eternal number 2"
    },
    {
        title: "Card 03",
        description :"It's okay to just participate..."
    },
    {
        title: "Card 04",
        description :"Meh"
    }
]; // Index : [0] to [3]

function randomCard() {
    for (let count = 0; count < cards.length; count++) {
        console.log(cards[count]);
    }
}

document.getElementById("test-button")
.addEventListener("click", randomCard);