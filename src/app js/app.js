const modal = document.querySelector(".modal");
const fecharPop = document.querySelector(".fechar-pop");
let toast = document.querySelector(".toast");
let botaoCadastrarNodelist = document.querySelectorAll(".botao-compra");
let botaoCadastrarArray = [...botaoCadastrarNodelist]; // converter uma nodelist para array
const song = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/87/87-preview.mp3"
);

function toastTEMPO() {
  toast.classList.remove("visible");
}

botaoCadastrarArray.forEach(function (botaoCadastrar) {
  botaoCadastrar.onclick = function () {
    toast.classList.add("visible");
    song.play();
    setTimeout(toastTEMPO, 5000);
  };
});
fecharPop.addEventListener("click", function () {
  modal.style.display = "none";
});

function catSound() {
  const song = new Audio(
    "https://assets.mixkit.co/active_storage/sfx/87/87-preview.mp3"
  );

  song.play();
}

function dogSound() {
  const song = new Audio(
    "https://assets.mixkit.co/active_storage/sfx/54/54-preview.mp3"
  );

  song.play();
}

function birdSound() {
  const song = new Audio(
    "https://assets.mixkit.co/active_storage/sfx/1211/1211-preview.mp3"
  );

  song.play();
}

class registrarEmail {
  constructor() {
    this.formulario = document.querySelector(".form-email");
    this.modal = document.querySelector(".modal");
    this.fecharPop = document.querySelector(".fechar-pop");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const emailValidos = this.emailValido();

    if (camposValidos && emailValidos) {
      alert("Obrigado!");
      this.formulario.submit();
      modal.style.display = "none";
    }
  }

  emailValido(campo) {
    let valid = true;

    const email = this.formulario.querySelector(".email");
    if (email.value.length < 4 || email.value.length > 20) {
      valid = false;
      this.criaErro(email, "O email precisa ter entre 4 a 20 caracteres");
    }

    return valid;
  }

  camposSaoValidos() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      const label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.criaErro(campo, `${label} Esta vazio`);
        valid = false;
      }
    }
    return valid;
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");

    campo.insertAdjacentElement("afterend", div);
  }
}

const newUser = new registrarEmail();
