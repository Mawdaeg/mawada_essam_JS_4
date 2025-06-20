let nameInput = document.querySelector('#nameInput');
let emailInput = document.querySelector('#emailInput');
let passwordInput = document.querySelector('#passwordInput');
let signBtn = document.querySelector('#signBtn');
let invalidInput = document.querySelector('#invalidData')
let emptyInput = document.querySelector('#emptyData')
let correctSign = document.querySelector('#correctSign')
let existEmail = document.querySelector('#existEmail')
let accountList = [];

if ((localStorage.getItem('signUPStorage') !== null)) {
    accountList = JSON.parse(localStorage.getItem('signUPStorage'));
}

signBtn.addEventListener('click', function (e) {
    e.preventDefault();
    signUp()
    validEmail()
})

// signup 
function signUp() {
    let account = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    if (nameInput.value == "" || emailInput.value == "" || passwordInput.value == "") {
        invalidInput.classList.add('d-none');
    }
    else {
        if (validEmail()) {

            if (!exist_Email()) {
                accountList.push(account);
                localStorage.setItem('signUPStorage', JSON.stringify(accountList));
                correctSign.classList.remove('d-none')
                existEmail.classList.add('d-none')
            } else {
                existEmail.classList.remove('d-none')
                correctSign.classList.add('d-none')

            }
        }
    }
}

//validate email
function validEmail() {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regex.test(emailInput.value)) {
        // console.log('valid email');
        invalidInput.classList.add('d-none');
        return true;
    } else {
        invalidInput.classList.remove('d-none');
        correctSign.classList.add('d-none')
        return false;
    }
}

//email is exist
function exist_Email() {
    for (let i = 0; i < accountList.length; i++) {
        if (emailInput.value === accountList[i].email) {
            return true
        }

    }
    return false
}





