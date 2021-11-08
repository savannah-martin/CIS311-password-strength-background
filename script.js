const passwordInput = document.getElementById("password");
const backgroundDiv = document.getElementById("background");

passwordInput.addEventListener("keyup", function() {
    const password = passwordInput.value;
    const length = password.length;
    const blurValue = 30 - length*2;

    backgroundDiv.style.filter= `blur(${blurValue}px)`;

    console.log(password);
    console.log(length);
    console.log(blurValue);
})