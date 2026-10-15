// Vite turns this import into a production-safe URL. Keep it as a file so
// even this tiny example demonstrates a separately deployed asset.
// @deno-types="./asset-url.d.ts"

import puppyGeorge from "./assets/Georgia1.png?no-inline";
import tongueGeorge from "./assets/GeorgiaClick.png?no-inline";
import adultGeorge from "./assets/OlderGeorgia.png?no-inline";
import adultGeorgeClicked from "./assets/GeorgiaClick2.png?no-inline";
import bgMusic from "./assets/Garden.wav?no-inline";

const app = document.querySelector<HTMLElement>("#app")!;

const heading = document.createElement("h1");
heading.textContent = "Pet That Dog!";

const button = document.createElement("img");
button.src = puppyGeorge;
button.alt = "A black lab puppy";
button.width = 190;
button.height = 230;

let stable = puppyGeorge;
let clicked = tongueGeorge;
soundPlay(bgMusic);

interface buyable {
  buttontext: string;
  emoji: string;
  price: number;
  newppc: number;
  newpps: number;
  numbought: number;
  agedog: boolean;
}
const buyables: buyable[] = [{
  buttontext: "Buy Chewing Ball 🥎",
  emoji: "🥎",
  price: 10,
  newppc: 0,
  newpps: 0.1,
  numbought: 0,
  agedog: false,
}, {
  buttontext: "Buy Autopetter 🐶🖐️🤖",
  emoji: "🤖",
  price: 100,
  newppc: 0,
  newpps: 1,
  numbought: 0,
  agedog: false,
}, {
  buttontext: "Take Dog for a Walk! 🐕‍🦺",
  emoji: "🐕‍🦺",
  price: 250,
  newppc: 0.5,
  newpps: 0,
  numbought: 0,
  agedog: false,
}, {
  buttontext: "Give the Dog a Bone! 🦴",
  emoji: "🦴",
  price: 500,
  newppc: 0,
  newpps: 5,
  numbought: 0,
  agedog: false,
}, {
  buttontext: "Upgrade Doggie 🐶⬆️",
  emoji: "⬆️",
  price: 1000,
  newppc: 1,
  newpps: 0,
  numbought: 0,
  agedog: true,
}];
const buttons: HTMLElement[] = [];

const upgradelist = document.createElement("p");
upgradelist.textContent = "Improvements: ";
let multiplier = 1;
const petspersecond = document.createElement("p");
let pps = 0;
petspersecond.textContent = "Pets Per Second: " + pps.toString();
const petsperclick = document.createElement("p");
let ppc = 1;
petsperclick.textContent = "Pets Per Click: " + ppc.toString();

const bark = new Audio("src/assets/dog-bark.wav");

let counter: number = 0;

const textBreak = document.createElement("br");
const counterElement = document.createElement("counterElem")!;
counterElement.textContent = counter.toFixed(1);
app.append(
  heading,
  button,
  textBreak,
  "Pets: ",
  counterElement,
  petspersecond,
  petsperclick,
  upgradelist,
);

function soundPlay(url: string): void {
  const audio = new Audio(url);
  audio.play().catch((error) => {
    console.error("Playback Failed", error);
  });
}

function update() {
  counterElement.textContent = counter.toFixed(1);
  petspersecond.textContent = "Pets Per Second: " + pps.toFixed(1).toString();
}

button.addEventListener("pointerup", () => {
  button.src = stable;
});
button.addEventListener("pointerdown", () => {
  button.src = clicked;
});
button.addEventListener("mousedown", () => {
  counter += ppc;
  bark.play();
  // make create two distinct barks to audibly represent George's age (when the doggie upgrades)
  counterElement.textContent = counter.toFixed(1);
});

for (let i = 0; i < buyables.length; i++) {
  const newButton = document.createElement("button");
  newButton.innerText = buyables[i].buttontext + "(" +
    buyables[i].price.toString() + ")";
  newButton.style.backgroundColor = `rgb(163,163,163)`;
  app.append(newButton, document.createElement("br"));
  buttons.push(newButton);

  newButton.addEventListener("click", () => {
    if (counter >= buyables[i].price) {
      counter -= buyables[i].price;
      buyables[i].price += buyables[i].price / 10;
      buyables[i].numbought += 1;
      //Add a SFX of the buyable being bought
      newButton.innerText = buyables[i].buttontext + "(" +
        buyables[i].price.toFixed(1).toString() + ")";

      pps += buyables[i].newpps * multiplier;
      ppc += buyables[i].newppc;
      upgradelist.textContent = upgradelist.textContent + buyables[i].emoji;
      petsperclick.textContent = "Pets Per Click: " + ppc.toString();

      if (buyables[i].agedog) {
        stable = adultGeorge;
        button.src = stable;
        clicked = adultGeorgeClicked;
        pps *= 2;
        multiplier += 1;
      }
      update();
    }
  });
}

setInterval(function () {
  counter += pps;
  counterElement.textContent = counter.toFixed(1);

  for (let i = 0; i < buttons.length; i++) {
    if (counter < buyables[i].price) {
      buttons[i].style.backgroundColor = `rgb(163,163,163)`;
    } else {
      buttons[i].style.backgroundColor = `hsl(133, 59%, 62%)`;
    }
  }
}, 1000);
