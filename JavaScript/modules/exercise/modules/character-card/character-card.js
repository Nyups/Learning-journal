export function cardCreation(name,level,trivia,item) {
    const newCard = {
    name: name,
    level: level,
    trivia: trivia,
    item: item
};

    const card = document.createElement('div');
    card.innerHTML = `<h2>${newCard.name}</h2>
    <p>Level : ${newCard.level}</p>
    <p>Trivia : ${newCard.trivia}</p>`

    const inventoryList = document.createElement('ul');
    card.append(inventoryList);
    // [NOTE]:
    // Those two create the ul and append it before the loop so the <li>
    // we create next have a place to be appended too.

    newCard.item.forEach(element => {
        const newItem = document.createElement('li');
        newItem.innerText = element;
        inventoryList.append(newItem);
    });
    // [NOTE]:
    // "element" represent the current element in the array on each iteraton.
    // in our case the array is a parameter in module we export it to.

    return card;

}