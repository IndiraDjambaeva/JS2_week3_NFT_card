const wrapper = document.createElement("div");
const card = document.createElement("div");
const image = document.createElement("img");
image.src = "./images/image-equilibrium.jpg";
const title = document.createElement("h1");
const text = document.createElement("p");

const section = document.createElement("section");
const pricePart = document.createElement("div");
const priceImg = document.createElement("img");
priceImg.src = "./images/icon-ethereum.svg";
const price = document.createElement("p");

const timePart = document.createElement("div");
const time = document.createElement("p");
const timeImg = document.createElement("img");
timeImg.src = "./images/icon-clock.svg";

const footer = document.createElement("footer");
const person = document.createElement("img");
person.src = "./images/image-avatar.png";
const footerText = document.createElement("p");
const personName = document.createElement("span");

const linkTitle = document.createElement("a");
linkTitle.setAttribute("href", "#");
const personLink = document.createElement("a");
personLink.setAttribute("href", "#");
const imageSrc = document.createElement("a");
imageSrc.setAttribute("href", image.src);

wrapper.setAttribute("id", "wrapper");
title.innerText = "Equilibrium #3429";
text.innerText = "Our Equilibrum collection promotes balance and  calm.";
price.innerText = "0.041eth";
time.innerText = "3 days left";
footerText.innerText = "Creation of";
personName.innerText = "Jules Wyvern";

document.body.append(wrapper);
wrapper.append(card);
card.appendChild(imageSrc);
card.appendChild(image);
imageSrc.appendChild(image);

card.appendChild(linkTitle);
card.appendChild(title);
linkTitle.appendChild(title);
card.appendChild(text);

card.appendChild(section);
section.appendChild(pricePart);
pricePart.appendChild(priceImg);
pricePart.appendChild(price);

section.appendChild(timePart);
timePart.appendChild(time);
timePart.appendChild(timeImg);

card.appendChild(footer);
footer.appendChild(person);
footer.appendChild(footerText);
footer.appendChild(personName);
footer.appendChild(personLink);
personLink.appendChild(personName);

document.body.style = `
  margin: 0;
`;

wrapper.style = `
  min-height: 100vh;
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center; 
  align-items: center;  
  background: hsl(217, 54%, 11%); 
`;

card.style = `
  width:280px; 
  padding:30px; 
  margin: 30px; 
  font-family: "Outfit"; 
  font-size: 1rem; 
  display: flex; 
  flex-direction: column; 
  justify-content: center;  
  color: hsl(215, 51%, 70%); 
  background: hsl(216, 50%, 16%);  
  border-radius: 10px; 
  box-shadow: 0px 15px 8px 10px hsl(217, 54%, 11%);
`;

image.style = `
  width: 100%; 
  border-radius: 5px
`;

title.style = `
  font-size: 1.1rem; 
  color: #fff; 
  text-align:left;  
  margin: 0;
`;

linkTitle.style = `
  text-decoration: none; 
  margin: 20px 0;
`;

text.style = `
  margin: 0;
`;

section.style = `
  width: 100%; 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  border-bottom: 1px solid hsl(215, 32%, 27%); 
  padding: 10px 0; 
  margin-bottom: 10px
`;

pricePart.style = `
  display: flex; 
  align-items: center;
`;

priceImg.style = `
  height: 100%; 
  padding-right: 5px;
`;

price.style = `
  text-transform: uppercase;
  color: hsl(178, 100%, 50%); 
  
`;

timePart.style = `
  display: flex; 
  align-items: center;
`;

timeImg.style = `
  height:100%; 
  padding-right: 7px
`;

person.style = `
  width: 11%; 
  border-radius: 100%;
  border: 1px solid #fff; 
  margin: 0 20px 0 0;
`;

personName.style = `
  padding-left: 7px;
`;

personLink.style = `
  text-decoration: none; 
  color: #fff
`;

footer.style = `
  display: flex; 
  align-items: center
`;

alert(`Я оцениваю свою работу на 100 баллов (неуспела вовремя).. штрафую себя на 10 баллов`);

let card2 = card.cloneNode(true); 
wrapper.appendChild(card2); 

let card3 = card.cloneNode(true); 
wrapper.appendChild(card3);