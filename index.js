let btn0Click = document.querySelector("button0");

btn0Click.addEventListener("click",() =>{
    window.location.href ="destination.html";
});

let btnClick = document.querySelector("button1");

btnClick.addEventListener("click",() =>{
    window.location.href ="package.html";
});

let ButtonClick = document.querySelector("button2");

ButtonClick.addEventListener("click",() =>{
    window.location.href ="Blog.html";
});

let BtnClick = document.querySelector("button3");

BtnClick.addEventListener("click",() =>{
    window.location.href ="about.html";
});

let buttonClick = document.querySelector("button4");

buttonClick.addEventListener("click",() =>{
    window.location.href ="contact.html";
});


const signupBtn = document.querySelector(".signup");
const signinBtn = document.querySelector(".signin");

// Add click event for signup
    signupBtn.addEventListener("click", function (e) {
      e.preventDefault(); // prevent default anchor behavior
      window.location.href = "signup.html"; // change to your signup page path
});

// Add click event for signin
    signinBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "signin.html"; // change to your signin page path
});

