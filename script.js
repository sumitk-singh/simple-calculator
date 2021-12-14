const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const addBtn = document.querySelector("#addBtn");
const subBtn = document.querySelector("#subBtn");
const mulBtn = document.querySelector("#mulBtn");
const divBtn = document.querySelector("#divBtn");
const output = document.querySelector("#output");

const redBtn = document.querySelector("#redBtn");
const greenBtn = document.querySelector("#greenBtn");
const blueBtn = document.querySelector("#blueBtn");

//add
function add() {
    const input_1 = parseFloat(n1.value);
    const input_2 = parseFloat(n2.value);
    const addResult = input_1 + input_2;
    output.innerText = addResult;
}

//sub
function sub() {
    const input_1 = parseFloat(n1.value);
    const input_2 = parseFloat(n2.value);
    const subResult = input_1 - input_2;
    output.innerText = subResult;
}

//mul
function mul() {
    const input_1 = parseFloat(n1.value);
    const input_2 = parseFloat(n2.value);
    const mulResult = input_1 * input_2;
    output.innerText = mulResult;
}

//div
function div() {
    const input_1 = parseFloat(n1.value);
    const input_2 = parseFloat(n2.value);
    const divResult = input_1 / input_2;
    output.innerText = divResult;
}

//red text
function redText() {
    output.style.color = "red";
    output.style.fontSize = "20px";
}

function greenText() {
    output.style.color = "green";
    output.style.fontSize = "30px";
}

function blueText() {
    output.style.color = "blue"
    output.style.fontSize = "40px";
}

addBtn.addEventListener("click", add);
subBtn.addEventListener("click", sub);
mulBtn.addEventListener("click", mul);
divBtn.addEventListener("click", div);

redBtn.addEventListener("click", redText);
greenBtn.addEventListener("click", greenText);
blueBtn.addEventListener("click", blueText);