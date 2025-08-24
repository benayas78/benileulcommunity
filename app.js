let users = {};
let currentUser = null;

// page navigation
function nextPage(n) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + n).classList.add("active");
}
function prevPage(n) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + n).classList.add("active");
}

// register
function register() {
  let u = document.getElementById("regUser").value;
  let p = document.getElementById("regPass").value;
  if (!u.endsWith("@beni.com")) {
    alert("Username must end with @beni.com");
    return;
  }
  if (users[u]) {
    alert("User already exists!");
    return;
  }
  users[u] = p;
  alert("Registered successfully!");
}

// login
function login() {
  let u = document.getElementById("logUser").value;
  let p = document.getElementById("logPass").value;
  if (users[u] && users[u] === p) {
    currentUser = u;
    document.getElementById("myUser").textContent = u;
    document.getElementById("myPass").textContent = p;
    nextPage(4);
  } else {
    alert("Invalid login");
  }
}

// chat
function sendMessage() {
  let msg = document.getElementById("chatInput").value;
  if (msg.trim() === "") return;
  let chatBox = document.getElementById("chatBox");
  chatBox.innerHTML += `<p><strong>${currentUser}:</strong> ${msg}</p>`;
  document.getElementById("chatInput").value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
