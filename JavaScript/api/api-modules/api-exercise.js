// Easy exercise
async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    console.log(`Name : ${data.name} Email : ${data.email}.`)
}

getUser();

// Hard exercise : Public APi card render export
export async function getCard() {
   // Fetch data OK
   const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
   const cardData = await response.json();
   return cardData;
}

export function createCard(variable) {
    // Card creation OK
    const cardArea = document.querySelector('.card-area') //yes it exist in the html
    const userCard = document.createElement('div');
    userCard.innerHTML = `
    <h2>ID: ${variable.id}</h2>
    <h2>User: ${variable.name}</h2>
    <h2>Username: ${variable.username}</h2>
    <p>Email: ${variable.email} | Phone Number: ${variable.phone} </p>
    <p>Website: ${variable.website}</p>`
    cardArea.append(userCard);
    return userCard;
}