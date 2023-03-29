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
    spesa.push(aggiungi)
    console.log (spesa)
  }
  document.getElementById("manca").value = '';
}

document.getElementById("bottonecosa").addEventListener("click", function (){
  stampaspesa();
}) 

let elementispesa

document.getElementById("rimuovi").addEventListener("click", function (){
  elementispesa = document.querySelectorAll('ul li');
  console.log(elementispesa);
  for (x=0 ; x<elementispesa.length; x++) {
    let element = elementispesa[x];
    console.log (element);

    element.addEventListener ("click", function(){
      if (element.style.textDecorationLine !== "line-through") {
        element.style.textDecorationLine = "line-through";
      } else {
        element.style.textDecorationLine = "";
      }
      
    })
  }
})






 






