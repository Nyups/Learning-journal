export function cardCreation(character) {
    const newCard = {
    name: character,
    level: 27,
    trivia: `${character} love to code but also have the bad habit of underselling his ability.`,
    item: ['laptop','tea','game console']
};

    const card = document.createElement('div');
    card.innerHTML = `<h2>${newCard.name}</h2>
    <p>Level : ${newCard.level}</p>
    <p>Trivia : ${newCard.trivia}</p>
    <p>Inventory : ${newCard.item}</p>`

    return card;

}