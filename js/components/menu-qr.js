export class MenuQr {
  constructor() {
    this.element = document.createElement('div')
    this.element.className = 'main'
    const h1 = document.createElement('h1')
    h1.textContent = 'Selecione o que deseja comprar'
    const div = document.createElement('div')
    div.className = 'menu-qr'
    this.element.appendChild(h1)
    this.element.appendChild(div)
  }
}