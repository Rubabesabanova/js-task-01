class User {
  constructor(_name, _surname, _birthday, _gender, _email, _number, _subject) {
    this.name = _name;
    this.surname = _surname;
    this.birthday = _birthday;
    this.gender = _gender;
    this.email = _email;
    this.number = _number;
    this.subject = _subject;
  }
}
var form = document.querySelector("#form");
var submit = document.querySelector("#submit-button");
var first_name = document.querySelector(".firstname-item");
var last_name = document.querySelector(".lastname-item");
var birthday = document.querySelector(".birthday-item");
var email = document.querySelector(".email-item");
var number = document.querySelector(".number-item");
var select = document.querySelector(".select-field");
var valid = true;
function Gender() {
  if (document.querySelector("#male").checked) {
    return "male";
  }
  return "female";
}
function BlankValidation(input, message, classname, parentclass_error, parentclass) {
  if (!input.value) {
    input.parentElement.className = parentclass_error;
    document.querySelector(classname).innerText = message;
    return false;
  } else {
    input.parentElement.className = parentclass;
  }
  return true;
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  Validation();
});

function Validation() {
  BlankValidation(first_name, "Ad sahesi bos ola bilmez", ".error-firstname", "row-items error", "row-items");
  BlankValidation(last_name, "Soyad sahesi bos ola bilmez", ".error-lastname", "row-items error", "row-items");
  BlankValidation(birthday, "Tarix sahesi bos ola bilmez", ".error-birthday", "row-items date-item error", "row-items date-item");
  if (!document.querySelector("#male").checked && !document.querySelector("#female").checked) {
    document.querySelector(".checkbox-wrapper").parentElement.className = "row-items checkbox-item error";
    document.querySelector(".error-gender").innerText = "Gender sagesi bos ola bilmez";
  } else {
    document.querySelector(".checkbox-wrapper").parentElement.classList.remove("error");
  }
  BlankValidation(email, "Email sahesi bos ola bilmez", ".error-email", "row-items error", "row-items");
  if (BlankValidation(email, "Email sahesi bos ola bilmez", ".error-email", "row-items error", "row-items") && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
    document.querySelector(".email-item").parentElement.className = "row-items error";
    document.querySelector(".error-email").innerText = "Emaili duzgun daxil edin";
  }
  BlankValidation(number, "Nomre sahesi bos ola bilmez", ".error-number", "row-items error", "row-items");

  if (select.value === "default") {
    document.querySelector(".select-field").parentElement.className = "row-items error";
    document.querySelector(".error-select").innerText = "Selection sagesi bos ola bilmez";
  } else {
    document.querySelector(".select-field").parentElement.classList.remove("error");
  }
  valid = Valid();
  console.log(valid);
  if (valid == true) {
    var user = new User(first_name.value, last_name.value, birthday.value, Gender(), email.value, number.value, select.value);
    console.log(user);
  }
}

function Valid() {
  for (i = 0; i < document.querySelectorAll(".row-items").length; i++) {
    if (document.querySelectorAll(".row-items")[i].classList.contains("error")) {
      return false;
    }
  }
  return true;
}
