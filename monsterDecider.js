console.log("MONSTER DECIDER");
console.log("i am going to decide what monster you should buy.");
let monstersTried = prompt("what are the monsters you have tried?");
const TotalMonsters = [
  "Original Green OG",
  "Zero Sugar",
  "Lo-Carb",
  "Nitro Super Dry",
  "Super-Premium Import",
  "Reserve White Pineapple",
  "Reserve Watermelon",
  "Reserve Orange Dreamsicle",
  "Reserve Peaches n' Crème",
  "Reserve Kiwi Strawberry",
  "Lando Norris Limited Edition",
  "Strawberry Shot",
  "Vanilla Shot",
  "Electric Blue",
  "Orange Dreamsicle",
  "Assault",
  "Zero Ultra White Monster",
  "Ultra Red White Blue Razz",
  "Ultra Punk Punch",
  "Ultra Blue Hawaiian",
  "Ultra Vice Guava",
  "Ultra Wild Passion",
  "Ultra Strawberry Dreams",
  "Ultra Sunrise",
  "Ultra Violet",
  "Ultra Peachy Keen",
  "Ultra Paradise",
  "Ultra Fiesta Mango",
  "Ultra Watermelon",
  "Ultra Rosá",
  "Ultra Red",
  "Ultra Blue",
  "Ultra Black",
  "Ultra Gold",
  "Java Monster Dubai Chocolate",
  "Java Monster Mean Bean",
  "Java Monster Loca Moca",
  "Java Monster Salted Caramel",
  "Java Monster Café Latte",
  "Java Monster Irish Crème",
  "Juice Monster Mango Loco",
  "Juice Monster Voodoo Grape",
  "Juice Monster Strawberry Lemonade",
  "Juice Monster Pacific Punch",
  "Juice Monster Viking Berry",
  "Juice Monster Bad Apple",
  "Juice Monster Rio Punch",
  "Juice Monster Pipeline Punch",
  "Juice Monster Aussie Lemonade",
  "Juice Monster Khaotic",
  "Juice Monster Monarch",
  "Juice Monster Ripper",
  "Rehab Monster Tea + Lemonade",
  "Rehab Monster Peach Tea",
  "Rehab Monster Wild Berry Tea",
  "Rehab Monster Green Tea",
];
let numberOfMonstersToBuy = prompt("how many monsters do you want to buy?");
const triedSet = new Set(
  monstersTried.split(",").map((item) => item.trim().toLowerCase()),
);
const untried = TotalMonsters.filter(
  (flavor) => !triedSet.has(flavor.toLowerCase()),
);
if (untried.length === 0) {
  const completionMsg =
    "mannn you have tasted all the monsters in production that's sick man!!!";
  alert(completionMsg);
  console.log(completionMsg);
} else {
  for (let i = untried.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [untried[i], untried[j]] = [untried[j], untried[i]];
  }

  const choice = untried.slice(0, numberOfMonstersToBuy);
  alert("You should buy: " + choice.join(", "));
  console.log("Recommended:", choice);
}
