document.getElementById('signInForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form dari pengiriman default

  // Mendapatkan nilai input
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Kredensial yang benar
  var correctUsername = "falafayas";
  var correctPassword = "cinema";

  // Memeriksa kredensial
  if (username === correctUsername && password === correctPassword) {
      document.getElementById('loginMessage').innerText = "Login berhasil!";
      document.getElementById('loginMessage').style.color = "green"; 
      window.location.href = "index.html"
  } else {
      document.getElementById('loginMessage').innerText = "Username atau password salah.";
      document.getElementById('loginMessage').style.color = "red"; // Mengubah warna teks menjadi merah
  }
});
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
