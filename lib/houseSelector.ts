import { randomIntFromInterval } from "./math";

type HouseName = "Gryffindor" | "Ravenclaw" | "Hufflepuff" | "Slytherin";
type House = { name: HouseName; slots: number };
const houses: House[] = [
  { name: "Gryffindor", slots: 4 },
  { name: "Ravenclaw", slots: 4 },
  { name: "Hufflepuff", slots: 4 },
  { name: "Slytherin", slots: 4 },
];

function getAvailableHouses(): House[] {
  return houses.filter((house) => house.slots > 1);
}

function getLastSlotHouses(): House[] {
  return houses.filter((house) => house.slots > 0);
}

export default function houseSelector(): HouseName {
  let availableHouses = getAvailableHouses();
  if (availableHouses.length === 0) {
    availableHouses = getLastSlotHouses();
  }
  const maxHouseIdx = availableHouses.length - 1;
  const randomNum = randomIntFromInterval(0, maxHouseIdx);
  const chosenHouse = availableHouses[randomNum].name;

  houses.forEach((house) => {
    if (house.name === chosenHouse) {
      house.slots--;
    }
  });

  return chosenHouse;
}
