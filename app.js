

const myForm = document.getElementById("myForm");
const submit = document.getElementById("submit");
const male = document.getElementById("male");
var gender;

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (male.checked) {
    gender = "male";
  } else {
    gender = "female";
  }

  const name = document.getElementById("name").value;
  const fatherName = document.getElementById("fatherName").value;
  const adresse = document.getElementById("adresse").value;
  const mobil = document.getElementById("mobil").value;
  const email = document.getElementById("email").value;
  const birthday = document.getElementById("birthday").value;
  const state = document.getElementById("state").value;
  const langauge = document.getElementById("langauge").value;

  localStorage.setItem("name", name);
  localStorage.setItem("fatherName", fatherName);
  localStorage.setItem("adresse", adresse);
  localStorage.setItem("gender", gender);
  localStorage.setItem("state", state);
  localStorage.setItem("langauge", langauge);
  localStorage.setItem("Tel No:", mobil);
  localStorage.setItem("email", email);
  localStorage.setItem("birthday", birthday);

  resultName.innerHTML = localStorage.getItem("name");
  resultFatherName.innerHTML = localStorage.getItem("fatherName");
  resultAdress.innerHTML = localStorage.getItem("adresse");
  resultBirthday.innerHTML = localStorage.getItem("birthday");
  resultMobil.innerHTML = localStorage.getItem("Tel No:");
  resultEmail.innerHTML = localStorage.getItem("email");
  resultGender.innerHTML = localStorage.getItem("gender");
  resultState.innerHTML = localStorage.getItem("state");
  resultLangauge.innerHTML = localStorage.getItem("langauge");

  document.querySelector(".form_header").style.display = "none";
  document.querySelector(".form_result").style.display = "block";
});

const close = document.querySelector(".fa-solid");
close.addEventListener("click", () => {
  document.querySelector(".form_result").style.display = "none";
  document.querySelector(".container").style.display = "none";
});
