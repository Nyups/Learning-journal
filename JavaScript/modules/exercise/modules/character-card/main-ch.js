import { cardCreation } from "./character-card.js";


const mimo = {
    name: 'Mimo',
    level: 1,
    trivia: 'Mimo love bread',
    bag : ['Monster can','Laptop','Smartphone']
}

const cardArea = document.querySelector('.characterCard');
const mimoCard = cardCreation(mimo.name, mimo.level, mimo.trivia, mimo.bag);

cardArea.append(mimoCard);