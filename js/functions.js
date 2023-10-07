let imageIndex = 0;
let intervalId = setInterval(showNextImage, 3000);
function createImgBlock() {
    createElement('div', '#sliderWrapper', '', {className: 'slider', id: 'slider'});
}
function createBtnBlock() {
    createElement('div', '#sliderWrapper', '', {className: 'buttons_wrapper', id: 'buttons_wrapper'})
}
function createPreviousBtn() {
    createElement('button', '#buttons_wrapper', '', {type: 'button', className: 'slider_button', id: 'prevBtn'}, {click: showPrevImage});
    createElement('img', '#prevBtn', '', {src: './images/icons/prev_btn.svg'});
}

function createNextBtn() {
    createElement('button', '#buttons_wrapper', '', {type: 'button', className: 'slider_button', id: 'nextBtn'}, {click: showNextAndClearInterval});
    createElement('img', '#nextBtn', '', {src: './images/icons/next_btn.svg'});
}

function showImage() {
    let imageElement = createElement('img', '#slider', '', {id: 'imageElement', alt: 'img'});
    imageElement.src = `./images/` + `${myImages[imageIndex]}`;
}

function updateImage(index) {
    document.getElementById('imageElement').src = `./images/` + `${myImages[index]}`;
}
function showPrevImage() {
    if (imageIndex === 0) {
        imageIndex = myImages.length - 1;
        updateImage(imageIndex);
    } else {
        imageIndex = imageIndex - 1;
        updateImage(imageIndex);
    }
    clearInterval(intervalId);
    intervalId = setInterval(showNextImage, 3000);
}

function showNextAndClearInterval() {
    showNextImage();
    clearInterval(intervalId);
    intervalId = setInterval(showNextImage, 3000);
}

function showNextImage() {
    if (imageIndex === myImages.length - 1) {
        imageIndex = 0;
        updateImage(imageIndex);
    } else {
        imageIndex = imageIndex + 1;
        updateImage(imageIndex);
    }
}





