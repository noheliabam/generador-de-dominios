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
          // Hack opcional
          let extSinPunto = ext.replace('.', '');
          let dominio = '';

          if (n.endsWith(extSinPunto)) {
            let hackeado = n.slice(0, -extSinPunto.length);
            dominio = `${p}${a}${hackeado}.${extSinPunto}`;
          } else {
            dominio = `${p}${a}${n}${ext}`;
          }

          let item = document.createElement("li");
          item.textContent = dominio;
          container.appendChild(item);

          // 🔎 Esto lo muestra en la consola del navegador:
          console.log(dominio);
        }
      }
    }
  }
}
