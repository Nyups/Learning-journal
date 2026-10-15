import { cardCreation } from "./character-card.js";

const cardArea = document.querySelector('.characterCard');
const mimoCard = cardCreation('Mimo');

cardArea.append(mimoCard);