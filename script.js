
document.getElementById("regForm").addEventListener("submit", function(e){
e.preventDefault();

let roll = document.getElementById("roll").value.trim();
let fname = document.getElementById("fname").value.trim();
let email = document.getElementById("email").value.trim();
let mobile = document.getElementById("mobile").value.trim();
let password = document.getElementById("password").value.trim();

if(roll === "" || fname === "" || email === "" || mobile === "" || password === ""){
document.getElementById("errorMsg").innerText="Please fill all required fields!";
return;
}

if(mobile.length !== 11 || isNaN(mobile)){
document.getElementById("errorMsg").innerText="Enter valid 10 digit mobile number!";
return;
}

// if(password.length ){
// document.getElementById("errorMsg").innerText="Password must be at least characters!";
// return;
// }

document.getElementById("errorMsg").innerText="";

// Show popup
document.getElementById("successCard").classList.add("active");
document.getElementById("formContainer").classList.add("blur");

// Auto close after 3 seconds
setTimeout(()=>{
closeCard();
},3000);

// Reset form
document.getElementById("regForm").reset();
});

function closeCard(){
document.getElementById("successCard").classList.remove("active");
document.getElementById("formContainer").classList.remove("blur");
}
