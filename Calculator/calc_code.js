let screen = document.getElementById('answer');
let buttons = document.getElementsByClassName('input_btn');
let screenValue = "";
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        screenValue += buttonText;
        screen.value = screenValue;
    });
}

document.addEventListener("keydown", (e) => {
    console.log(e.key);
    console.log(e.keyCode);
    if (e.key == "+" ||
        e.key == "-" ||
        e.key == '*' ||
        e.key == '.' ||
        e.key == '/' ||
        e.key == '%' ||
        e.key == '(' ||
        e.key == ')' ||
        e.key <= 9)
        screenValue += e.key;
        screen.value = screenValue;
})

function evaluateExpression() {
    screenValue
    // -- (34)**8
}

window.onerror = () => {
    alert("Invalid Input");
}