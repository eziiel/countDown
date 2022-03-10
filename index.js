const dias = document.querySelector('#dias')
const meses = document.querySelector('#meses')
const ano = document.querySelector('#ano')
const btn = document.querySelector('#contar')
const res = document.querySelector('.res')
//variaveis
const anoAtual = new Date().getFullYear()
const tempoTotal = new Date().getTime()/1000/60/60/24

for(i = 1; i<=31; i++) {
  dias.innerHTML += '<option>' + i + "</opition>"
}
for(i = 1; i<=12; i++) {
  meses.innerHTML += '<option>' + i + "</opition>"
}
for(i = anoAtual; i<= (anoAtual + 8); i++) {
  ano.innerHTML += '<option>' + i + "</opition>"
}

function verificar (event) {
  const tempo = new Date(`${meses.value} ${dias.value} ${ano.value}`)
  const tempofut = tempo.getTime()/1000/60/60/24  
  
  const resp = (tempofut -tempoTotal).toFixed()
  res.innerText = "falta " + resp + " dias"
}

btn.addEventListener('click', verificar)
