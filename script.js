function converter() {
  let input = document.getElementById("inputText").value;

  if (!input.trim()) {
    alert("Cole a lista primeiro.");
    return;
  }

  let linhas = input.split("\n");
  let csvFinal = "Agencia,Conta,Banco\n";

  linhas.forEach(linha => {
    linha = linha.replace(/["]/g, "");   // remove "
    linha = linha.replace(/[|]/g, ",");  // troca | por vírgula
    csvFinal += linha.trim() + "\n";
  });

  document.getElementById("outputText").value = csvFinal;
}

function copiarCSV() {
  let output = document.getElementById("outputText");

  if (!output.value.trim()) {
    alert("Nada para copiar.");
    return;
  }

  output.select();
  document.execCommand("copy");

  alert("CSV copiado com sucesso!");
}

function baixarCSV() {
  let csv = document.getElementById("outputText").value;

  if (!csv.trim()) {
    alert("Nada para baixar.");
    return;
  }

  let blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  let link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "lista_convertida.csv";
  link.click();
}
