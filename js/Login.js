let loginBtn =document.querySelector('#loginBtn');
let email =document.querySelector('#emailLoginInput')
let password =document.querySelector('#passwordLoginInput')

loginBtn.addEventListener('click',function(e){
    e.preventDefault();
    userLogin()
})

function userLogin(){
     //empty inputs
     if (email.value == '' || password.value == '') {
         document.getElementById('alert').innerHTML=`<span class="text-danger">All inputs are required</span>`
        return;
    }
    let usersArray =JSON.parse(localStorage.getItem('signUpUsers'));
    for(let i =0; i<usersArray.length ;i++){
        if(usersArray[i].email == email.value && usersArray[i].password == password.value){
         window.location.href = 'home.html';
         let loggedInUser =localStorage.setItem('loggedInUser',JSON.stringify(usersArray[i]))
            break;
        }
        else{
           document.getElementById('alert').innerHTML=`<span class="text-danger">incorrect email or password </span>`
        }
    }
}
