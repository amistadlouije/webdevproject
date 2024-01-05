let username = [];
let password = [];

function loginButton() {
  const userName = document.getElementById("email").value;
  const passWord = document.getElementById("password").value;

  if (!userName || !passWord) {
    alert("You need to Sign-Up First");
  } else {
    let loggedIn = false;
    for (let i = 0; i < username.length; i++) {
      if (userName == username[i] && passWord == password[i]) {
        loggedIn = true;
        break;
      }
    }

    if (loggedIn) {
      alert('LOGIN SUCCESSFUL');
      location.replace("http://127.0.0.1:5500/index.html")
    } else {
      alert('Enter the correct Username and Password');
    }
  }
}

function getUserRegister() {
  let user = document.getElementById("email-input").value;
  let pass = document.getElementById("password-input").value;

  if (!user || !pass) {
    alert("Username and Password cannot be empty");
  } else {
    username.push(user);
    password.push(pass);
    document.getElementById("email-input").value = "";
    document.getElementById("password-input").value = "";
    alert("Registration successful");
  }
}


function registrationToggle(){
  let createAcc = document.getElementById("registration");
  // let closeButton = document.getElementById("close");

  createAcc.classList.toggle("active");
  }


  // local storage
  function saveUsername() {
    // Get the value from the input field
    const firstName = document.getElementById('firstname-input').value;
    const lastName = document.getElementById('lastname-input').value;
    let user = document.getElementById("email-input").value;
    let pass = document.getElementById("password-input").value;

    // Check if the input is not empty
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      // Save the username in localStorage
      localStorage.setItem('firstname', firstName);
      localStorage.setItem('lastname', lastName);
      localStorage.setItem('username', user);
      localStorage.setItem('password', pass);
      
      document.getElementById('firstname-input').value = "";
      document.getElementById('lastname-input').value = "";
    } else {
      alert('First name, Last name,Username and Password cannot be empty');
    }
  }

  // Retrieve data from localStorage on page load
  // const storedUsername = localStorage.getItem('username');
  // if (storedUsername) {
  //   document.getElementById('output').textContent = `Stored username: ${storedUsername}`;
  // }

  function getAndSave(){
    saveUsername();
    getUserRegister();
  }