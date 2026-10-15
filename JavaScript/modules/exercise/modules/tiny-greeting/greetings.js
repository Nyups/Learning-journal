export function helloCard(name) {
    const greetCard = document.createElement('div');
    greetCard.innerHTML = `<h2>Hello , ${name}</h2>
    <p>Salutation. <br>Today we are greeting ${name}.</p>`

    return greetCard;
}