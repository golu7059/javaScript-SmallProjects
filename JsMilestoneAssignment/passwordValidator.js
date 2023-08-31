const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');

function checkPassword(){
   XPathResult.innerText = pass1.value == pass2.value ? "password validation Sucessfull" : "Password validation uncessfull";
}

pass1.addEventListener('keyup',()=>{
    if(pass2.value.length != 0) checkPassword();
})

pass2.addEventListener('keyup',checkPassword);