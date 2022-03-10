class data {
  constructor(inicio, fim, elemento) {
    this.inicio = inicio
    this.fim = fim
    this.elemento = elemento
  }
  static atualAno (aa ) {
    this.ano = new Date().getFullYear
    return this.ano
    console.log(this.ano)
  }
  res () {
   this.element = document.querySelector(this.elemento)
    for(var i = this.inicio; i <= this.fim; i++) {
      this.element.innerHTML += '<option>' + i + '</option>'
    }
    return this.element
  }
   static outPut(handleClick) {
    this.btn = document.querySelector(handleClick)
    this.btn.addEventListener('click', (event) => {
      const tempo = new Date(`${meses.value} ${dias.value} ${ano.value}`)
      const tempoPass = new Date().getTime()
      
      const dados = (tempo.getTime()/1000/60/60/24) - (tempoPass/1000/60/60/24)
      res.innerHTML = 'fatam ' +  dados.toFixed() + ' dias'
    })
  }
}

class anoAtual {
  Ano () {
    this.ano = new Date().getFullYear()
    return new data(this.ano, this.ano +5, '#ano').res()
  }
}

const dias = new data(1, 31, '#dias').res()
const meses = new data(1, 12, '#meses').res()
const ano = new anoAtual().Ano()
const btn = data.outPut('#contar')
const res = document.querySelector('.res')