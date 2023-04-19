let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassaword = document.querySelector("#valor");
let passaword = document.querySelector("#passaword");

let containerPassaword = document.querySelector("#container-passaword");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@$"
let novaSenha = "";

sizePassaword.innerHTML = sliderElement.value;

slider.oninput = function() {
    sizePassaword.innerHTML = this.value;
  }
  
  
  function generatePassword(){
  
    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    console.log(pass)
    containerPassaword.classList.remove("hide");
    passaword.innerHTML = pass;
    novaSenha = pass;
  }
  
  function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
  }
  