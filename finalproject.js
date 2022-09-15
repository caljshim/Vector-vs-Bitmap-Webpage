function getImages() {
    return document.querySelectorAll(".image");
}
let imageScale = 1;
function zoomIn() {
    const image = getImages();
    imageScale = imageScale * 1.2;
    for (let images of image) {
            images.style.transform = `scale(${imageScale})`;
    }
}
function zoomOut() {
    const image = getImages();
    imageScale = imageScale / 1.2;
    for (let images of image) {
            images.style.transform = `scale(${imageScale})`;
    }
}
function reset() {
    const image = getImages();
    for (let images of image) {
        images.style.transform = "scale(1)";
        imageScale = 1;
        images.style.left = "0";
        images.style.top = "0";
        images.style.height = "100%";
        images.style.width = "100%"
    }
}
function strHeight() {
    const image = getImages();
    for (let images of image) {
        let height = images.clientHeight;
        images.style.height = (height + 50) + "px";
    }
}
function shrHeight() {
    const image = getImages();
    for (let images of image) {
        let height = images.clientHeight;
        images.style.height = (height - 50) + "px";
    }
}
function strWidth() {
    const image = getImages();
    for (let images of image) {
        let width = images.clientWidth;
        images.style.width = (width + 50) + "px";
    }
}
function shrWidth() {
    const image = getImages();
    for (let images of image) {
        let width = images.clientWidth;
        images.style.width = (width - 50) + "px";
    }
}