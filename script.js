function changeColor() {

    const button = document.getElementById("colorButton");

    button.style.backgroundColor = "green";

}
function showGreeting() {

    const hour = new Date().getHours();

    let greeting;

    if (hour < 12) {
        greeting = "Good Morning! 🌞";
    } 
    else if (hour < 18) {
        greeting = "Good Afternoon! ☀️";
    } 
    else {
        greeting = "Good Evening! 🌙";
    }

    alert(greeting);

}
function addNumbers() {

    const num1 = Number(document.getElementById("num1").value);

    const num2 = Number(document.getElementById("num2").value);

    const sum = num1 + num2;

    document.getElementById("result").textContent =
        "Result: " + sum;

}