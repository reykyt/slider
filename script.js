let images = ['images1.jfif', 'images2.jpg', 'images3.jfif']
let slider = document.getElementById("slider");
let indicators;
let indicatorList = document.getElementById("indicatorList");
for (let i = 0; i < images.length; i++) {
    let li = document.createElement("li")
    indicatorList.appendChild(li)
    li.classList.add('indicator');
}
indicators = document.querySelectorAll(".indicator");
let i = 0;
slider.src = `img/${images[0]}`;
indicators[0].style.borderColor = 'red';

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


function prev() {
    i = i - 1
    if (i < 0) {
        i = images.length - 1;
    }

    slider.src = `img/${images[i]}`;

    for (let i = 0; i < images.length; i++) {
        indicators[i].style.borderColor = 'transparent';

        indicators[i].style.borderColor = 'red';
    }
    console.log(1);

}

function next() {
    i = i + 1
    if (i > images.length - 1) {
        i = 0;
    }
    console.log(2);
    slider.src = `img/${images[i]}`;

    for (let i = 0; i < images.length; i++) {
        indicators[i].style.borderColor = 'transparent';

        indicators[i].style.borderColor = 'red';
    }
}