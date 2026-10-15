import { helloCard } from "./greetings.js";

const title = document.querySelector('h1');


const myCard = helloCard("Mimo");

title.append(myCard);
