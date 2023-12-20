const usersObj = [
  {
    email: "product@apxor.com",
    password: "Passcode@P",
  },
  {
    email: "sales@apxor.com",
    password: "Passcode@S",
  },
  {
    email: "marketing@apxor.com",
    password: "Passcode@M",
  },
];

const API_URL = "URL"

const config = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // Add any additional headers as needed
  },
}

function handleLogin() {
  const email = document.getElementById("loginemail").value;
  const password = document.getElementById("loginpassword").value;
  const user = usersObj.find(user => user.email === email && user.password === password);
  if (user) {
    localStorage.setItem("userEmail", email);
    // const url = window.location.href + "dashboard.html";
    // window.location.href = window.location.href + "dashboard.html"
    // document.location.href = "/dashboard.html";
    //window.open(url, "_self");
    // Simulate a click to navigate to a URL
    // const anchorElement = document.createElement('a');
    // anchorElement.href = '/dashboard.html';
    // anchorElement.click();

  } else {
    alert("Invalid email or password");
  }
}

function handleLogout() {
  localStorage.removeItem("userEmail");
  window.location.href = "/";
}

function handleGenerate() {
  const email = document.getElementById("email").value
  const phone = document.getElementById("phone").value
  const days = document.getElementById("days").value
  const company = document.getElementById("company").value

  generateLink({email, phone, days, company})
}


function generateLink(data) {
  fetch(API_URL,
    {
      ...config,
      body: JSON.stringify(data)
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch();
}