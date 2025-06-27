let userName =document.querySelector('#nameInput');
let userEmail =document.querySelector('#emailInput');
let userPassword =document.querySelector('#passwordInput')
let signUpBtn =document.querySelector('#signBtn');
let inputsRequired =document.querySelector('#emptyInputs')
let signUpList =[]

signUpBtn.addEventListener('click',function(e){
     e.preventDefault();
     isEmailExist()
     signUp()
})

if ((localStorage.getItem('signUpUsers')  !== null)) {
    signUpList =JSON.parse(localStorage.getItem('signUpUsers'));
}

//signUp
function signUp() {
    let userData ={
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value
    }
    //empty inputs
     if (userName.value == '' || userEmail.value == '' || userPassword.value == '') {
         document.getElementById('alert').innerHTML=`<span class="text-danger">All inputs are required</span>`
        return;
    }

    if(validateEmail()){
        if(!isEmailExist()){
             signUpList.push(userData);
             localStorage.setItem('signUpUsers',JSON.stringify(signUpList))
             document.getElementById('alert').innerHTML=`<span class="text-success">Success</span>`
        }  
    }
    else{
        document.getElementById('alert').innerHTML=`<span class="text-danger">Email is not valid</span>`
    }
}

//is email valid
function validateEmail() {
    let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(pattern.test(userEmail.value)){
        return true;
    }else{
        return false;
    }
    
}

//is emailExist
function isEmailExist(){
    for(let i=0;i <signUpList.length ;i++){
        if(signUpList[i].email == userEmail.value){
            document.getElementById('alert').innerHTML=`<span class="text-danger">Email is already Exist</span>`
            return true;
        }
    }
    return false;
}

console.log('hi')