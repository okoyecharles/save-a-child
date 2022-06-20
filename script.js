const hamburger = document.getElementById('hamburger')
const navLinks = document.getElementById('nav-links')
const workCards = document.querySelector('.work-cards')
const founderCards = document.querySelector('.founder-cards')


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active')
  hamburger.classList.toggle('active')
})

const workCardInfo = [
  {
    image: './images/Burundi.jpg',
    header: 'Burundi',
    description: 'Providing Resources like Food, Clothing and Education for children due to the widespread poverty faced by them today...'
  },
  {
    image: './images/somalia.jfif',
    header: 'Somalia',
    description: 'Known for their reccuring humanitarian crisis, we help by providing shelter and other needed resources'
  },
  {
    image: './images/mozambique.jfif',
    header: 'Mozambique',
    description: 'We contribute by hosting conferences to reduce internal corruption...'
  },
  {
    image: './images/sierra.jfif',
    header: 'Sierra Leone',
    description: 'We help by providing shelter and other essential resources'
  },
  {
    image: './images/kenya.jfif',
    header: 'Kenya',
    description: 'One of the major problems faced by kenyans is lack of sufficient and clean water, We provide for the children accordingly.'
  }
]

let createWorkCards = (arr, i) => {
  let workCard = document.createElement('div')
  workCard.className = 'work-card'
  workCard.innerHTML = `
  <div class="work-card-image"><img src= ${arr[i].image} alt=""></div>
  <h2 class="work-card-title">${arr[i].header}</h2>
  <p class="work-card-text">${arr[i].description}</p>
  `
  workCards.appendChild(workCard)
}
[...Array(workCardInfo.length).keys()].forEach(num => createWorkCards(workCardInfo, num))



const founderCardInfo = [
  {
    image: './images/img-l.jfif',
    name: 'Yochai Benkler',
    occupation: 'Berkman International Professor of national studies',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    image: './images/img-l.jfif',
    name: 'Yochai Benkler',
    occupation: 'Berkman International Professor of national studies',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    image: './images/img-l.jfif',
    name: 'Yochai Benkler',
    occupation: 'Berkman International Professor of national studies',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

let createFounderCards = (arr, i) => {
  let founderCard = document.createElement('div')
  founderCard.className = 'founder-card'
  founderCard.innerHTML = `
  <div class="founder-image">
    <img src= ${arr[i].image} alt="">
  </div>
  <div class="founder-card-content">
    <h1>${arr[i].name}</h1>
    <p class="founder-occupation">${arr[i].occupation}</p>
    <hr></hr>
    <p class="founder-description">${arr[i].description}</p>
  `
  founderCards.append(founderCard)
}
[...Array(founderCardInfo.length).keys()].forEach(num => createFounderCards(founderCardInfo, num))
