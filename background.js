// body에 image를 appendChild로 포함.
// image는 randomNum으로

const body = document.querySelector("body");

function paintImage(randomNum){
    const img = new Image();
    img.src = `images/${randomNum}.jpg`;
    img.classList.add("background");
    body.appendChild(img);
}

function genRandNum(){
    return Math.ceil(Math.random() * 5);
}

function init(){
    const randomNum = genRandNum();
    paintImage(randomNum);
}

init();