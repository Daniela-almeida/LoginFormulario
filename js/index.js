// simulando um envio de form simples

function register(element) {
  const email = element.children.email.value;
  const password = element.children.password.value;
  const passwordConfirmation = element.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("EMAIL " + email + " Registrado com sucesso");
  } else {
    alert("coloque a senha correta!");
  }
}
