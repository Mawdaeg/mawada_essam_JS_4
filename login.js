let emailLoginInput = document.querySelector('#emailLoginInput');
let passwordLoginInput = document.querySelector('#passwordLoginInput');
let loginBtn = document.querySelector('#loginBtn');
let invalidInput =document.querySelector('#invalidData')
let emptyInput =document.querySelector('#emptyData')

loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    login()
})


//login
function login() {
    let loinData = {
        email: emailLoginInput.value,
        password: passwordLoginInput.value
    }

    let arr = JSON.parse(localStorage.getItem("signUPStorage"));
    //input is empty
    if (emailLoginInput.value == "" || passwordLoginInput.value == "") {
        emptyInput.classList.remove('d-none');
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].email == emailLoginInput.value && arr[i].password == passwordLoginInput.value) {
                window.location.href = "home.html";
                invalidInput.classList.add('d-none');
                break;
            }
            else{
                invalidInput.classList.remove('d-none');
            }
        }
    }
}
