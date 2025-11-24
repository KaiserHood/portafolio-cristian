$(document).ready(function () {
  const texto = "Hola, soy Cristian Vargas";
  const h1 = $("#titulo");
  let i = 0;

  function escribir() {
    if (i < texto.length) {
      h1.text(texto.substring(0, i + 1));
      i++;
      setTimeout(escribir, 80);
    }
  }

  escribir();
});

