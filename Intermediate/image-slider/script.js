const imgElement = document.querySelector(".img img");

let img = [
    { src: "./img/img1.PNG", alt: "image1" },
    { src: "./img/img2.PNG", alt: "image2" },
    { src: "./img/img3.PNG", alt: "image3" },
];

let currtSlide = 0;

function updateImage() {
    imgElement.src = img[currtSlide].src;
    imgElement.alt = img[currtSlide].alt;
}

function btnx() {
    if (currtSlide < img.length - 1) {
        currtSlide++;
        updateImage();
    }
}

function btnb() {
    if (currtSlide > 0) {
        currtSlide--;
        updateImage();
    }
}
