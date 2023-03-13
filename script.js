//! 1) Create everything inside the Div
//* get the only div from HTML using Id
const mainDiv = document.getElementById("root")

//* create nav tag
const navBar = document.createElement("nav")

//* create ul tag
const uList = document.createElement("ul")

//* create an array of elements for navigation
const navArray = ["homepage","about us", "contact us"]

//* loop through elements of the array and create the new element li
for (let i = 0; i < navArray.length; i++) {
    const listItem = document.createElement("li")
    listItem.innerHTML = navArray[i]
    uList.appendChild(listItem)
}

//* append the new ul on the navBar
navBar.appendChild(uList)

//* append the new navBar on the mainDiv
mainDiv.appendChild(navBar)

//* create the title for ou Web app
const title = document.createElement("h1")
title.innerText = "First Webpage using DOM"
mainDiv.appendChild(title)

//* create an array of animals
const animalsToAdopt = [
    {
      name: "Lucky",
      picture: "https://placekitten.com/200/287"
    },
    {
      name: "Symba",
      picture: "https://placekitten.com/200/139"
    },
    {
      name: "Léo",
      picture: "https://placekitten.com/200/90"
    },
    {
      name: "Milo",
      picture: "https://placekitten.com/200/194"
    },
    {
      name: "Charly",
      picture: "https://placekitten.com/200/179"
    }
  ];

//! create a function to be able to call this function on the loop
function adoptCat (name, picture){
  //* create the main container of cards
  const cardsContainer = document.createElement("div")
  cardsContainer.className = "cards"
  mainDiv.appendChild(cardsContainer)

  //* create the card for each animal
  const card = document.createElement("div")
  card.className = "card"
  
  //* create the card to receive the background image from each animal
  const cardImage = document.createElement("div")
  cardImage.style.backgroundImage=`url(${picture})`
  cardImage.className="card-img"
  card.appendChild(cardImage)

  //* create the body to receive the title and the button
  const bodyDiv = document.createElement("div")
  bodyDiv.className = "card-body"
  card.appendChild(bodyDiv)
 
  //* create title
  const cardTitle = document.createElement("h2")
  cardTitle.innerHTML= name
  bodyDiv.appendChild(cardTitle)

  //* create button
  const adoptButton = document.createElement("button")
  adoptButton.className="card-button"
  adoptButton.innerHTML = "Adopt me!"
  bodyDiv.appendChild(adoptButton)

  //! the new card on cards container!
  cardsContainer.appendChild(card)
}

//! option 1: use the "for" loop
// for(let i = 0; i < animalsToAdopt.length; i++){
//     adoptCat(animalsToAdopt[i].name, animalsToAdopt[i].picture)
// }

//! option 2: use "for in" loop
for( const element in animalsToAdopt){
    adoptCat(animalsToAdopt[element].name, animalsToAdopt[element].picture)
}

//*----------------------------------------------------------------

//! 2) new exercises using dom

//* 1) change the image using click handler
const defaultImage = document.querySelector(".avatar")

defaultImage.addEventListener("click", () => {
    defaultImage.src="https://e7.pngegg.com/pngimages/849/677/png-clipart-lion-king-simba-illustration-simba-nala-kion-lion-mufasa-lion-king-simba-simba-nala.png"
})

//* 2) change the color of any element asking the new color
const modifyButton = document.createElement("button")
modifyButton.className="btn"
modifyButton.innerHTML="Modify colors"
mainDiv.appendChild(modifyButton)

modifyButton.addEventListener("click", ()=>{
    let newColor = prompt("Enter new color?")
    modifyButton.style.backgroundColor = newColor
})

