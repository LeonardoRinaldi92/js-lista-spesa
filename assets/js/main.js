let spesa = [
    "pane",
    "carne",
    "pesce",
    "vino"
]

let i = 0;

while (i < spesa.length) {
  document.getElementById("spesa").innerHTML+=`<li>${spesa[i]}</li>`;

  i++;
}

function stampaspesa (){
  let aggiungi = document.getElementById("manca").value.trim();
  if(aggiungi) {
    document.getElementById("spesa").innerHTML+=`<li>${aggiungi}</li>`;
  }
  document.getElementById("manca").value = '';
}

document.getElementById("bottonecosa").addEventListener("click", function (){
  stampaspesa();
}) 






