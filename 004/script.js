const inputForm = document.getElementById("input-form");
const inputEmail = document.getElementById("input-email");
const inputButton = document.getElementById("input-button");
console.dir(inputButton);
//invalid
function onInvalidSubmit(event){
    //default message off
    event.preventDefault();

    const errorMsg = document.getElementById("errorMsg");
    const errorIcon = document.getElementById("errorIcon");

    const validityEmail = inputEmail.validity;
    const valueMissing = validityEmail.valueMissing;

    if(valueMissing){
        errorMsg.classList.remove("hidden");
        errorMsg.innerText = "Please enter value.";

        errorIcon.classList.remove("hidden");
    }
    else{
        errorMsg.classList.remove("hidden");
        errorMsg.innerText = "Please enter valid value.";

        errorIcon.classList.remove("hidden");
    }

    inputButton.style.bacground = "linear-gradient(135deg,hsl(0, 0%, 100%),hsl(0, 100%, 98%))";
    console.dir(inputButton);
}

function onValidSubmit(event){

}

inputEmail.addEventListener("invalid", onInvalidSubmit);
inputEmail.addEventListener("submit", onValidSubmit);