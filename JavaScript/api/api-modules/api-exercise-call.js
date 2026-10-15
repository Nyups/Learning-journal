import { getCard, createCard } from "./api-exercise.js";

const data = await getCard(); // OK after a timeout

createCard(data);