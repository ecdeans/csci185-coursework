// make a function:

const makeRed = () => {
    document.querySelector("body").style.backgroundColor = "red";
}

const makeGreen = () => {
    document.querySelector("body").style.backgroundColor = "green";
}

const makeBlue = () => {
    document.querySelector("body").style.backgroundColor = "blue";
}

// generic version of same code
const setBackgroundColor = (bgColor) => {
    document.querySelector("body").style.backgroundColor = bgColor;
}

const my