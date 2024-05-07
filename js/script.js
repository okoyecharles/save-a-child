const navLinks = document.getElementById("nav-links");
const workCardContainer = document.querySelector(".work-cards");

const workData = [
  {
    image: "./assets/places/burundi.jpg",
    header: "Burundi",
    description: "Empowering children in poverty through food, clothing & education.",
  },
  {
    image: "./assets/places/somalia.jpg",
    header: "Somalia",
    description: "Aiding communities in crisis with shelter & essential resources.",
  },
  {
    image: "./assets/places/mozambique.jpg",
    header: "Mozambique",
    description: "Combating internal corruption through leadership conferences.",
  },
  {
    image: "./assets/places/sierra.jpg",
    header: "Sierra Leone",
    description: "Empowering communities with shelter & support",
  },
  {
    image: "./assets/places/kenya.jpg",
    header: "Kenya",
    description: "Ensuring clean water for Kenyan children.",
  },
];

const createWorkCard = (card) => {
  const workCard = document.createElement("div");
  workCard.className = "work-card";
  workCard.innerHTML = `
  <div class="work-card-image">
  <img src= ${card.image} alt=${card.header}>
  </div>
  <h3 class="work-card-header">${card.header}</h3>
  <p class="work-card-text">${card.description}</p>
  `;
  workCardContainer.appendChild(workCard);
};
workData.forEach(createWorkCard);

const founderData = [
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

const founderCardContainer = document.querySelector(".founder-cards");
const founderCardsToggle = document.querySelector(".founder-more");
const INITIAL_FOUNDER_CARDS = 2;
let CARDS_HIDDEN = true;

const createFounderCard = (founder, index) => {
  const founderCard = document.createElement("div");
  founderCard.className =
    index >= INITIAL_FOUNDER_CARDS ? "founder-card hidden" : "founder-card";
  founderCard.innerHTML = `
  <div class="founder-image">
  <img src= ${founder.image} alt=${founder.name
    .split(" ")
    .join("-")} width="200" height="200">
  </div>
  <div class="founder-content">
  <h3>${founder.name}</h3>
  <p class="founder-occupation">${founder.occupation}</p>
  <p class="founder-description">${founder.description}</p>
  </div>
  `;
  founderCardContainer.append(founderCard);
};
founderData.forEach(createFounderCard);

const founderCards = Array.from(document.querySelectorAll(".founder-card"));

const toggleHiddenFounderCards = () => {
  founderCards.forEach((card, index) => {
    if (index >= INITIAL_FOUNDER_CARDS) card.classList.toggle("hidden");
  });
  CARDS_HIDDEN = !CARDS_HIDDEN;
};

founderCardsToggle.addEventListener("click", () => {
  toggleHiddenFounderCards();
  if (CARDS_HIDDEN) {
    founderCardsToggle.setAttribute("aria-label", "show more founders");
    founderCardsToggle.innerHTML = `<span>MORE</span><i class="fa-solid fa-angle-down"></i>`
  } else {
    founderCardsToggle.setAttribute("aria-label", "show less founders");
    founderCardsToggle.innerHTML = `<span>LESS</span><i class="fa-solid fa-angle-up"></i>`
  }
  founderCardsToggle.setAttribute("aria-pressed", !CARDS_HIDDEN);
});
