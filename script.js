let cardImage = document.querySelector(".one_bg");
let current = 0;
let images = [
  "pexels-pixabay-414017.jpg",
  "pexels-dnd-1178784.jpg",
  "pexels-pavel-danilyuk-8985529.jpg",
];

setInterval(() => {
  cardImage.src = `/src/${images[current]}`;
  if (current < images.length - 1) {
    current++;
  } else {
    current = 0;
  }
  console.log(current);
}, 10000);
