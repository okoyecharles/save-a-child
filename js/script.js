const navLinks = document.getElementById("nav-links");
const workCards = document.querySelector(".work-cards");
const founderCards = document.querySelector(".founder-cards");

const workCardInfo = [
  {
    image: "./assets/places/burundi.jpg",
    header: "Burundi",
    description:
      "Providing Resources like Food, Clothing and Education for children due to the widespread poverty faced by them today...",
  },
  {
    image: "./assets/places/somalia.jpg",
    header: "Somalia",
    description:
      "Known for their reccuring humanitarian crisis, we help by providing shelter and other needed resources",
  },
  {
    image: "./assets/places/mozambique.jpg",
    header: "Mozambique",
    description: "We contribute by hosting conferences to reduce internal corruption...",
  },
  {
    image: "./assets/places/sierra.jpg",
    header: "Sierra Leone",
    description: "We help by providing shelter and other essential resources",
  },
  {
    image: "./assets/places/kenya.jpg",
    header: "Kenya",
    description:
      "One of the major problems faced by kenyans is lack of sufficient and clean water, We provide for the children accordingly.",
  },
];

const createWorkCards = (arr, i) => {
  const workCard = document.createElement("div");
  workCard.className = "work-card";
  workCard.innerHTML = `
    <div class="work-card-image">
      <img src= ${arr[i].image} alt=${arr[i].header}>
    </div>
    <h2 class="work-card-title">${arr[i].header}</h2>
    <p class="work-card-text">${arr[i].description}</p>
  `;
  workCards.appendChild(workCard);
};
[...Array(workCardInfo.length).keys()].forEach((num) =>
  createWorkCards(workCardInfo, num)
);

const founderInfo = [
  {
    image: "./assets/people/dr-tedros.jpg",
    name: "Dr Tedros Adhanom Ghebreyesus",
    occupation: "CEO of World Health Organization.",
    description:
      "Dr Tedros Adhanom Ghebreyesus was elected WHO Director-General for a five-year term by WHO Member States at the Seventieth World Health Assembly in May 2017.",
  },
  {
    image: "./assets/people/oprah-winfrey.jpg",
    name: "Oprah Winfrey",
    occupation: "American Talk Show Host",
    description:
      "By the mid-1990s, Winfrey had reinvented her show with a focus on literature, self-improvement, mindfulness, and spirituality.",
  },
  {
    image: "./assets/people/bill-gates.jpg",
    name: "Bill Gates",
    occupation: "CEO and Manager of Microsoft",
    description:
      "He’s given more than $40 billion so far and he is the most charitable person in the world, much of it through annual grants to The Bill & Melinda Gates Foundation, where it’s used to fight poverty and improve healthcare in the United States and other nations.",
  },
];

const createFounderCards = (arr, i) => {
  const founderCard = document.createElement("div");
  founderCard.className = "founder-card hide";
  founderCard.innerHTML = `
  <div class="founder-image">
    <img src= ${arr[i].image} alt=${arr[i].name.split(" ").join("-")}>
  </div>
  <div class="founder-card-content">
    <h1>${arr[i].name}</h1>
    <p class="founder-occupation">${arr[i].occupation}</p>
    <hr></hr>
    <p class="founder-description">${arr[i].description}</p>
  `;
  founderCards.append(founderCard);
};
[...Array(founderInfo.length).keys()].forEach((num) =>
  createFounderCards(founderInfo, num)
);

const founderCard = Array.from(document.querySelectorAll(".founder-card"));
const morebutton = document.querySelector(".founder-more");
morebutton.addEventListener("click", () => {
  founderCard.forEach((card) => card.classList.toggle("hide"));
  if (morebutton.classList.contains("less")) {
    morebutton.innerHTML = 'MORE<i class="fa-solid fa-caret-down"></i>';
    morebutton.classList.remove("less");
  } else {
    morebutton.innerHTML = 'LESS<i class="fa-solid fa-caret-up"></i>';
    morebutton.classList.add("less");
  }
});
