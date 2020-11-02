class User{
    constructor(_name, _surname, _birthday, _gender, _email, _number, _subject){
        this.name=_name;
        this.surname=_surname;
        this.birthday=_birthday;
        this.gender=_gender;
        this.email=_email;
        this.number=_number;
        this.subject=_subject;
    }
    // ShowAll(){
    //     return `${this.name} ${this.surname} 
    //     ${this.birthday} ${this.gender} 
    //     ${this.email} ${this.number}
    //     ${this.subject}`;
    // };
}
var submit = document.querySelector("#submit-button");
var first_name=document.querySelector('.firstname-item');
var last_name=document.querySelector('.lastname-item');
var birthday=document.querySelector('.birthday-item');
var email=document.querySelector('.email-item');
var number=document.querySelector('.number-item');
var select=document.querySelector('.select-field');
console.log(select.value);
submit.addEventListener("click", function(){
    
    if (!first_name.value){
        alert("Ad sahəsi boş ola bilməz")
    }
    else if(!last_name.value){
        alert("Soyad sahəsi boş ola bilməz")
    }
    else if(!birthday.value){
        alert("Ag gunu sahəsi boş ola bilməz")
    }
    else if(!document.querySelector('#male').checked && !document.querySelector('#female').checked){
        alert("Gender sahəsi boş ola bilməz")
    }
    else if(!email.value){
        alert("Email sahəsi boş ola bilməz")
    }
    else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)){
        alert("Email duzgun deyil")
    }
    else if(!number.value){
        alert("Nomre sahəsi boş ola bilməz")
    }
    
    else if(select.value==='default'){
        alert("Selection sahəsi boş ola bilməz")
    }
});