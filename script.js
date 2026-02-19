let csvFinal = "";

function limparTexto(texto) {
  return texto
    .replace(/\|/g, ";")        // troca | por ;
    .replace(/"/g, "'")         // troca " por '
    .trim();
}

function gerarCSV() {
  const nome = limparTexto(document.getElementById("nomeCliente").value);
  const cpf = limparTexto(document.getElementById("cpfCliente").value);
  const telefone = limparTexto(document.getElementById("telefoneCliente").value);

  const linhas = document.getElementById("listaInput").value.split("\n");

  let resultado = "Nome,CPF,Telefone,Informacao\n";

  linhas.forEach(linha => {
    if (linha.trim() !== "") {
      const info = limparTexto(linha);
      resultado += `${nome},${cpf},${telefone},${info}\n`;
    }
  });

  csvFinal = resultado;
  document.getElementById("resultadoCSV").value = resultado;
}

function copiarCSV() {
  const area = document.getElementById("resultadoCSV");
  area.select();
  document.execCommand("copy");
  alert("CSV copiado com sucesso!");
}

function baixarCSV() {
  const blob = new Blob([csvFinal], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "clientes.csv";
  link.click();
}
