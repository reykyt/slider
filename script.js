let images = ['images1.jfif', 'images2.webp', 'images3.jfif']
let slider = document.getElementById("slider");
let indicators;
let indicatorList = document.getElementById("indicatorList");
for (let i = 0; i < images.length; i++) {
    let li = document.createElement("li")
    indicatorList.appendChild(li)
    li.classList.add('indicator');
    li.classList.add(`e${i}`);
}

indicators = document.querySelectorAll(".indicator");
let e = 0;
let i = 0;
let ind0 = document.querySelector(".e0");
let ind1 = document.querySelector(".e1");
let ind2 = document.querySelector(".e2");
slider.src = `img/${images[0]}`;
indicators[e].style.borderColor = 'black';

let left = document.getElementById("left");

let right = document.getElementById("right");

left.addEventListener("click", (event) => {
    event.preventDefault();
    prev()
})

right.addEventListener("click", (event) => {
    event.preventDefault();
    next()
})


ind0.addEventListener("click", (event) => {
    slider.src = `img/${images[0]}`;
    for (let i = 0; i < images.length; i++) {
        indicators[i].style.borderColor = 'transparent';


    }
    indicators[0].style.borderColor = 'black';

})


ind1.addEventListener("click", (event) => {
    slider.src = `img/${images[1]}`;
    for (let i = 0; i < images.length; i++) {
        indicators[i].style.borderColor = 'transparent';


    }
    indicators[1].style.borderColor = 'black';
})


ind2.addEventListener("click", (event) => {

    slider.src = `img/${images[2]}`;
    for (let i = 0; i < images.length; i++) {
        indicators[i].style.borderColor = 'transparent';


    }
    indicators[2].style.borderColor = 'black';
})


function prev() {
    i = i - 1
    e = e - 1
    if (i < 0) {
        i = images.length - 1;
        e = images.length - 1;
        console.log(e);

    }

    slider.src = `img/${images[i]}`;

    for (let i = 0; i < images.length; i++) {
        indicators[i].style.borderColor = 'transparent';


    }
    indicators[e].style.borderColor = 'black';

}

function next() {
    i = i + 1
    e = e + 1
    if (i > images.length - 1) {
        i = 0;
        e = 0
    }
    console.log(e);
    slider.src = `img/${images[i]}`;

    for (let i = 0; i < images.length; i++) {
        indicators[i].style.borderColor = 'transparent';


    }
    indicators[e].style.borderColor = 'black';
}