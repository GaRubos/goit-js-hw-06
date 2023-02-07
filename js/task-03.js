const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const makeGallerylist = (image) => {
  const { url, alt } = image;
  return `
  <li>
     <img src="${url}" alt="${alt}">
    </li>
  `;
};
const galleryListEl = document.querySelector(".gallery");

const makeGallerylistRow = images.map(makeGallerylist).join("");
galleryListEl.insertAdjacentHTML("beforeend", makeGallerylistRow);

let imgElf = document.querySelectorAll("img")[0];
imgElf.style.width = "300px";
imgElf.style.height = "200px";
imgElf.style.display = "block";
const imgElc = document.querySelectorAll("img")[1];
imgElc.style.width = "300px";
imgElc.style.height = "200px";
imgElc.style.display = "block";
const imgElt = document.querySelectorAll("img")[2];
imgElt.style.width = "300px";
imgElt.style.height = "200px";
imgElt.style.display = "block";

let elem = document.querySelectorAll("ul");
let elemcol = [...elem];
for (let i = 0; i < elemcol.length; i += i) {
  elemcol[i].style.display = "flex";
  elemcol[i].type = "none";
}

const items = document.querySelectorAll("li");
for (let i = 0; i < items.length; i += i) {
  items[i].style.marginRight = "15px";
}

console.log(makeGallerylistRow);
