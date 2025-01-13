const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Selecionar o formulário
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Impedir comportamento padrão

  // Selecionar campos e spans de erro
  const campoNome = document.querySelector("#nome");
  const txtNome = document.querySelector("#txtNome");

  const campoEmail = document.querySelector("#email");
  const txtEmail = document.querySelector("#txtEmail");

  const campoSubject = document.querySelector("#subject");
  const txtSubject = document.querySelector("#txtSubject");

  const campoMessage = document.querySelector("#message");

  let isValid = true; // Indicador geral de validação

  // Validação do Nome
  if (campoNome.value.trim().length < 3) {
    txtNome.innerHTML = "O Nome deve ter no mínimo 3 caracteres.";
    campoNome.focus();
    isValid = false;
  } else {
    txtNome.innerHTML = "";
  }

  // Validação do E-mail
  if (!emailRegex.test(campoEmail.value)) {
    txtEmail.innerHTML = "Digite um E-mail válido.";
    campoEmail.focus();
    isValid = false;
  } else {
    txtEmail.innerHTML = "";
  }

  // Validação do Assunto
  if (campoSubject.value.trim().length < 5) {
    txtSubject.innerHTML = "O Assunto deve ter no mínimo 5 caracteres.";
    campoSubject.focus();
    isValid = false;
  } else {
    txtSubject.innerHTML = "";
  }

  // Se todas as validações forem bem-sucedidas
  if (isValid) {
    window.alert("Formulário enviado com sucesso!");

    // Resetar campos do formulário
    campoNome.value = "";
    campoEmail.value = "";
    campoSubject.value = "";
    campoMessage.value = "";
  }
});
