const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-1' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317A00;'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em até 24 horas.</p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-1' style='grid-colum: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato@bikicraft.net.</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disable = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);
  console.log(data.get("email"));

  fetch("./index.html", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
