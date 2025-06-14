let pronoun = ['the', 'our'];
let adj = ['great', 'big', 'amazing'];
let noun = ['jogger', 'racoon', 'developer'];
let extensions = ['.com', '.net', '.es', '.io'];

function generarDominios() {
  let container = document.getElementById("dominios");
  container.innerHTML = ""; // Limpia la lista anterior

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let ext of extensions) {
          let dominio = `${p}${a}${n}${ext}`;
          let item = document.createElement("li");
          item.textContent = dominio;
          container.appendChild(item);
        }
      }
    }
  }
}
