document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  if (nome === "") {
    alert("o nome é obrigatorio");
  }

  if (email === "") {
    alert("o email é obrigatorio");
  }

  const mensagemSucesso = document.getElementById("mensagemSucesso");

  mensagemSucesso.style.display = "block";
});
