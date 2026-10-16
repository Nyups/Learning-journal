export async function getCard() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const cardData = await response.json();
        return cardData;
    } catch (error) {
        console.error("Failed to fetch user:", error);
    }
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


export async function getUser(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if (!response.ok) {
            throw new Error("failed to fetch user!");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("failed to get a user!", error);
    }
}

export function getUserInfo(user,id) {
    const userArea = document.querySelector('.card-area')
    const userInfo = document.createElement('div');
    userInfo.innerHTML = `
    <h2>ID : ${user.id}</h2>
    <h2>${user.name}</h2>
    <p>${user.email}</p>
    <p>${user.address.city}</p>`
    userArea.append(userInfo);
    return userInfo
}

// Next exercise
// Your next task: modify the project so the user can enter an ID,
// click a button, and display that user's card. If the ID doesn't exist,
// show an error message on the page instead of crashing.