// Get references to DOM elements
const signupbtnEle = document.querySelector("#signupbtn");
const signinbtnEle = document.querySelector("#signinbtn");
const nameEle = document.querySelector("#name");
const phoneEle = document.querySelector("#phone");
const emailEle = document.querySelector("#email");
const passwordEle = document.querySelector("#password");
const cpasswordEle = document.querySelector("#cpassword");
const forgetEle=document.querySelector('.forget')
const forgetPassword=document.querySelector('.forget-password')
const alreadyAccountEle = document.querySelector(".already-account");
const containerEle=document.querySelector('.container')

// Function to check form fields and toggle button state
const formSubmitFunc = () => {
    const isSignUp = !signupbtnEle.classList.contains('disable');
    if (isSignUp) {
        return nameEle.value.trim() && phoneEle.value.trim() && emailEle.value.trim() && passwordEle.value.trim() && cpasswordEle.value.trim();
    } else {
        return emailEle.value.trim() && passwordEle.value.trim();
    }
};

// Function to show login page elements
function showLoginPage() {
    nameEle.style.display = "none"; // Hide name input
    phoneEle.style.display = "none"; // Hide phone input
    emailEle.style.display = "block"; // Show email input
    passwordEle.style.display = "block"; // Show password input
    cpasswordEle.style.display = "none"; // Hide confirm password input
    forgetEle.style.display = 'block';
    forgetPassword.style.display = 'inline'; // Show 'forget password' link

    signinbtnEle.classList.remove("disable"); // Enable sign-in button
    signupbtnEle.classList.add("disable"); // Disable sign-up button

    alreadyAccountEle.innerHTML = "You don't have an account? <a class='create-account' href='#'>click</a>";
}

// Function to show sign-up page elements
function showSignUpPage() {
    nameEle.style.display = "block"; // Show name input
    phoneEle.style.display = "block"; // Show phone input
    emailEle.style.display = "block"; // Show email input
    passwordEle.style.display = "block"; // Show password input
    cpasswordEle.style.display = "block"; // Show confirm password input

    signupbtnEle.classList.remove("disable"); // Enable sign-up button
    signinbtnEle.classList.add("disable"); // Disable sign-in button

    alreadyAccountEle.innerHTML = "Already have an account? <a class='exist-account' href='#'>click</a>";
    containerEle.style.height = 'auto';

}

// Event listener for toggling between login and sign-up views
document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('create-account')) {
        e.preventDefault();
        showSignUpPage();
    } else if (e.target.classList.contains('exist-account')) {
        e.preventDefault();
        showLoginPage();
    }
});

// Handle sign-up form submission
signupbtnEle.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form refresh behavior
    if (formSubmitFunc()) {
        console.log('Sign-up form submitted');
    } else {
        alert('All inputs are required for sign-up.');
    }
});

// Handle login form submission
signinbtnEle.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form refresh behavior
    if (formSubmitFunc()) {
        console.log('Login form submitted');
    } else {
        alert('All inputs are required for login.');
    }
});
